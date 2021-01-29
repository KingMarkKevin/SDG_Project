var express = require('express');
var router = express.Router();
const uri = 'mongodb+srv://kevin-king:UtbXVKSGYZMut7OX@cluster0.zuvcs.mongodb.net/<dbname>?retryWrites=true&w=majority'
const MongoClient = require('mongodb').MongoClient; 


router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("WORLD_DATA_BANK").collection("drought_projections_Africa"); 
        collection.find().toArray((err, result) => {
            if (err) console.log(err.message); 
            else res.send(result);
            client.close(); 
        }); 

    });
});

router.get('/drought_from_country/:country', function(req, res, next){
    console.log(req.params);
    country = req.params.country;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

    client.connect(err => {
        const collection = client.db("WORLD_DATA_BANK").collection("drought_projections_Africa"); 
        collection.find({ 'Country': `${country}` }).toArray((err, result) => {
            if (err) console.log(err.message); 
            else res.send(result);
            client.close(); 
        }); 

    });

})

module.exports = router;
