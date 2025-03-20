const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');
const { PORT } = require('./config/config.env');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/users', userRoute);


// global error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
