const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes
const userRoutes = require('./routes/userRoutes');
//const postRoutes = require('./routes/posts');

app.use('/api/users', userRoutes);
//app.use('/api/posts', postRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ConnectingDApp Server is running on port ${PORT}`);
});
