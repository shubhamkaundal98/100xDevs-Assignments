setTimeout(function() {
    let date = new Date()
    console.log(`${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`)
},1000)

setTimeout(() => {
    let date = new Date()

    console.log(date.toLocaleTimeString())

},1000)
