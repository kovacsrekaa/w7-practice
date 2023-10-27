const data = [
    {
        name: "reka",
        age: 25,
        pets: ["leo","hal","mocsi"],
        mostRecentPurchase: {
            price: 20000,
            color: "pink"
        }
    },
    {
        name: "janos",
        age: 60,
        pets: ["mici","morzsi","mokka","lizi"],
        mostRecentPurchase: {
            price: 25000,
            color: "black"
        }
    },
    {
        name: "pisti",
        age: 34,
        pets: ["lola","elmo","olaf"],
        mostRecentPurchase: {
            price: 29000,
            color: "yellow"
        }
    },
    {
        name: "maria",
        age: 43,
        pets: ["lilo","stich","simba"],
        mostRecentPurchase: {
            price: 21000,
            color: "lila"
        }
    },
    {
        name: "ogla",
        age: 52,
        pets: ["rafael","nemo","senilla"],
        mostRecentPurchase: {
            price: 16000,
            color: "orange"
        }
    },
    {
        name: "paul",
        age: 14,
        pets: ["pumba","timon","jerry"],
        mostRecentPurchase: {
            price: 28000,
            color: "white"
        }
    },
    {
        name: "simon",
        age: 21,
        pets: ["emi","frici","kiko"],
        mostRecentPurchase: {
            price: 12000,
            color: "brown"
        }
    },
    {
        name: "lia",
        age: 18,
        pets: ["csopi","pluto","micki"],
        mostRecentPurchase: {
            price: 29000,
            color: "red"
        }
    },
    {
        name: "milo",
        age: 76,
        pets: ["kende","bella","milka"],
        mostRecentPurchase: {
            price: 21000,
            color: "blue"
        }
    },
    {
        name: "teri",
        age: 54,
        pets: ["raven","kormi","panna"],
        mostRecentPurchase: {
            price: 29000,
            color: "green"
        }
    },
]

/*for (let i =0; i< data.length; i++){
    if(data[i].age >= 60 && data[i].mostRecentPurchase.price >=20000){
    console.log(data[i])}
} */


/* function addTwoNumbers(number1,number2){
    return number1 + number2
}

addTwoNumbers(2,5)

function concatenatArray(array){
    /*let result = ""
    array.forEach((string) => {
        result += string
    });

    return result */
   /* return array.join("")
} 

const arrayOfStrings = ["macska","codecool","kutya","szerda","vizsga"]

console.log(concatenatArray(arrayOfStrings)) */


//function getOldPeople(arrayOfPeople, minimumAge){
   /* let result =[]
    for (let i =0; i< arrayOfPeople.length; i++){
        if(arrayOfPeople[i].age >= minimumAge ){
         result.push(arrayOfPeople[i])}
}
    return result */


   /* let result = []
    arrayOfPeople.map((person)=> {
        if (person.age >= minimumAge){
            result.push(person)
        }
    })
    return result
}
console.log(getOldPeople(data,60)) */

/*function getRichPeople(arrayOfPeople, minimumValue){
    let result = arrayOfPeople.filter((person)=> person.mostRecentPurchase.price >minimumValue) 
    return result
}

console.log(getRichPeople(data,20000)) */

function goodRecommendationFor(arrayOfPeople, newOffer){
    let result = []
    /*for (let i =0; i< arrayOfPeople.length; i++){
        if (arrayOfPeople[i].mostRecentPurchase.color === newOffer.color) {
            if (arrayOfPeople[i].mostRecentPurchase.price > newOffer.price){
                result.push(arrayOfPeople[i].name)
            }
        }
       
    } */

    result = arrayOfPeople.filter((person)=> person.mostRecentPurchase.color === newOffer.color &&
    person.mostRecentPurchase.price > newOffer.price)
    return result
}

const newOffer1 = {
    color: "black",
    price: 8000
}

console.log(goodRecommendationFor(data,newOffer1))