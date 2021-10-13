const data = [
    {age:25, name:"abc" , designation: "Worker"},
    {age:28, name:"def" , designation: "Engineer"},
    {age:25, name:"ghi" , designation: "Mannager"},
];
 
const dataMap = data.map((item)=>{
    const {age,name,designation}= item;
    console.log(age);
});
