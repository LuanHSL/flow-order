import mongoose from 'mongoose';

export async function connectDatabase() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/flow-order';

  try {
    await mongoose.connect(uri);
    console.log('📦 Connected to MongoDB successfully!');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export async function disconnectDatabase() {
  try {
    await mongoose.disconnect();
    console.log('📦 Disconnected from MongoDB successfully!');
  } catch (error) {
    console.error('❌ Error disconnecting from MongoDB:', error);
    process.exit(1);
  }
}
