const formulario = document.querySelector('form')
const cxpeso = document.querySelector('#peso')
const cxaltura = document.querySelector('#altura')
const cximc = document.querySelector('#btnimc')
const btenviar = document.querySelector('#btnenviar')
const btlimpar = document.querySelector('#btnlimpar')
const cxaviso = document.querySelector('#aviso')


btenviar.addEventListener('click',(evt)=>{
    let peso = cxpeso.value
    let altura = cxaltura.value 
    let imc = (peso / (altura*altura)).toFixed(1)
    evt.preventDefault()

    cximc.value = imc
    let sit = situacaoImc(imc)
    cxaviso.textContent = sit
})

const situacaoImc = (imc)=>{
    let situacao = ''
    if (imc < 18.5){
        situacao = 'Abaixo do peso'
    }else if (imc >= 18.5 && imc <= 24.9){
        situacao = 'Peso normal'
    }else if (imc >= 25 && imc <= 29.9){
        situacao = 'Sobrepeso'
    }else if (imc >= 30 && imc <= 34.9){
        situacao = 'Obesidade I'
    }else if (imc >= 35 && imc <= 39.9){
        situacao = 'Obesidade II'
    }else if (imc >= 40){
        situacao = 'Obesidade III'
    }else{
        situacao = 'Digite seus dados corretamente'
    }
    return situacao
}