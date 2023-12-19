/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },n*1000)
    })
}

let startTime = new Date()

wait(2).then(() => {
    let endTime = new Date()

    return endTime - startTime
})

module.exports = wait;
