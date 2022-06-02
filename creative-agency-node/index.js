const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');



// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())
app.use(express.static('order'))

// user database connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adminagency:adminagency$$$@cluster0.uppua.mongodb.net/agencystorge?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const usercollection = client.db("agencystorge").collection("agencyitem");
  // post user order to database
  app.post('/addOrder', (req,res) => {
    const file = req.files.file;
    const fileName = file.name;
    file.mv(`${__dirname}/order/${fileName}`, err => {
        if(err){
            console.log(err)
            return res.status(500).send({msg: 'fail to upload image'})
        }
        return res.send({name: fileName, path: fileName})
    })
    //===================================
    const userOrder = {...req.body,fileName}
    usercollection.insertOne(userOrder)
    .then(result => {
        console.log('order added sucessfully')
    })
  })

  // get user order from database
  app.get('/getOrder', (req,res) => {
    usercollection.find({})
    .toArray((error,document) => {
        res.send(document)
    })
  })
// database border
//=========================================
});


// review collection
client.connect(err => {
  const reviewCollection = client.db("agencystorge").collection("reviewstorge");
   // post
   app.post('/addReview', (req,res) => {
    const review = req.body.reviewInfo
    reviewCollection.insertOne(review)
    .then(result => {
      console.log('review added sucessfully')
    })
   })

   // get review item
   app.get('/getReview', (req,res) => {
     reviewCollection.find({})
     .toArray((error,document) => {
       res.send(document)
     })
   })
})


// admin add service collection
client.connect(err => {
  const addServiceCollection = client.db('agencystorge').collection('adminservice')
  // post admin service
  app.post('/addService', (req,res) => {
   const file = req.files.file;
   const fileName = file.name
   
   file.mv(`${__dirname}/addService/${fileName}`, error => {
      if(error){
        console.log(error)
        return res.status(500).res.send({msg: 'image fail to upload'})
      }
      return res.send({name: fileName, path: fileName})
   })
   const adminService = {...req.body,fileName}
   addServiceCollection.insertOne(adminService)
   .then(result => {
     console.log('service added sucessfully')
   })
  })


  // get admin service
  app.get('/getService', (req,res) => {
    addServiceCollection.find({})
    .toArray((err, document) => {
       res.send(document)
    })
  })

//-------------------------
// collection border
})





app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// adminagency
// adminagency$$$