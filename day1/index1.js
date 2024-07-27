const fs = require('fs');

fs.writeFile("hii.txt","myself prem gediya",(err)=>{
    if (err) throw err;
});

fs.appendFile("hii.txt"," module system", (err)=>{
    if (err) throw err;
});

fs.readFile("hii.txt",(err , data)=>{
    if (err) throw err;
    console.log(data.toString());
});

fs.rename("hii.txt","hyy.txt" , (err)=>{
    if (err) throw err;
});

fs.unlink("hyy.txt",(err)=>{
    if (err) throw err;
    console.log("File operation completed.");
});