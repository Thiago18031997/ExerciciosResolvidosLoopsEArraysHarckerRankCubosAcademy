let obj = [
  {
    "letra": "m",
    "palavras": [
      "mamao",
      "maca",
      "melao",
      "melancia",
      "laranja"
    ]
  }
]


function solucao(letra, palavras) {
	let contador = 0
    let re = new RegExp(`^${letra}`)
    for(palavra of palavras)
        if(!re.test(palavra))
            contador++
    console.log(contador)
}

function processData(input) {
	const {letra, palavras} = JSON.parse(input)[0];
    solucao(letra, palavras);
} 
processData(JSON.stringify(obj))