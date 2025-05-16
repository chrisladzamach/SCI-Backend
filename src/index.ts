import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Backend with TypeScript ready!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
