import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const statesRoute = require("./routes/states");
const multer = require("multer");


dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    })
    .then(console.log("Connected To MONGO"))
    .catch(err=>console.log(err));

    const storage = multer.diskStorage({
        destination: (req, file, cb)=>{
           cb(null, "images");
        }, filename:(req, file, cb) => {
            cb(null, req,body.name); 
        }
    });
    const upload = multer({storage:storage});
    app.post("/api/upload", upload.single("file"),(req, res)=>{
        res.status(200).json("File has been uploaded");
    })
    
    app.use("/api/auth", authRoute);   
    app.use("/api/users", usersRoute);   
    app.use("/api/posts", postsRoute); 
    app.use("/api/states", statesRoute); 


app.listen(8000, () => {
    console.log('Listening on port 8000');
});

