const dotenv = require("dotenv")
const app = require("./app")
const mongoose = require("mongoose")

dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace("<password>",process.env.DATABASE_PASSWORD)

mongoose.set("strictQuery",false)
mongoose.connect(DB,{useNewUrlParser: true}).then(()=>{
        console.log("Database connected Succesfully")
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is up on ${port}!!`)
})