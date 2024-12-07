import express from 'express';
const app = express();
import DBConnection from './Database/config.js';
import router from './Routes/authRoutes.js';
import cors from 'cors';
import routerbrand from './Routes/brandRoutes.js';
import routerprod from './Routes/prodRoutes.js';
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
const port = 5000;

DBConnection();

app.use('/', router);
app.use('/',routerbrand);
app.use('/',routerprod);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});