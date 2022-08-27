require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require("cors");

const pdfTemplate = require('./documents');

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


const diseaseRouter=require("./routes/disease");

const mongodbConnection=require("./config/db");
mongodbConnection();

// middlewares
app.use(express.json());
app.use(cors());//cors is used for transfering the data from backend to frontend
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


app.use('/api',diseaseRouter);

const port = process.env.PORT || 7000;
app.listen(port, console.log(`Listening on port ${port}...`));