const express = require("express");
var bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

app.post('/formPost', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(4005, () => {
  console.log(`Server is running on port ${4005}`);
});