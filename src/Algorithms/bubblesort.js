export const bubblesort = inputArr => {
    let anims = [];
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length - 1; j++) {
            if (inputArr[j] > inputArr[j + 1] ) {
                let temp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = temp;
                anims.push([j, j + 1]);
            }
        }
    }
    return anims;
};