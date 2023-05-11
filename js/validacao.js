export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if (validadores[tipoDeUnput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNacimento:input => validaDataNascimento(input)
}

function validaDataNacimente(input){
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastras.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}