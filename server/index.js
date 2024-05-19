import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send({name:'test'})
})


let formInfo = {
    name: '',
    email: '',
    department: '',
    time: ''
};

app.get('/appointments', (req, res) => {
    res.send(formInfo);   
})

app.post("/appointments", (req, res) =>{
    formInfo = req.body;
    if (!formInfo.name || !formInfo.email || !formInfo.department || !formInfo.time) {
        return res.status(422).json({ error: 'All fields are required' });
      }
    console.log("Form data received:" , formInfo)
    res.status(200).json({ message: 'Form submitted successfully!' });
})


app.listen(3000, () => {
    console.log("server is up")
})