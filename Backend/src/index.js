const express=require('express')
const cors=require('cors')
require('./db/mongoose')
const contactRouter=require('./routers/contact')

const app=express()

const port=process.env.PORT

app.use(express.json())
app.use(cors())
app.use(contactRouter)

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})