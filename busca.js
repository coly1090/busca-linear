let numeros = [10, 20, 30, 40, 50, 60, 70, 80]
function buscaLinear(array, valor) { let
iteracoes = 0;
for (let i = 0; i < array.length; i++) { iteracoes++;
if (array[i] === valor) { return {
encontrado: true,
posicao: i, iteracoes:
iteracoes
};
}
}
return { encontrado:
false, posicao: -1,
iteracoes: iteracoes
};
}
function buscaBinaria(array, valor) { let inicio
= 0;
let fim = array.length - 1; let
iteracoes = 0;
while (inicio <= fim) { iteracoes++;
let meio = Math.floor((inicio + fim) / 2); if
(array[meio] === valor) {
return { encontrado:
true, posicao: meio,
iteracoes: iteracoes
};
} else if (array[meio] < valor) { inicio = meio +
1;
} else {
fim = meio - 1;
}
}
return { encontrado:
false, posicao: -1,
iteracoes: iteracoes
};
}

let valor = 90;
let resultadoLinear = buscaLinear(numeros, valor); let
resultadoBinaria = buscaBinaria(numeros, valor);
console.log("Array:", numeros); 
console.log("Valorprocurado:", valor); 
console.log("Busca Linear:",resultadoLinear); 
console.log("Busca Binária:",resultadoBinaria);