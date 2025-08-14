const { spawn } = require('child_process');

console.log('🟡 Iniciando verificación del servidor (5s)...');
const child = spawn(process.execPath, ['index.js'], { stdio: 'inherit' });

const timer = setTimeout(() => {
  console.log('✅ Servidor levantado. Cerrando verificación…');
  child.kill();
  process.exit(0);
}, 5000);

child.on('exit', (code) => {
  clearTimeout(timer);
  if (code !== 0) {
    console.error(`❌ El servidor salió con código ${code}`);
    process.exit(code);
  }
});
child.on('error', (err) => {
  console.error('❌ Error al iniciar el servidor:', err.message);
  process.exit(1);
});
