const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');

const app = express()

connectDB();

//Init middleware
app.use(express.json({extended: false}));

const PORT = process.env.PORT || 2000;

app.get('/', (req, res) => res.send('API running'));

//define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

