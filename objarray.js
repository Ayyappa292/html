let myArray = [
    {age: 21, name: "Ram"},
    {age: 20, name: "Sita"},
    {age: 20, name: "Radha"},
  ],    
  objIndex = myArray.findIndex((obj => obj.name == "Radha"));
   myArray[objIndex].name = "Radha Krishna"
   myArray[objIndex].age= 22
    console.log("", myArray)