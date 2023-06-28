function solucao(stringCorrompida) {

	return stringCorrompida.replace(/[^a-zA-Z ]/g, '')
}
let dadoCorrompido = "Felis) silvestris *catus&	"
console.log(solucao(dadoCorrompido))