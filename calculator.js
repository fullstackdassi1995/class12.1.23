
const is_equal = (arr1, arr2) => {
    if (!Array.isArray(arr1)){
        throw new Error('The first parameter is not an array!')
    }
    if (!Array.isArray(arr2)){
        throw new Error('The second parameter is not an array!')
    }

    if (arr1.length === arr2.length){
        for (let i = 0 ; i < arr1.length ; i++){
            if (arr1[i] !== arr2[i]){
                return false
            }
            return true
        } 
    }
    return false
}

const is_bigger = (num1, num2) => {
    if (isNaN(num1) ||isNaN(num2)){
        throw new Error('One of the parameters is not a number!') 
    }
    if (num1 > num2){
        return true
    }
    else {
        return false
    }
}

module.exports = { 
    is_equal , is_bigger
}