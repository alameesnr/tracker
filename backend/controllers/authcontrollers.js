const User = require('../models/User.Model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.status(201).send('User registered');
};

const signin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user._id, username: user.username }, 'secretkey', { expiresIn: '1h' });
      res.status(200).json({ token });
  } else {
      res.status(401).send('Invalid credentials');
  }
};

// const signin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     usermod.findOne({ email: email })
//       .then(user => {
//         if (user) {
//           if (user.password === password) {
//             res.json({ message: "Login Successful", user: { name: user.firstname + ' ' + user.lastname, email: user.email } });
//           } else {
//             res.json({ message: "Password incorrect" });
//           }
//         } else {
//           res.json({ message: "No record found" });
//         }
//       })
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// const signup = async (req, res) => {
//   try {
//     if (
//       !req.body.firstname ||
//       !req.body.lastname ||
//       !req.body.email ||
//       !req.body.password
//     ) {
//       return res.status(400).send({
//         message: "send all required fields: firstname, lastname, email, password"
//       });
//     }

//     const userReg = await usermod.create(req.body);
//     res.status(200).json(userReg);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// }

module.exports = {
  signin,
  signup
};
