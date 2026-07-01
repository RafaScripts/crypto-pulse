const { spawn } = require('child_process');

const mcp = spawn('node', ['/home/rafael/Desktop/projects/crypto-pulse-package/crypto-pulse/services/mcp-server/dist/index.js']);

let fullData = '';

mcp.stdout.on('data', (data) => {
    fullData += data.toString();
    const parts = fullData.split('\n');
    fullData = parts.pop(); // Keep incomplete chunk

    for (const line of parts) {
        if (!line.trim()) continue;
        try {
            const parsed = JSON.parse(line);
            if (parsed.id === 1) {
                console.log('✅ Conexão Inicializada com o Servidor MCP!');
                mcp.stdin.write(JSON.stringify({"jsonrpc":"2.0","method":"notifications/initialized"}) + '\n');
                console.log('🚀 Chamando adr_advisor (Gemini 2.5 Flash)...');
                mcp.stdin.write(JSON.stringify({"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"adr_advisor","arguments":{"question":"Como a persistência de cotações deve ser arquitetada no Crypto Pulse de acordo com as nossas ADRs e tecnologias?"}}}) + '\n');
            } else if (parsed.id === 2) {
                console.log('\n🧠 RESPOSTA DO GEMINI 2.5 FLASH:\n');
                console.log(parsed.result.content[0].text);
                console.log('\n✅ TESTE CONCLUÍDO COM SUCESSO!');
                process.exit(0);
            } else if (parsed.error) {
                console.error('\n❌ ERRO DO MCP:', parsed.error);
                process.exit(1);
            }
        } catch (e) {
            console.log('Log Interno:', line);
        }
    }
});

mcp.stderr.on('data', (data) => {
    console.error('ALERTA:', data.toString());
});

// Envia a Inicialização do Protocolo MCP
mcp.stdin.write(JSON.stringify({"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"AntigravityTest","version":"1.0.0"}}}) + '\n');
