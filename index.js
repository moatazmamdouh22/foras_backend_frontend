const express =require('express');
const router = express.Router();
const bodyParser =require('body-parser');
const mongoose =require('mongoose');
var path = require('path');
var http = require('http');
var cors = require('cors');

const app = express();
var server = http.createServer(app);

// connect to mongo db ..
mongoose.connect('mongodb://localhost/Moaqb', { useMongoClient: true });
//mongoose.Promise =global.Promise;
mongoose.Promise=require('bluebird');
// route to api .js 
// const userRouter =require('./router/userApi');
// const adminRouter =require('./router/admin');
// ............ foras
// const websiteRouter =require('./router2/website');
const adminRouter2 =require('./router/admin2');

// use body parser ..
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// use router api 
// app.use("/api/user",userRouter);
// app.use("/api/admin",adminRouter);
// .......... elbrns
// app.use("/api/website",websiteRouter);
app.use("/api/adminApi",adminRouter2);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname, 'public', 'ForasAdmin/html/forasAdmin.html'));
});
// app.get('/*', function (req, res) {
//     if(! req.originalUrl.startsWith('/api'))
//         res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     else
//         res.status(404).send("Cannot GET " + req.originalUrl)
// });

// res.sendFile(path.join(__dirname, 'public', 'ForasAdmin/html/forasAdmin.html'));

app.use(function(err,req,res,next){
    res.status(422).send({error : err.message});
    console.log(req.body);
    console.log(err.message);
})

server.listen(process.env.port || 80);
console.log('hello Foras ....');