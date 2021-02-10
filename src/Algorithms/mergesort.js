export const mergesort = array => {
    let auxiliary = [];
    let anims = [];
    mergesortRec(array, auxiliary, 0, array.length - 1, anims);
    return anims;
};

export const mergesortRec = (array, auxiliary, left, right, anims) => {
    if (right <= left) {
        return;
    }
    const middle = Math.floor((left + right)/2);
    mergesortRec(array, auxiliary, left, middle, anims);
    mergesortRec(array, auxiliary, middle + 1, right, anims);
    mergeArrays(array, auxiliary, left, right, anims);
}

export const mergeArrays = (array, auxiliary, left, right, anims) => {

    let rightIndex =  Math.floor((left + right)/2) + 1;
    let leftIndex = left;
    let auxIndex = left;

    // copy the bigger element from the array to aux
    while (leftIndex <= Math.floor((right + left)/2) && rightIndex <= right) {
        if (array[leftIndex] <= array[rightIndex]) {
            auxiliary[auxIndex++] = array[leftIndex++];
        }
        else {
            auxiliary[auxIndex++] = array[rightIndex++];
        }
    }

    // when one of them runs out of elements, copy the rest from the other to aux
    while (leftIndex <= Math.floor((right + left)/2) ) {
        auxiliary[auxIndex++] = array[leftIndex++];
    }
    while (rightIndex <= right ) {
        auxiliary[auxIndex++] = array[rightIndex++];
    }

    //from aux copy elements to original array
    for (let i = left; i < left + (right - left) + 1; i++) {
        array[i] = auxiliary[i];
        anims.push([i, auxiliary[i]]);
    }
}