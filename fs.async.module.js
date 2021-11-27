const {readFile, writeFile} = require('fs')

readFile('./constant/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result
    readFile('./constant/second.txt','utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './constant/result-async.txt',
            `Here is the result for async : ${first}, ${second}`,
            (err, result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})