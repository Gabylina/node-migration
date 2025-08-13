const fs = require('fs');
const path = require('path');

module.exports = function(app) {
  const controllersPath = path.join(__dirname, 'src', 'controllers');

  fs.readdirSync(controllersPath).forEach(file => {
    if (file.endsWith('.js')) {
      const routePath = '/' + file.replace('Controller.js', '').toLowerCase();
      const controller = require(path.join(controllersPath, file));
      app.use(routePath, controller);
    }
  });
};
