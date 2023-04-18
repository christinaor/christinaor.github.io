import db from '../models/connectToDB.js';
import Email from '../models/email.js';

const emailController = {};

emailController.newEmail = async (req, res, next) => {
  try {
    console.log('in newEmail controller')
    const { email, subject, message } = req.body;
    // const query = `INSERT QUERY`;
    const newEmail = await Email.create([{
      email,
      subject,
      message,
    }]);
    res.locals.newEmail = newEmail;
    return next();

    // const addEmail = await db.query(query);
  } catch (error) {
    return next({
      log: `Error in emailController.sendEmail: ${error}`,
      message: `Could not send email. Check server log for more details. Error in emailController.sendEmail as follows: ${error}`
    });
  }
};

export default emailController;