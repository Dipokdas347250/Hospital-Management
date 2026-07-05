const bcrypt = require('bcrypt');

const userStore = [];

const toLowerEmail = (email = '') => email.trim().toLowerCase();

const sanitizeUser = (user) => {
  if (!user) return null;

  const plainUser = user.toObject ? user.toObject() : { ...user };
  delete plainUser.password;
  return plainUser;
};

const findUserByEmail = async (email) => {
  const normalizedEmail = toLowerEmail(email);
  return userStore.find((user) => user.email === normalizedEmail) || null;
};

const createUser = async ({ name, email, password, role, phone }) => {
  const normalizedEmail = toLowerEmail(email);
  const existingUser = await findUserByEmail(normalizedEmail);
  if (existingUser) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    _id: `${Date.now()}-${userStore.length + 1}`,
    name,
    email: normalizedEmail,
    password: hashedPassword,
    role,
    phone,
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  userStore.push(newUser);
  return newUser;
};

const comparePassword = async (user, candidatePassword) => {
  return bcrypt.compare(candidatePassword, user.password);
};

module.exports = {
  findUserByEmail,
  createUser,
  comparePassword,
  sanitizeUser
};
