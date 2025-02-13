// INICIALIZANDO 2 addEventListener's (Adição de nota na memória incluindo Reset no Input & Apresentar a média na tela)
document.querySelector("#buttonAdd").addEventListener("click", inserirNota)
document.querySelector("#buttonMedia").addEventListener("click", mostrarMedia)

// INICIALIZANDO 2 VARIÁVEIS
let n = 1
let media = 0

// Validando número adicionado no input
function exception(nota, notaNumerica) { // parseFloat de 12,34,56 é igual a 12, portanto será um "Positivo Falso"
    //ex: Amostra de Erro: {[""]}
    if (nota == "") {
        alert("Por favor, insira uma nota.")
        return true
    } //ex: Amostra de Erro: {[12,3456,78],[12.3456.78],[12,3456.78],[12.3456,78]}
    else if ((nota.split("").filter(elm => (elm == "," || elm == ".")).length > 1)) { 
        alert("Por favor, insira um valor válido.")
        return true
    }
    //ex: Amostra de Erro: {[#$12,345678@],[12.345678+op]}
    else if (isNaN((notaNumerica))) {
        alert("Por favor, insira um valor válido.")
        return true
    }
    return false
}

// Tentiva de inserir a nota na memória
function inserirNota() {
    let nota = document.querySelector("#nota").value;
    let notaNumerica = parseFloat(nota.replace(",", "."))
    if (!exception(nota, notaNumerica)) {
        document.querySelector("#memory").value += `A nota ${n} foi: ${notaNumerica}\n`; // Armazenamento na memória
        media += notaNumerica; // Armazenamento do valor na média de antemão
        n++;
    }
    document.querySelector("#nota").value = "" // Reset do input de nota
}

// Apresentação da média
function mostrarMedia() {
    document.querySelector("#mediaOutput").innerHTML = `A média é: ${(media/(n-1)).toFixed(2)}`
}