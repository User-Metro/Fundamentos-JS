const expresion = 'plátanos';

switch (expresion) {
  case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
  case 'Platanos':
    console.log('El kilogramo de plátanos cuesta $0.48.');
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expresion + '.');
}

console.log("¿Hay algo más que quisiera consultar?");

