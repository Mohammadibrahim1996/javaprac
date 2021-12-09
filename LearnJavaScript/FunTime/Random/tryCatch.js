const arr = [1,2,3,1,2,3,1,2,3];
console.log(countOcc(arr));
function countOcc (myArry){
return myArry.reduce((acc,cur)=>{
    return acc[cur] ? acc[cur] += 1 : acc[cur]=1,acc;
},{})
}