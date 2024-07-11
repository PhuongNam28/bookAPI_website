const express = require('express');
const bodyParser = require('body-parser');
const initWebRoutes = require("./routes/web");
const app = express();
const port = 8080; 

// Config app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
initWebRoutes(app);

app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


