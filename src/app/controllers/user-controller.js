const User = require("./../models/user");

exports.post = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    res.json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário!" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();

    res.json({ message: "Usuário listados com sucesso!", users });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar usuários!" });
  }
};
