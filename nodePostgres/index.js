const express = require('express');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/user-route.js');
const postRouter = require('./routes/post-route.js');
const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, ()=>{
    console.log(`Server is working on PORT ${PORT}`);
});