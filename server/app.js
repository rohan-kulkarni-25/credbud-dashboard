require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')


const app = express();

// Middleware
app.use(cors());
app.use(express.json());



app.get('/api/v1/test', (req, res) => {
    res.json({ message: "CREDBUD SERVER IS RUNNING" })
})

// app.use('/api/v1/auth', authROu);
app.use('/api/v1/user', userRoutes)
// app.use('/api/v1/auth', authRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
