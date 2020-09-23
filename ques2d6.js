 window.onload=function(){
    let busData = [
    
    
    ];

    if(localStorage.getItem("busData")==null){
     let newBusData = JSON.stringify(busData);
    localStorage.setItem("busData",newBusData);    
    }
 };

 function displayBus(busarray = undefined){

    let tabledata = "";
    let busData;
    if(busarray == undefined){
     busData=JSON.parse(localStorage.getItem("busData"))
    }
    else{
        busData = busarray;
    }
    let srno=1;
    busData.forEach(function(data){
    let currentrow = `<tr> 
    <td>${srno}</td>
    <td>${data.name}</td>
    <td>${data.source}</td>
    <td>${data.destination}</td>
    <td>${data.number}</td>
    <td>${data.capacity}</td>
    </tr>`;

    tabledata += currentrow;
    srno++;
    });

    document.getElementById("tdata").innerHTML=tabledata;
 }
 displayBus();

 function addBus(event){

    event.preventDefault();

    let newBus = {};

    let name = document.getElementById('name').value;
    let source = document.getElementById('source').value;
    let destination = document.getElementById('destination').value;
    let number = document.getElementById('number').value;
    let capacity = document.getElementById('capacity').value;

    newBus.name = name;
    newBus.source = source;
    newBus.destination = destination;
    newBus.number = Number(number);
    newBus.capacity = Number(capacity);

   // busData.push(newBus);
    //console.log(newBus);

    let busData=JSON.parse(localStorage.getItem("busData")); //string to object
    busData.push(newBus);
    localStorage.setItem("busData",JSON.stringify(busData)); //object to string and store in localstorage

//     let newBusData = JSON.stringify(busData);
//    localStorage.setItem("busData",newBusData);
   
    displayBus();
    
    document.getElementById('name').value="";
    document.getElementById("source").value="";
    document.getElementById('destination').value="";
    document.getElementById('number').value="";
    document.getElementById('capacity').value="";
 }

 function searchBySource(){
     let searchValue = document.getElementById('searchSource').value;
     let busData=JSON.parse(localStorage.getItem("busData"));
     let newData = busData.filter(function(data){
         return data.source.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
     });
     displayBus(newData);
 }

 function searchByDestination(){
    let searchValue = document.getElementById('searchDestination').value;
    let busData=JSON.parse(localStorage.getItem("busData"));
    let newData = busData.filter(function(data){
        return data.destination.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    displayBus(newData);
}