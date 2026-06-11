const oddEven = (num)=> {
    const remainder = num%2

    remainder === 0 ? console.log(`Number ${num} is an Even number`) : console.log(`Number ${num} is an Odd number`)
}

oddEven(3) // "Odd"
oddEven(4) // "Even"

const oddEven2 = (num) => {
    const remainder = num%2

    switch(remainder){
        case 0:
            console.log(`Number ${num} is an Even number`)
            break;
        case 1:
            console.log(`Number ${num} is an Odd number`)
            break;
    }
}

oddEven2(9) // "Odd"
oddEven2(10) // "Even"

const oddEven3 = (num) => {
    const remainder = num%2

    if(remainder === 0){
        console.log(`Number ${num} is an Even number`)
        return "Even"
    }
    console.log(`Number ${num} is an Odd number`)
    return "Odd"
}

oddEven3(11) // "Odd"
oddEven3(12) // "Even"