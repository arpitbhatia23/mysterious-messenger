import mongoose from "mongoose"
import { dbName } from "../constant.js"
const dbConnect=async()=>{
    try {
        const connectionInstances= await mongoose.connect(`${process.env.MONGODB_URl}/${dbName}`)
        console.log(`\n Mongodb is connected || Db host at ${connectionInstances.connection.host} `)

    } catch (error) {
        console.log("connection error",error)
        process.exit(1)
    }
}
export default dbConnect 