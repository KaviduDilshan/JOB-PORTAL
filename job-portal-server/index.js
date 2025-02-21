const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;
require('dotenv').config()
console.log(process.env.DB_USER) 
console.log(process.env.DB_PASSWORD) 


//middleware
app.use(express.json())
app.use(cors())

//user  kavidu
//password dil18090

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobportaldemo.xnwyd.mongodb.net/?retryWrites=true&w=majority&appName=jobportaldemo`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //CREATE DB
    const db = client.db("mernjobportal")
    const jobscollection = db.collection("demojobs")

    // GET all jobs
      app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobscollection.find({}).toArray(); 
        res.send(jobs); 
      } catch (error) {
        res.status(500).send({ message: "Error fetching jobs", error });
      }
      });

      //get jobs by email
      app.get("/my-jobs/:email", async (req, res) => {
        //console.log(req.params.email)
        try {
          const jobs = await jobscollection.find({postedby:req.params.email}).toArray(); 
          res.send(jobs); 
        } catch (error) {
          res.status(500).send({ message: "Error fetching jobs", error });
        }
        });

    //post
    app.post("/post-job", async(req,res) =>{
      const body = req.body
      body.createAt = new Date()
      //console.log(body)
      const result = await jobscollection.insertOne(body)
      if(result.insertedId){
        return res.status(200).send(result)
      }
      else{
        return res.status(404).send ({
          message:"can not insert try again later",
          status:false
        })
      }
    })

    //delet job
    app.get("/job/:id", async (req, res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await jobscollection.deleteOne(filter)
      res.send(result)
      });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello Developr!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

