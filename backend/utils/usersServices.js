import { where } from "sequelize";

async function addUser(req, res, next, Model) {
  const insert = req.body;

  const existingUser = await Model.findOne({ where: { email: insert.email } });
  if (existingUser)
    return res.status(404).send({ message: `Email already used` });
  const result = await Model.create(insert);
  if (!result) next(`Error while adding`);
  return res.status(201).send({ message: `Added succesfully`, user: result });
}

async function getAll(req, res, next, Model) {
  const allUsers = await Model.findAll();
  if (!allUsers.length)
    return res
      .status(404)
      .send({ message: "Users not found or there is no user add yet" });
  return res
    .status(201)
    .send({ message: "Users retrieve succesfully", data: allUsers });
}

async function getUser(req, res, next, Model) {
  const { email } = req.params;

  const user = await Model.findOne({ where: { email: email } });
  if (!user)
    return res.status(404).send({ message: "No user found with that email" });
  return res
    .status(201)
    .send({ message: "User retrieve succesfully", data: user });
}

const services = { addUser, getAll, getUser };
export { services };
