const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');
const adminRoute = require('./routes/admin.route');
const addressRoute = require('./routes/address.route');
const hotelRoute = require('./routes/hotel.route');
const roomTypeRoute = require('./routes/roomtype.route');
const rateRoute = require('./routes/rate.route');
const transactionRoute = require('./routes/transaction.route');
const bookingRoute = require('./routes/booking.route');
const { PORT } = require('./config/config.env');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/users', userRoute);
app.use('/admins', adminRoute);
app.use('/addresses', addressRoute);
app.use('/hotels', hotelRoute);
app.use('/roomtypes', roomTypeRoute);
app.use('/rates', rateRoute);
app.use('/transactions', transactionRoute);
app.use('/bookings', bookingRoute);

// global error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
