// front-end deve sempre trazer no timezone local
// Importando a biblioteca Moment.js
const moment = require('moment-timezone');

// Definindo o fuso horário a ser simulado
const tz = 'America/Sao_Paulo';

// Obtendo a data e hora atual no fuso horário do sistema
const now = moment.tz(new Date(), moment.tz.guess());
console.log(now)

// Convertendo a data e hora para o fuso horário desejado
const nowTz = now.tz(tz);

// Imprimindo a data e hora no fuso horário desejado
console.log(nowTz.format('YYYY-MM-DD HH:mm:ss z'));
