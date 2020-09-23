let personalinfo=[
{
    name:"Tauseef",
    age:22,
    city:"Mumbai",
    salary:15000
},
{
    name:"Sam",
    age:19,
    city:"Delhi",
    salary:20000
},
{
    name:"Flex",
    age:32,
    city:"Goa",
    salary:30000
},
{
    name:"Annie",
    age:26,
    city:"Indore",
    salary:27000
},
{
    name:"Lala",
    age:40,
    city:"Agra",
    salary:8000
},
]

function displayInfo(infoarray){

    let tabledata = "";
    

    infoarray.forEach(function(info, index){

        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${info.name}</td>
        <td>${info.age}</td>
        <td>${info.city}</td>
        <td>${info.salary}</td>
        <td>
        <button onclick="deleteInfo(${index})">Delete</button>
        </tr>`;

        tabledata += currentrow;       

    });

    document.getElementById("tdata").innerHTML=tabledata;
}

displayInfo(personalinfo);

function searchByName(){
    let searchValue = document.getElementById("searchName").value;

    let newData = personalinfo.filter(function(info){
    return info.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    displayInfo(newData);
}

function searchByCity(){
    let searchValue = document.getElementById("searchCity").value;
    
    let newData = personalinfo.filter(function(info){
        return info.city.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    displayInfo(newData);
      
}

function deleteInfo(index){
    personalinfo.splice(index,1);
    displayInfo(personalinfo);
}


