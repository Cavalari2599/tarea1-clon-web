const express = require('express');
const app = express();

// Carpeta pública
app.use(express.static('docs'));

// Levantar servidor
app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});