import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, ISeriesApi, UTCTimestamp, CandlestickSeries, LineStyle, IPriceLine, SeriesMarker, createSeriesMarkers } from 'lightweight-charts';
import { Minus, ArrowUpCircle, ArrowDownCircle, Trash2, MousePointer2, AlignJustify, Type } from 'lucide-react';

export interface CandleData {
  exchange: string;
  symbol: string;
  interval: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  timestamp: string;
}

interface CandleChartProps {
  candles: CandleData[];
  symbol?: string;
  exchange?: string;
  height?: number;
}

export function CandleChart({ candles, symbol = 'BTC/USDT', exchange, height = 400 }: CandleChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  const [drawMode, setDrawMode] = useState<'none' | 'line' | 'long' | 'short' | 'fibonacci' | 'text'>('none');
  const priceLinesRef = useRef<IPriceLine[]>([]);
  const fibPointRef = useRef<number | null>(null);
  const markersRef = useRef<SeriesMarker<UTCTimestamp>[]>([]);
  const markersApiRef = useRef<any>(null);

  // Inicializa o gráfico
  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#1a1b1e' },
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.05)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.05)' },
      },
      width: chartContainerRef.current.clientWidth,
      height: height,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      }
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: '#10b981',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#10b981',
      wickDownColor: '#ef4444',
    });

    const seriesMarkers = createSeriesMarkers(series, []);

    chartRef.current = chart;
    seriesRef.current = series;
    markersApiRef.current = seriesMarkers;

    const resizeObserver = new ResizeObserver((entries) => {
      if (chartContainerRef.current) {
        const { width } = entries[0].contentRect;
        chart.applyOptions({ width });
      }
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [height]);

  // Carrega histórico
  useEffect(() => {
    if (!seriesRef.current) return;

    let isMounted = true;
    const fetchHistorical = async () => {
      try {
        const res = await fetch(`http://localhost:4001/api/market/historical?exchange=${exchange}&symbol=${encodeURIComponent(symbol)}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.length > 0) {
            const formatted = data.map((c: any) => ({
              time: (Math.floor(c.timestamp / 1000)) as UTCTimestamp,
              open: c.open,
              high: c.high,
              low: c.low,
              close: c.close,
            }));
            
            // Lightweight charts exige dados únicos e estritamente ordenados
            const uniqueFormatted = Array.from(new Map(formatted.map((item: any) => [item.time, item])).values());
            uniqueFormatted.sort((a: any, b: any) => a.time - b.time);

            seriesRef.current?.setData(uniqueFormatted as any[]);
            setDataLoaded(true);
          }
        }
      } catch (err) {
        console.error('Failed to fetch historical data', err);
      }
    };

    fetchHistorical();

    return () => { isMounted = false; };
  }, [exchange, symbol]);

  // Atualiza com dados ao vivo (WebSocket)
  useEffect(() => {
    if (!seriesRef.current || !dataLoaded || candles.length === 0) return;

    const relevantCandles = candles
      .filter(c => c.symbol === symbol && (!exchange || c.exchange === exchange))
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    if (relevantCandles.length === 0) return;

    // Atualiza apenas a vela mais recente
    const latest = relevantCandles[relevantCandles.length - 1];
    const time = (Math.floor(new Date(latest.timestamp).getTime() / 1000)) as UTCTimestamp;

    try {
      seriesRef.current.update({
        time,
        open: latest.open,
        high: latest.high,
        low: latest.low,
        close: latest.close
      });
    } catch (e) {
      // Ignora pequenos desvios de tempo do websocket
    }
  }, [candles, symbol, exchange, dataLoaded]);

  // Tools Interaction
  useEffect(() => {
    if (!chartRef.current || !seriesRef.current || drawMode === 'none') return;

    const chart = chartRef.current;
    const series = seriesRef.current;

    const clickHandler = (param: any) => {
      if (!param.point || !param.time) return;

      if (drawMode === 'line') {
        const price = series.coordinateToPrice(param.point.y);
        if (price !== null) {
          const line = series.createPriceLine({
            price,
            color: '#3b82f6',
            lineWidth: 2,
            lineStyle: LineStyle.Solid,
            axisLabelVisible: true,
            title: 'S/R',
          });
          priceLinesRef.current.push(line);
        }
      } else if (drawMode === 'long' || drawMode === 'short') {
        const time = param.time as UTCTimestamp;
        const newMarker: SeriesMarker<UTCTimestamp> = {
          time,
          position: drawMode === 'long' ? 'belowBar' : 'aboveBar',
          color: drawMode === 'long' ? '#10b981' : '#ef4444',
          shape: drawMode === 'long' ? 'arrowUp' : 'arrowDown',
          text: drawMode === 'long' ? 'Long' : 'Short',
        };
        markersRef.current.push(newMarker);
        // lightweight-charts exige ordenação por tempo
        markersRef.current.sort((a: SeriesMarker<UTCTimestamp>, b: SeriesMarker<UTCTimestamp>) => (a.time as number) - (b.time as number));
        if (markersApiRef.current) {
          markersApiRef.current.setMarkers(markersRef.current);
        }
        setDrawMode('none');
      } else if (drawMode === 'fibonacci') {
        const price = series.coordinateToPrice(param.point.y);
        if (price !== null) {
          if (fibPointRef.current === null) {
            fibPointRef.current = price;
            // Indicador visual simples de que o primeiro clique foi dado
            alert('Fibonacci: Primeiro ponto marcado. Clique no segundo ponto.');
          } else {
            const price1 = fibPointRef.current;
            const price2 = price;
            const diff = price2 - price1;
            const levels = [0, 0.382, 0.5, 0.618, 1];
            levels.forEach(level => {
              const p = price1 + diff * level;
              const line = series.createPriceLine({
                price: p,
                color: '#8b5cf6', // purple
                lineWidth: 1,
                lineStyle: LineStyle.Dashed,
                axisLabelVisible: true,
                title: `Fib ${(level * 100).toFixed(1)}%`,
              });
              priceLinesRef.current.push(line);
            });
            fibPointRef.current = null;
            setDrawMode('none');
          }
        }
      } else if (drawMode === 'text') {
        const label = window.prompt("Enter text annotation:");
        if (label) {
          const time = param.time as UTCTimestamp;
          const newMarker: SeriesMarker<UTCTimestamp> = {
            time,
            position: 'aboveBar',
            color: '#f59e0b',
            shape: 'circle',
            text: label,
          };
          markersRef.current.push(newMarker);
          markersRef.current.sort((a: SeriesMarker<UTCTimestamp>, b: SeriesMarker<UTCTimestamp>) => (a.time as number) - (b.time as number));
          if (markersApiRef.current) {
            markersApiRef.current.setMarkers(markersRef.current);
          }
        }
        setDrawMode('none');
      }
      
      if (drawMode === 'line') {
        setDrawMode('none');
      }
    };

    chart.subscribeClick(clickHandler);
    
    const container = chartContainerRef.current;
    if (container) {
      container.style.cursor = 'crosshair';
    }

    return () => {
      chart.unsubscribeClick(clickHandler);
      if (container) {
        container.style.cursor = 'default';
      }
    };
  }, [drawMode]);

  const clearDrawings = () => {
    if (seriesRef.current) {
      priceLinesRef.current.forEach((line: IPriceLine) => seriesRef.current?.removePriceLine(line));
      priceLinesRef.current = [];
      
      markersRef.current = [];
      fibPointRef.current = null;
      if (markersApiRef.current) {
        markersApiRef.current.setMarkers([]);
      }
    }
  };

  return (
    <div style={{ width: '100%', minWidth: 0, border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', backgroundColor: 'var(--surface)', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>
          {exchange ? `${exchange.toUpperCase()} : ` : ''}{symbol} - Live Market
        </h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button 
            title="Pointer"
            onClick={() => setDrawMode('none')}
            style={{ background: drawMode === 'none' ? 'var(--primary)' : 'transparent', border: '1px solid var(--border)', color: '#fff', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <MousePointer2 size={16} />
          </button>
          <button 
            title="Support/Resistance Line"
            onClick={() => setDrawMode('line')}
            style={{ background: drawMode === 'line' ? 'var(--primary)' : 'transparent', border: '1px solid var(--border)', color: '#3b82f6', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <Minus size={16} strokeWidth={3} />
          </button>
          <button 
            title="Long Position"
            onClick={() => setDrawMode('long')}
            style={{ background: drawMode === 'long' ? 'var(--primary)' : 'transparent', border: '1px solid var(--border)', color: '#10b981', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <ArrowUpCircle size={16} />
          </button>
          <button 
            title="Short Position"
            onClick={() => setDrawMode('short')}
            style={{ background: drawMode === 'short' ? 'var(--primary)' : 'transparent', border: '1px solid var(--border)', color: '#ef4444', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <ArrowDownCircle size={16} />
          </button>
          <button 
            title="Fibonacci Retracement"
            onClick={() => { setDrawMode('fibonacci'); fibPointRef.current = null; }}
            style={{ background: drawMode === 'fibonacci' ? 'var(--primary)' : 'transparent', border: '1px solid var(--border)', color: '#8b5cf6', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <AlignJustify size={16} />
          </button>
          <button 
            title="Text Annotation"
            onClick={() => setDrawMode('text')}
            style={{ background: drawMode === 'text' ? 'var(--primary)' : 'transparent', border: '1px solid var(--border)', color: '#f59e0b', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <Type size={16} />
          </button>
          <div style={{ width: '1px', height: '16px', background: 'var(--border)', margin: '0 4px' }} />
          <button 
            title="Clear All Drawings"
            onClick={clearDrawings}
            style={{ background: 'transparent', border: '1px solid var(--border)', color: '#9ca3af', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', display: 'flex' }}
          >
            <Trash2 size={16} />
          </button>
          <span style={{ fontSize: '0.8rem', color: dataLoaded ? '#10b981' : '#f59e0b', marginLeft: '8px' }}>
            {dataLoaded ? '● Connected' : '○ Loading...'}
          </span>
        </div>
      </div>
      <div ref={chartContainerRef} style={{ width: '100%', height: `${height}px`, position: 'relative' }} />
    </div>
  );
}
