let btn = document.getElementById("btn") //tanto faz aspas simples ou duplas
let resultado = document.getElementById("resultado")

let arrPessoa = []

function cadastrar() {

    let nome = document.getElementById('nome').value //nn esquecer do .value pois é ele que traz o q o usuario escreveu
    let sobrenome = document.getElementById('sobrenome').value
    let categoria = document.getElementById('categoria').value
    //-----------------------------------------------------------------
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    //-----------------------------------------------------------------
    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        categoria: categoria,
        altura: altura,
        peso: peso,
        imc: calcularIMC(peso, altura),
        categoriaImc: categoriaIMC(calcularIMC(peso, altura))
    }

    arrPessoa.push(pessoa)
    imprimir()
    console.log(arrPessoa)
    
}

function calcularIMC(peso, altura) {
    //let imc = peso/(altura*altura)
    return peso / Math.pow(altura, 2)

}

function categoriaIMC(imc) {

    if (imc <= 18.5) {
        return 'Abaixo do Normal'
    } else if (imc <= 24.9) {
        return 'Normal'
    } else if (imc <= 29.9) {
        return 'Sobrepeso'
    } else if (imc <= 34.9) {
        return 'Obesidade grau I'
    } else if (imc <= 39.9) {
        return 'Obesidade grau II'
    } else {
        return 'Obesidade grau III'
    }


}

function imprimir(){

resultado.innerHTML = ''

    for(let i = 0; i < arrPessoa.length; i++)
    resultado.innerHTML += `
    <tr>
    <td>${arrPessoa[i].nome} ${arrPessoa[i].sobrenome}</td>
    <td>${arrPessoa[i].categoria}</td>
    <td>${arrPessoa[i].peso}</td>
    <td>${arrPessoa[i].altura}</td>
    <td>${arrPessoa[i].imc.toFixed(2)} </td>
    <td>${arrPessoa[i].categoriaImc}</td>
    </tr>
    `
}

btn.addEventListener('click', cadastrar)