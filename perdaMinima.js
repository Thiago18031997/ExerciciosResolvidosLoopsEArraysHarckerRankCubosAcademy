function calcularPerdaMinima(preco) {
  let perdaMinima = Infinity;

  for (let i = 0; i < preco.length; i++) 
    for (let j = i + 1; j < preco.length; j++)
      if(preco[i] - preco[j] < perdaMinima && preco[i] - preco[j] > 0)
        perdaMinima = preco[i] - preco[j]

  return perdaMinima;
}

const input = [5, 10, 3];
console.log(calcularPerdaMinima(input));  // Saída: 2

const input2 = [30, 10, 54, 76, 1, 4, 35];
console.log(calcularPerdaMinima(input2));  // Saída: 6