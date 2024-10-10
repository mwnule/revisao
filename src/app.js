import express from 'express';
import userRouter from './routers/userRouter.js';
import bookRouter from './routers/booksRouter.js';
import rentRouter from './routers/rentRouter.js';
import dbConfig from './config/dbConfig.js';

dbConfig();

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/rents', rentRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});