function ordenamiento_seleccion(array) {
    for (let i = 0; i < array.length - 1; i++){
        let indiceMin = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[indiceMin]) {
                indiceMin = j;
            }
        }

        if (indiceMin != i) {
            let temporal = array[i]; 
            array[i] = array[indiceMin];
            array[indiceMin] = temporal;
        }
    }

    return array;
}

let lista = [8, 3, 16, 1, 9];

console.log(lista)
console.table(ordenamiento_seleccion(lista))