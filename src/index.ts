import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import aspersionRoutes from './routes/aspersion_routes';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas de la aplicación
app.use('/aspersion-controls', aspersionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});