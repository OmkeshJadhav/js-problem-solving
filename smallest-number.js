const numArr = [29, 30, 3, 5, 9];


// -------- Using For Loop ------------
const smallestNum = (arr) => {
    let smallest = arr[0]  // 29

    for(let i=1; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    console.log(smallest);
    return smallest;
}

smallestNum(numArr)


// ------ Using Sort --------
const smallestNum2 = (arr) => {
    const sortedArr = arr.sort((a,b) => a-b)  // JavaScript's sort() converts elements to strings and sorts them lexicographically - So, need to Provide a comparison function
    console.log(sortedArr);  // [ 3, 5, 9, 29, 30 ]

    console.log(sortedArr[0]); 
    return sortedArr[0]
    
}

// sort() mutates the original array - If you don't want to modify the original array:
const smallestNum3 = (arr) => {
    const sortedArr = [...arr].sort((a, b) => a - b);
    return sortedArr[0];
}

smallestNum2(numArr)
smallestNum3(numArr)
