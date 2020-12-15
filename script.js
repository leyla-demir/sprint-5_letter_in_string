const stringElement = document.querySelector('#string')
// console.log("stringElement", stringElement)
const letterElement = document.querySelector('#letter')
// console.log("letterElement", letterElement)
const buttonElement = document.querySelector('button')
// console.log("buttonElement", buttonElement)
const resultElement = document.querySelector('p')
// console.log("resultElement", resultElement)


function findLetter(text, let){


    console.log(text,let)
    let count = 0
    for(let i = 0 ; i < text.length ; i++){

        if(text.toLowerCase()[i] == let.toLowerCase()){
            count++
        } 
    }
    const result = `${text} kelimesinde ${let} harfi ${count} kez geçmektedir.`
    return result

    


}


buttonElement.addEventListener('click',()=>{
    const stringVal = stringElement.value
    const letterVal = letterElement.value
    resultElement.innerText = (findLetter(stringVal, letterVal))
})
