//Will be having a function for registration and a function for loging in
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/index.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); //before the user is saved to the database, we hash the password, the hash method is import from bcryptjs
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: "Error occurred" });
    }
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = User.findOne({ email });

    if (use || !(await user.matchedPasswords(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    res.status(200).json({ _id: user._id, email: user.email, token: token });
  } catch (error) {
    res.status(500).json({ error: "Error occurred" });
  }
};

export default { registerUser, loginUser };