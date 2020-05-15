const express = require('express');
const app = express();
const port = 8000;
var mongoose = require('mongoose');


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require("./routes/auth");

require('dotenv').config()


//db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB CONNECTED");
});


//middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//myrouter
app.use("/api",authRoutes);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));