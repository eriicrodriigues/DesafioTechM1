let nome = "Eric"
let dataDeNascimento = "03/09/2006"
const pacote = 1800.00
let idade = calcularIdade(dataDeNascimento)
let matricula = calcularDataMatricula(dataDeNascimento)
let dataAtual = formatarDataAtual()

console.log(dataAtual)
console.log(matricula)
console.log("====  AUTO ESCOLA PORTO SEGURO  ====")

if (idade <= 16) {
    console.log(`Olá ${nome}, Vimos que você tem ${idade} anos!
Portanto você ainda não pode se matricular!
Somente na data: ${matricula}.`)
} else if (idade <= 18 && dataAtual < matricula) {
    const desc = pacote - (pacote * 0.2)
    console.log(`Olá ${nome}, Vimos que você tem ${idade} anos!
Se fizer sua pré-matrícula AGORA!
Ganhará 20% de desconto e o valor fica R$${desc},00.
Sua matrícula poderá ser efetuada a partir de: ${matricula}.`)
} else if (idade >= 18 && idade <= 40) {
    console.log(`Olá ${nome}, Vimos que você tem ${idade} anos!
E sua matrícula já pode ser efetuada!
O valor é de R$${pacote},00.`)
} else {
    const desc = pacote - (pacote * 0.4)
    console.log(`Olá ${nome}, Vimos que você tem ${idade} anos!
E sua matrícula terá 40% de desconto!
O valor fica R$${desc},00.`)
}

function calcularIdade(dataDeNascimento) {
    let partes = dataDeNascimento.split("/")
    let dataFormatada = new Date(partes[2], partes[1] - 1, partes[0])
    
    let dataAtual = new Date()

    let idade = dataAtual.getFullYear() - dataFormatada.getFullYear()

    let mesAtual = dataAtual.getMonth()
    let diaAtual = dataAtual.getDate()

    if (mesAtual < dataFormatada.getMonth() || (mesAtual === dataFormatada.getMonth() && diaAtual < dataFormatada.getDate())) {
        idade--
    }

    return idade
}

function calcularDataMatricula(dataDeNascimento) {
    let partes = dataDeNascimento.split("/")
    let dataFormatada = new Date(partes[2], partes[1] - 1, partes[0])
    
    let dataAtual = new Date()

    let idade = dataAtual.getFullYear() - dataFormatada.getFullYear()

    let mesAtual = dataAtual.getMonth()
    let diaAtual = dataAtual.getDate()

    if (mesAtual < dataFormatada.getMonth() || (mesAtual === dataFormatada.getMonth() && diaAtual < dataFormatada.getDate())) {
        idade--
    }

    let anoMatricula = dataAtual.getFullYear() + (18 - idade);
    
    if (idade <= 18) {
        let dataMatricula = new Date(anoMatricula, dataFormatada.getMonth(), dataFormatada.getDate() + 1)

        let dia = String(dataMatricula.getDate()).padStart(2, '0')
        let mes = String(dataMatricula.getMonth() + 1).padStart(2, '0') 
        let ano = dataMatricula.getFullYear()

        return `${dia}/${mes}/${ano}`
    }

    return null; 
}

function formatarDataAtual() {
    let dataAtual = new Date()

    let dia = String(dataAtual.getDate()).padStart(2, '0')
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
    let ano = dataAtual.getFullYear()

    return `${dia}/${mes}/${ano}`
}