
const str = "Software Development using JavaScript"

// --------------- Using Array & String Methods -------------
const reverseString = (inputString) => {
    // Separate string into individual alphabets by making it an array using Array.from()
    const strArr = inputString.split("")   // split("")  → Faster but does not handle emojis correctly
    // const strArr = Array.from(inputString)   // Array.from() → More Unicode-aware i.e. handles emojis correctly

    // Reverse the array using toReversed() method
    const reversedArr = strArr.toReversed();

    // Convert the array into string using join() method
    const result = reversedArr.join("")

    console.log(result);
    return result
}

reverseString(str)


// --------- Using For loop --------------
const reverseString2 = (inputString) => {
    if(typeof inputString !== 'string'){
        console.log("Please input string");
        throw new Error("Only Strings are allowed.")
    }

    let result = ""

    for(let i=inputString.length-1; i>=0; i--){
        result += inputString[i]  // result = result + inputString[i]
    }

    console.log(result);
    return result
    
}

reverseString2(str)


// ------ Using hybrid of Array and For loop -------------

const reverseString3 = (str) => {
    const result = [];

    for(let i = str.length - 1; i >= 0; i--){
        result.push(str[i]);
    }

    return result.join("");
}

reverseString3(str)