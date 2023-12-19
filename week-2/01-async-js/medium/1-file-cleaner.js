let fs = require('fs')

function shubhamReadFile(){

  return new Promise((resolve) => {
    fs.readFile("text.txt","utf-8",(error,data) => {
      resolve(data)
    })
  })
  
}

function cleanData(data) {
  data = data.split(" ").filter((elem) => elem).join(" ")
  //data = data.replace(/\s+/g," ")
  fs.writeFile("text.txt",data,(err) => {
    if(err) throw err

    console.log("done with cleaning")
  })
}

shubhamReadFile().then(cleanData)