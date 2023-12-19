let fs = require('fs')

function shubhamReadFile(cb){
  return new Promise((resolve) => {
    fs.readFile("./text.txt","utf-8",(error,data) => {
      resolve(data)
    })
  })
}

function onDone(data){
  console.log(data)
}

shubhamReadFile().then(onDone)