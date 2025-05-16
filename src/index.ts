import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import aspersionRoutes from './routes/aspersion_routes';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Application routes
app.use('/api/aspersion-controls', aspersionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
