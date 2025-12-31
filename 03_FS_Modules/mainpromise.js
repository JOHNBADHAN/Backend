import fs from "fs/promises"

let a = await fs.readFile("X-Men.txt")

let b = await fs.writeFile("X-Men.txt", "Yoo Wolverine")
   
let c = await fs.appendFile("X-Men.txt", "\n\nBe Aware")
console.log(a.toString(), b, c);

 