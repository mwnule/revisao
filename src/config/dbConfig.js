import mongoose from 'mongoose';

function dbConfig() {
    mongoose
    .connect('mongodb://localhost:27017/revisao')
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log(err));
}

export default dbConfig;