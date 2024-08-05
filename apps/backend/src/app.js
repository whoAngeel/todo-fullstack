import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';


const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hello World')
})

connectDB()

app.listen(3000,()=>{
    console.log('Server running on port http://localhost:3000')
})
