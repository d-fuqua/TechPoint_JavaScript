const mysql = require('./src/Models/Server/connection.js')
const path = require('path');
const express = require('express');
const app = express();
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.HOST || '0.0.0.0';

app.get("/counter/:id", (req,res) => {
	mysql.query(`select * from restaurants where restaurant_id = "${req.params.id}"`,(err,rows)=>{
		if(err) throw err;
		res.send({count:rows[0]["numberOfPeople"]})
	})
})

app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/dist/index.html');
// });


app.listen(server_port, server_host, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${server_port}`)
));