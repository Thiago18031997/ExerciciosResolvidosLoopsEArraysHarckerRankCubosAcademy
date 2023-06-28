function solucao(sequencia) {
	const avancos = (sequencia.match(/>/g) || []).length
    const retornos = (sequencia.match(/</g) || []).length

    let calculoDePosicao = 0
    if (avancos > retornos) {
        calculoDePosicao = (avancos - retornos) % 7
    } else {
        calculoDePosicao = (7 - (retornos - avancos) % 7) % 7
    }

    return calculoDePosicao
}

function processData(input) {
   return solucao(input);
} 
console.log(processData("<"))