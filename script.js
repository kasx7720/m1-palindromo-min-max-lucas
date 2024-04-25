function isPalindrome(texto){
    texto = texto.replace(/\s/g, '').toLowerCase();
    let inicio = 0;
    let fim = texto.length - 1;

    for (inicio = 0; inicio < fim; inicio++, fim--){
        if (texto[inicio] !== texto[fim]){
            return false;
        }
    }
    return true;
}


function arrayMaxMin(arr){
    let menor = arr[0];
    let maior = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < menor){
            menor = arr[i];
        }
        if (arr[i] > maior){
            maior = arr[i];
        }
    }
    return [menor, maior];
}