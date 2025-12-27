
const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
  res.send('<h1>Hello, Dishant!</h1><p>Your Express server is running.</p>');
});

app.post('/api/cars', (request,response) =>{
    const {name,model} = request.body;
    console.log(name,model);
    console.log("car submitted sucessfully");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});


const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/FIRSTDB', {useNewurlParser:true,
  useUnifiedTopology:true
})
.then( () => console.log("connected succesfully"))
.catch( (error) => console.log("error hai ji"))