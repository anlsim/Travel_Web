import express from 'express';
import bodyParser from 'body-parser';
const updatesInfo = {
    'first-week': {
        likes: 0,
    },
    'second-week': {
        likes: 0,
    },
    'third-week': {
        likes: 0,
    },
}

const app = express();

app.use(bodyParser.json());

app.post('/api/updates/:name/like', (req, res) => {
    const updateName = req.params.name;

    updatesInfo[updateName].likes += 1;
    res.status(200).send(`${updateName} now has ${updatesInfo[updateName].likes} likes`);
});

app.listen(8000, () => console.log('Listening on port 8000'));