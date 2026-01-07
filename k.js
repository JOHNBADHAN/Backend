let arr = [1,2,3,2,3,2,1,1,4,3,5,1]

let obj= {}
let unique= []

for(let i=0;i<arr.length;i++){
    if(!obj[arr[i]]){

        obj[arr[i]]= true
        unique.push(arr[i])
    }
}

console.log(unique);

