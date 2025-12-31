const fs = require("fs")
// const fs = require("fs/promises")

// console.log(fs);
console.log("Starting");

// fs.writeFileSync("Thor.txt", "Thor will return in Avengers Doomsday")

fs.writeFile("X-Men.txt", "X-Men will return in Avengers Doomsday", () => {
    console.log("Done");
    fs.readFile("X-Men.txt", (error, data) =>{
        console.log(error, data.toString());
        
    })

})
   fs.appendFile("Thor.txt", "\nGod Of Thunder", (e, d) =>{
        console.log(d);
        
})
console.log("Ending");


