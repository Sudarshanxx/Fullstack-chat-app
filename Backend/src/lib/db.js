import mongoose from 'mongoose'; // ✅ Fixed typo (was moongoose)

export const connectDB = async () => {
    try {
        // ✅ Use the correct environment variable name from .env
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB connection error: ${error.message}`);
        process.exit(1); // Stop the app if connection fails
    }
};
