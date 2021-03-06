const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'personal_backend',
  password : 'password'
});


app.post("/submitMessage", (req, res) => {
	console.log(req.body);
	let infoData = {
		name: req.body.name,
		email: req.body.email,
		message: req.body.message
	};
 
	 connection.query('INSERT INTO infos SET ?', infoData, function(err, result) {
	  if (err) throw err;
	  console.log(result);
	  res.json({
		  message: "success"
	  })
	});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




