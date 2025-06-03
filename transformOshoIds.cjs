const fs = require('fs');
const path = require('path');

// Define la ruta a tu archivo oshoMeanings.ts
// Asegúrate de que esta ruta sea correcta desde donde ejecutes el script
const OSHO_MEANINGS_PATH = 'D:\\lecturas\\src\\data\\oshoMeanings.ts';

fs.readFile(OSHO_MEANINGS_PATH, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Expresión regular para encontrar los IDs en el formato 'ID_DE_CARTA_OSHO'
    // y reemplazarlos con 'id-de-carta-osho'
    const transformedData = data.replace(/'([A-Z_]+_OSHO)'/g, (match, p1) => {
        // Convierte a minúsculas y reemplaza guiones bajos por guiones
        const newId = p1.toLowerCase().replace(/_/g, '-');
        return `'${newId}'`;
    });

    // Escribe el contenido transformado de nuevo en el archivo
    fs.writeFile(OSHO_MEANINGS_PATH, transformedData, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir el archivo transformado:', err);
            return;
        }
        console.log('¡oshoMeanings.ts transformado exitosamente!');
        console.log('Recuerda verificar el archivo para asegurar que todo esté correcto.');
    });
});