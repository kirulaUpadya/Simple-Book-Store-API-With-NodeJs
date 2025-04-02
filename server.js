require("dotenv").config();

const express = require("express");

const connectDB = require("./database/db");

const bookRoutes = require("./routes/book-routes");

const app = express();

const port = process.env.PORT || 3000;

//connect to our database
connectDB();

//middleware -> express.json
app.use(express.json());

//routes here
app.use('/api/books', bookRoutes);

app.listen(port, () => console.log(`Server is now running on port ${port}`));