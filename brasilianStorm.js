function solucao(notas) {
	let menorNota = Math.min(...notas)
    let maiorNota = Math.max(...notas)
    let media = (notas.reduce((acumulador, item) => acumulador + item, 0) - maiorNota - menorNota) / (notas.length - 2) 
    console.log(media)
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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