const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const siteRoutes = require('./routes/siteRoutes');
const electricianRoutes = require('./routes/electricianRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.use('/sites', siteRoutes);
app.use('/electricians', electricianRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
