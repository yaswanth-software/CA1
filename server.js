const express = require('express')
const port = 4003
const app = express()

app.use(express.json())

app.listen(port,()=>{
    console.log(`server is connected http://localhost:${port}`)
})

app.get('/',(req,res)=>{
    res.status(200).send('hi')
})

app.post('/',(req,res)=>{
    const {username,email,password,date_of_birth} = req.body
    if(!username){
        return res.status(404).json({message:`Username cannot be empty`})
    }
    if(!email){
        return res.status(404).json({message:`Email cannot be empty`})
    }
    if(password.length >8 || password.length <=16){
        return res.status(404).json({message:`Password length should be greater than 8 or less than or equal to 16`})
    }
    return res.status(202).json({message:`server is successfully running`})
})