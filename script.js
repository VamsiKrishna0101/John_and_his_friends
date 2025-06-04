/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value)=>{
    if(value.profession=='developer'){
      console.log(value)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value)=>{
    if(value.profession=='developer'){
      console.log(value)
    }
  })
}

function addData() {
  //Write your code here, just console.log
   let newemployee={
     id:4, name:"susan", age:"20", profession:"intern"
   }
   arr.push(newemployee)
   console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
   arr=arr.filter((value)=>value.profession!='admin')
   console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1=[
    {id:5,name:"hell",age:30,profession:"chef"},
    {id:6,name:"heaven",age:31,profession:"dish washer"},
    {id:7,name:"swarn",age:32,profession:"cleaner"}
  ]
  let newarr=arr.concat(arr1)
  console.log(newarr)

}
