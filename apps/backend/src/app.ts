import express, { NextFunction } from 'express'
import cookieParser from 'cookie-parser'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("health check server")
})

import userRouter from './routers/user.router'

app.use('/api/v1/user', userRouter)

// import { Request, Response } from 'express'
// import ApiError from './utils/apiError'

// app.use((error: Error, req: Request, res: Response) => {

//     if (error instanceof ApiError){
//         const response = {
//             status: error.status,
//             message: error.message,
//             data: error.data,
//             stack: error.stack,
//             success: false
//         }

//         return res.status(error.status).json(response)
//     }
//     res.status(500).json({
//         status: 500,
//         message: "Internal Server Error",
//         data: [],
//         stack: "",
//         success: false
//     })
// })


export default app