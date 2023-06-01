import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/user-routes.js'

const app = express()
const PORT = 1417

//middleware
app.use(bodyParser.json())

app.use("/users", router)



app.listen(PORT, ()=>{
    console.log(`Server listening on port http://localhost:${PORT}`)
})