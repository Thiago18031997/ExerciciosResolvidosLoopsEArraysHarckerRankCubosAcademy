function solucao(disparos) {
    let contador = 0
    disparos.reduce((acumulador, item) => {
      if(item > 70) {
        contador++ 
      }
    }, 0)

    console.log(contador >= 3? contador : "ELIMINADO")
}

function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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