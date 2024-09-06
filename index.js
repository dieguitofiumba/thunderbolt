const express = require('express');
const cors = require('cors');
const app = express();

//routes
const library = require('./src/routes/library-routes')
const dashboard = require('./src/routes/dashboard-routes')
const auth = require('./src/routes/auth-routes')

const corsOptions = {
  origin: ['https://qantasrp.web.app', 'https://qantasrp.web.app/dashboard/join']
};


app.use(cors(corsOptions));
app.use(express.json());


app.use('/api', library);
app.use('/api', dashboard)
app.use('/api', auth)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});