const express = require('express')
const app = express();
const Home = require('./')
app.get('/', (req,res) => res.send(Home))

app.listen(3000, () => console.log('Exampleapp listening on port 3000!'))
