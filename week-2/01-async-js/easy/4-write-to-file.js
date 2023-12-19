const fs = require('fs')

 function shubhamWriteFile() {
    fs.appendFile("text.txt"," appended text", (err) => {
        if(err) throw err
        console.log("done")
      })
}

shubhamWriteFile();