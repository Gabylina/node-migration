const fs = require('fs');
const path = require('path');

const controllersDir = path.join(__dirname, 'src', 'controllers');

fs.readdir(controllersDir, (err, files) => {
  if (err) {
    console.error('❌ No se pudo leer la carpeta src/controllers:', err.message);
    process.exit(1);
  }

  const jsFiles = files.filter(file => file.endsWith('.js'));

  if (jsFiles.length === 0) {
    console.warn('⚠️ No se encontraron archivos .js en src/controllers');
    return;
  }

  let hasErrors = false;

  jsFiles.forEach(file => {
    const filePath = path.join(controllersDir, file);
    try {
      require(filePath);
      console.log(`✅ ${file} importado correctamente`);
    } catch (error) {
      console.error(`❌ Error al importar ${file}:`, error.message);
      hasErrors = true;
    }
  });

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log('🎉 Todos los controladores fueron validados con éxito');
  }
});

