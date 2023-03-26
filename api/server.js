const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;
const UCAuth = require(path.resolve( __dirname, './_helpers/uc-auth.js' ));
const mongoose = require('mongoose')
const cors = require('cors')
const fileuploadroute = require('./routes/fileupload')
const datauploadRoute = require('./routes/dataupload')
const cformuploadRoute = require('./routes/cformupload')
const fformuploadRoute = require('./routes/fformupload')
const sformuploadRoute = require('./routes/sformupload')



const Dataupload = require("./models/Dataupload");
const CFormupload =require("./models/Cformupload");

const { MongoClient } = require("mongodb");
const {DatauploadSchema} = require('./models/Dataupload');
const { db } = require('./models/Fileupload');
// Connection URI
const uri =  'mongodb://127.0.0.1:27017';
// Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect("mongodb+srv://purvaagaikwad:P*ga32982020@cluster0.o5w1o.mongodb.net/mytable?retryWrites=true&w=majority", () =>console.log("Database connected") )
//mongoose.connect("mongodb://localhost:27017/cyanoweb", 

// (err) => {
//  if(err) console.log(err) 
//  else console.log("mongdb is connected");
// }
// );
// ,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(error => console.error(error));

app.use(express.json())
app.use(cors())

app.use('/api/upload', fileuploadroute);
app.use('/api/dataupload', datauploadRoute)
app.use('/api/cformupload', cformuploadRoute)
app.use('/api/fformupload', fformuploadRoute)
app.use('/api/sformupload', sformuploadRoute)


// place holder for the data
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

// use UC HTTP headers auth to secure the api
app.use(UCAuth);

app.get('/api/users', (req, res) => {
  console.log('api/users called!');
  res.json(users);
});

app.get('/api/currentUser', (req, res) => {
  console.log('api/currentUser called!');
  res.json(req.currentUser);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});



app.get('/health',(req,res)=>{
  console.log("kuch bhi")
  res.json({'msg':"Server is running"})
})



app.get('/api/data',async(req,res)=>{
  console.log("here")
  
  const dataFetch = mongoose.model("dataFetch",DatauploadSchema)
  
//   const schemas = [];
//   mongoose.modelNames().forEach(function(modelName){
//         console.log(mongoose.model(modelName),mongoose.model(modelName).schema,"asghjdbfgasjhfvbasfsakfhsah")
//       schemas.push(mongoose.model(modelName).schema.obj);
//   })
  
//   console.log(schemas);
const dataFetchSchema = mongoose.Schema({
    location:String,
    date:Date,
    temperature:Number,
    ph:Number,
    turbidity:Number,
    dissolvedoxygen:Number,
    totalmicrocytis:Number,
    mcyemicrocytis:Number,
    mcyeplanktothrix:Number,
    totalmicrocystins:Number
  })
//   let responseObj;
  const dataFetchModel = mongoose.model("Dataupload",DatauploadSchema,"datauploads")
  let responseObj=await dataFetchModel.find({},(err,response)=>{
    console.log(err,"error",response,"response")
    return response
  }).clone().catch(function(err){ console.log(err)})
  console.log("kuch bhi")
  res.json({data:responseObj})
})
