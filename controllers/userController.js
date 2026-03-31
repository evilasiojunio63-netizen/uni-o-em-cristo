import User from "../models/User.js";

// Criar usuário
export const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

// Dar like
export const likeUser = async (req, res) => {
  const { userId, targetId } = req.body;

  const user = await User.findById(userId);
  const target = await User.findById(targetId);

  if (!user.likes.includes(targetId)) {
    user.likes.push(targetId);
    await user.save();
  }

  // verificar match
  if (target.likes.includes(userId)) {
    user.matches.push(targetId);
    target.matches.push(userId);

    await user.save();
    await target.save();

    return res.json({ match: true });
  }

  res.json({ match: false });
};
