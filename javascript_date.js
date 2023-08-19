// date normal ja traz no formato utc por padrão
const date = new Date()

// a função .toISOString() converte a data para UTC
console.log(date.toISOString())
console.log(date.toLocaleString())
