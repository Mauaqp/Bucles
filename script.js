// 1. Impares 1-20
for (let i = 1; i < 11; i++){
    if (i % 2 !== 0){
        console.log (i);
    }  
}

// 2. Disminuir múltiplos de 3, empezando del 100
for (let i = 100; i >= 1 ; i--){
    if ( i % 3 === 0 ){
        console.log(i);
    }   
}

// 3. Imprimir secuencia (-1.5)
for ( let n = 4; n >= -3.5; n = n -1.5){
    console.log(n);
}

// 4. Sigma. Todos los numeros del 1 al 100
let sum = 0;
for ( let n = 1; n <= 100; n++){
    sum = sum + n ;
    console.log(sum);
}

// 5. Factorial: Multiplicacicion de valores del 1 al 12
let product = 1;
for ( let h = 1; h <= 12; h++){
    product = product * h;
    console.log(product);
}