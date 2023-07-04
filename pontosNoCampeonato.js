function solucao(resultados) {
    let contador = 0
	for(let partida of resultados)
        if(partida === "V")
            contador += 3
        else if(partida === "E")
            contador += 1
    console.log(contador)
}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
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