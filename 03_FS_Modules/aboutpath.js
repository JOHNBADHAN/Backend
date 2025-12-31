import path from "path"

let myPath = "D:\\John\\OneDrive\\Desktop\\Backend\\03_FS_Modules\\X-Men.txt"
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("d:/", "programs\\X-Men.txt"));
