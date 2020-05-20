//requires
const fs = require('fs'); //paquetes propiamente de node
const colors = require('colors'); //tengo que colocar el require por cada archivo que necesite esta libreria
//const fs = require('express'); //paquetes codificados por otra persona
//const fs = require('../fs'); //archivos de paquetes que nosotros mismos escribimos y deberia estar en nuestro proyecto

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log("======================".green);
        console.log(`===== Tabla de ${base} =====`.green);
        console.log("======================".green);


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);

    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

//existe un objeto global llamado modulo
//en la parte de exportaciones se entiende como objetos que seran utilizados de manera global
module.exports = {
    crearArchivo,
    listarTabla
}