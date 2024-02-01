"use sctick";
const express = require('express');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

const multer = require('multer');

require('./DB/DB');

const imageSchema = require("./DBschemas/ImagesSchema");

app.use(express.json());

app.use(cors());

const port = 3001;

const Subscribers = require('./DBschemas/RegisterSchema');

app.use(express.urlencoded());




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "../FrontEnd/public/BImages/");
    },
    filename: function (req, file, cb) {
        return cb(null, `${file.originalname}`)
    }
});

const upload = multer({ storage })

app.get('/', (req, res) => {
    console.log("Working");
    res.send('Hello World!');
});
let imagename;
app.post('/call', jsonParser, upload.single('file'), async (req, res) => {
    imagename = req.file.originalname;
    // const imgName = await new imageSchema({ Pname, imagename });
    // await imgName.save();
    console.log("Saved!");
    res.status(201).json({ msg: "working" });
});



app.post('/ProductName', jsonParser, async (req, res) => {
    const Pname = req.body.Pname;
    console.log(imagename);
    console.log(Pname);
    const imgName = await new imageSchema({ Pname, imaOriName: imagename });
    await imgName.save();
    console.log("Saved!");
    res.status(201).json({ msg: "working" });
});

app.post("/getData", async (req, res) => {
    console.log("Executed!");
    const data = await imageSchema.find();
    console.log("Data:", data);
    res.status(201).send(data);
});

app.post('/login', (req, res) => {
    const { email, pass } = req.body;
    console.log(email, pass);

});
app.post('/register', jsonParser, async (req, res) => {
    const { fname, lname, phone, email, pass, cpass } = req.body;
    const userDetails = await Subscribers.findOne({ email: email });
    if (userDetails) {
        res.status(401).json({ error: "User Already Exists, Please Try with another email!" });
    } else {
        let newUser = new Subscribers({ fname: fname, lname: lname, phone: phone, email: email, pass: pass, cpass: cpass })
        newUser.save()
            .then((result) => {
                res.send({ msg: "Register Successful!" });
            }).catch((err) => {
                res.send(err);
            });
    }
});

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
})