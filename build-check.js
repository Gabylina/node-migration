const { exec } = require('child_process');

console.log('🟡 Iniciando verificación del servidor...');

const server = exec('node index.js');

setTimeout(() => {
  server.kill();
  console.log('✅ Servidor levantado y cerrado correctamente');
}, 5000);

server.stderr.on('data', (data) => {
  console.error('❌ Error en el servidor:', data);
  process.exit(1);
});
