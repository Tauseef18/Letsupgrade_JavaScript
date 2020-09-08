
let properties = [

    {
        name: "Tau",
        age: 22,
        country: "India",
        hobby: "Gaming"
    },

    {
        name: "Zikra",
        age: 15,
        country: "India",
        hobby: "Reading"
    },

    {
        name: "Saad",
        age: 19,
        country: "England",
        hobby: "Surfing"
    },

    {
        name: "Abd",
        age: 36,
        country: "South Africa",
        hobby: "Playing"
    },

    {
        name: "Kashaf",
        age: 25,
        country: "Pakistan",
        hobby: "Acting"
    },


];

function printAge(){
for(let i=0; i<properties.length; i++){

    if(properties[i].age < 30){
        console.log(properties[i]);
    }
}
}

function printCountry(){
for(let i=0; i<properties.length; i++){

    if(properties[i].country == "India"){
        console.log(properties[i]);
    }
}
}

printAge();
printCountry();



























// let properties = {

//     name : ["Tau","Zikra","Saad","Abd","Kashaf"],
//     age : [22,15,19,36,25],
//     country : ["India","Saudi Arabia","England","South Africa","Pakistan"],
//     hobbies : ["Gaming","Reading","Surfing","Playing","Acting"],

//      printAge : function(){
//         for(let i=0; i<this.age.length; i++) {
//             if(this.age[i] < 30) {
//                 console.log(this.);
//             }
//         }
//     },

//     printCountry : function(){
//         for(let i=0; i<this.country.length; i++) {
//             if(this.country[i] == "India") {
//                 console.log(this.country[i]);
//             }
//         }
//     },


// };

// properties.printAge();
// properties.printCountry();