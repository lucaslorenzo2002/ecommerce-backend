# ecommerce-backend
Ecommerce backend desarrollado con node, express y mongodb entre otros.

#Tecnologias utilizadas
-Node
-Express
-Mongodb

#Dependencias
    "axios": "^1.3.4",
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dayjs": "^1.11.7",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "express-handlebars": "^7.0.4",
    "express-session": "^1.17.3",
    "method-override": "^3.0.0",
    "minimist": "^1.2.8",
    "mongoose": "^7.0.3",
    "nodemailer": "^6.9.1",
    "nodemon": "^2.0.22",
    "normalizr": "^3.6.2",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "pino": "^8.11.0",
    "socket.io": "^4.6.1",
    "twilio": "^4.10.0"
    
#Scripts
    "test-productos": "mocha tests/productos.test.js",
    "start": "node server.js",
    "watch": "nodemon server.js",
    "dev": "set NODE_ENV=desarrollo&& node server.js",
    "prod": "set NODE_ENV=produccion&& node server.js"

#Features
-Tenes la posibilidad de registrarte como usuario o como administrador
-Si sos usuario podras: -ver todos los productos publicados, sus detalles, filtrarlos, agregarlos a favoritos y agregarlos al carrito
-Si sos administrador podras: -crear, editar o eliminar productos

#Deploy
-El proyecto esta deployado en railway
