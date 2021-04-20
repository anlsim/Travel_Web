import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('travel-blog');
    
        await operations(db);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/updates/:name', async (req, res)=>{
    withDB(async (db) => {
   
    const updateName = req.params.name;
    
    const updatesInfo = await db.collection('updates').findOne({name: updateName});
    res.status(200).json(updatesInfo);
 
    }, res);
});

app.post('/api/updates/:name/like', async (req, res) => {
    withDB(async (db) => {
    const updateName = req.params.name;

    const updateInfo = await db.collection('updates').findOne({name: updateName});
    await db.collection('updates').updateOne({name: updateName},{
        '$set': {
            likes: updateInfo.likes + 1,
        },
    });
    const updatedUpdateInfo = await db.collection('updates').findOne({name: updateName});
    res.status(200).json(updatedUpdateInfo);
   
    }, res);
});
app.post('/api/updates/:name/add-comment', (req, res) => {
    
    const { username, text } = req.body;
    const updateName = req.params.name;
    withDB(async (db) => {
        const updateInfo = await db.collection('updates').findOne({ name: updateName });
        await db.collection('updates').updateOne({ name: updateName }, {
            '$set': {
                comments: updateInfo.comments.concat({ username, text }),
            },
        });
        const updatedUpdateInfo = await db.collection('updates').findOne({ name: updateName });

        res.status(200).json(updatedUpdateInfo);
    }, res);
});

app.listen(8000, () => console.log('Listening on port 8000'));