function introduction(firstName:String,lastName:String,age:Number,value:Number[]){
    let sum=0
    for(let i=0;i<value.length;i++){
        console.log(`Index ${i} with value${value[i]}`)
    }
    return `My name is ${firstName} ${lastName} and age is ${age}`
    
}
let first="sudarshan"
let last="khatri"
let ag=23
let data=[1,2,3,43,45,5,5,45,34,3,23,3,3,3,3]
console.log(introduction(first,last,ag,data))