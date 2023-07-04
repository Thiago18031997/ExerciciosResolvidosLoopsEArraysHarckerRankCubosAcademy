function solucao(primeiraLetra, segundaLetra, palavras) {
	let juncao = primeiraLetra + segundaLetra
    let contador = 0
    for(let palavra of palavras)
        if(palavra.substring(0,2) === juncao){
            console.log(palavra)
            contador++
        }
           
    if(contador === 0)
        console.log("NENHUMA")

}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});