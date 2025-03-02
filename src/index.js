const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');
const { PORT } = require('./config/config.env');

app.use(express.json());

app.use('/users', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
