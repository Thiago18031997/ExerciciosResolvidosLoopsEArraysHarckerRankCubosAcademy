function solucao(precos) {
    if(precos.length >= 5)
    {
        const total = precos.reduce((acc, cur) => acc + cur, 0)
        let reducao = Math.min(...precos)
        console.log(total  - reducao)
    }
    else
    {
        const total = precos.reduce((acc, cur) => acc + cur, 0)
        console.log(total)
    }
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}

let arr = "100 100 100"
processData(arr)