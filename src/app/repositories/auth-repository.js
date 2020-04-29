const User = require("./../models/user");

exports.userRegister = async (data) => {
  const hasUser = await User.findOne({ email: data.email });

  if (hasUser) {
    return null;
  }

  const user = new User({ name: data.name, email: data.email });

  user.password = user.generateHash(data.password);

  await user.save();

  return {
    email: user.email,
    signUpDate: user.signUpDate,
  };
};

exports.userLogin = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (!user) {
    return null;
  }

  if (!user.validPassword(data.password)) {
    return null;
  }

  return user;
};
