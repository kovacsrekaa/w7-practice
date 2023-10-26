/*let variable = 10
variable = 20

const variable2 = 50
//variable2 =100


let array = [1,2,3,]
array= [4,5,6,]
array.push(10)


const array2= [ 10,20,30]
array2.push(100)
array2[0] = 11
console.log(array2) */



/*const arr = ["kiss béla", "nagy józsi","tóth jános"]

for (let i =0; i< arr.length; i++){
    console.log(arr[i])
}

arr.forEach((value, index)=>{
    console.log("at index: ", index, "is: " , value)
    console.log(`at index: ", ${index}, "is: " , ${value}`)
})

arr.map((value, index) =>{
    console.log(`at index: ", ${index}, "is: " , ${value}`)
})


for (const value of arr) {
    console.log(`forof: ${value}`)
} */


let obj = {
    key1: "value",
    key2: 100,
    key3: true,
    key4: ["one", "two","three", "four"],
    key5: {
        nestedKey: "nested value",
        nestedKey2: 200,
        nestedKey3: false,
        nestedKey4: ["ein", "zwei", "drei"],
        nestedKey5: { nestedKey: "hello"}
    }
} 

/*console.log(obj.key4[2])

for(let i =0; i< obj.key4.length; i++){
console.log(obj.key4[i])
}

obj.key4.map((value)=>{
    console.log(value)
}) */


const objectKeys = Object.keys(obj)

objectKeys.forEach((key) => {
    console.log(obj[key])
})

