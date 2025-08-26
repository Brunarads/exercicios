for (let i = 2; i <= 9; i++) { // tabuada do 2 até o 9
  let linha = ""; // string para armazenar cada linha da tabuada
  for (let j = 1; j <= 10; j++) { // de 1 até 10
    linha += `${i} x ${j} = ${i * j}  |  `; 
  }
  console.log(linha); // imprime a linha completa da tabuada
}
