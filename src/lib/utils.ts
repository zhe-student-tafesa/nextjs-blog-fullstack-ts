import mongoose from "mongoose"

//   Add type annotation, define isConnected property, optional parameters
const connection: { isConnected?: number } = {}

const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection')
            return
        }
        // if no db， create a new one
        const db = await mongoose.connect(process.env.MONGO_URI!)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error)
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}