const { User } = require("../../models");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { password, ...userData } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      ...userData,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userData = user.toJSON();

    delete userData.password;

    req.session.user = userData;

    return res
      .status(200)
      .json({ user: userData, message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: "Login error" });
  }
};

const logout = (req, res) => {
  if (req.session?.user) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout error" });
      }

      res.clearCookie("connect.sid");

      return res.status(200).json({ message: "Logged out successfully" });
    });
  } else {
    return res.status(400).json({ message: "No active session" });
  }
};

const editProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch)
      return res.status(401).json({ message: "Incorrect password" });

    const { first_name, last_name, phone, email, address } = req.body;

    await User.update(
      { first_name, last_name, phone, email, address },
      { where: { id } },
    );

    const updateUser = await User.findByPk(id);

    const safeUser = updateUser.toJSON();

    delete safeUser.password;

    return res
      .status(200)
      .json({ user: safeUser, message: "Profile updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating profile" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const userData = user.toJSON();

    delete userData.password;

    return res
      .status(200)
      .json({ user: userData, message: "User data retrieved" });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving user" });
  }
};

const checkAuth = async (req, res) => {
  try {
    if (!req.session?.user) return res.status(204).end();

    const user = await User.findByPk(req.session.user.id);

    if (!user) {
      req.session.destroy();
      return res.status(204).end();
    }
    
    return res.status(200).json({ user, message: "Authenticated" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login, logout, editProfile, getUser, checkAuth };
