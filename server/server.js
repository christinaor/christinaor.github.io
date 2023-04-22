import express from 'express';
const app = express();
import cors from 'cors';
import connectToDB from './models/connectToDB.js';
import emailController from './controllers/email.js';
const PORT = 3333;

// handles 'Access-Control-Allow-Origin' header for cross-site request forgery issue
app.use(cors());

// Handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to Controllers
app.post('/sent', emailController.newEmail, (req, res) => {
  console.log(`Email was sent with credentials: ${res.locals.newEmail}`)
  // return res.status(200).json(res.locals.newEmail);
  return res.status(200).json(res.locals.isEmailSent);
});

// Catchall
app.use('*', (req, res) => res
  .status(404)
  .send('This page does not exist! ):'));

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { error: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

connectToDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// module.export = app;
export default app;