export function valida(input) {
    const tipoDeInput = input.dataset.tipo


    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    
    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalido")
     }else {
         input.parentElement.classList.add("input-containerr--invalido")
     }
 
}

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email:{
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio',
        patternMismatch: 'Sua senha deve conter entre 6 a 12 caracters, deve conter pelo menos uma          letra  maiúscula, um número e não deve conter símbolos.'
    },
    dataNacimento: {
        valueMissing: 'O campo de data de nacimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    }
}



const validadores = {
    dataNacimento:input => validaDataNacimento(input)
}

function validaDataNacimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}