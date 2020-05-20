//aplicando destructuracion
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//version seccion 4.34
let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((data) => console.log(data))
            .catch(err => console.log(err));
        break;

    case 'crear':
        //Version seccion 4.30
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no está permitido');
        break;
}

//Version seccion 4.30
//let base = 'abc';

//Version seccion 4.30
//console.log(multiplicar)

//Version seccion 4.31
//en el process existe una propiedad importante argv (argumentos)
//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log('limite', argv.limite);

/*let parametro = argv[2];
let base = parametro.split('=')[1];*/