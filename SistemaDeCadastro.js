//Data do Evento
let dataDoEvento = new Date('25/06/2022')
let dataHoje = new Date()

 console.log(dataEvento)
 if(dataEvento > dataHoje) {
    console.log("Evento válido")
 } else {
    console.log("Data inválida, cadastro não permitido")
}
//Idade dos participantes 
let idadeParticipante = 17
if (idadeParticipante >= 18) {
    console.log("Idade válida")
} else {
    console.log("Idade menor do que permitido, cadastro inválido")
}
//Quantidade de participantes
let quantParticipantes = 150
if (quantParticipantes >= 100) {
    console.log("Cadastro realizado com sucesso!")
} else {
    console.log("Alerta, quantidade de participantes excede o limite")
}
//Lista dos Participantes e Palestrantes
let listaParticipantes = ["Danilo", "Leandro", "Luisa", "Filipe"]
let listaPalestrantes = ["Luan","Pedro","Catarina","Emily"]

for(let contador = 0; contador < listaParticipantes.length; contador ++) {
    console.log(listaParticipantes[contador])
}