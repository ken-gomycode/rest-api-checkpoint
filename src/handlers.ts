import {HandlerFunction} from "./types";
import User from "./models/User.model";

class Handlers {
  static welcome: HandlerFunction = async (_, res) => {
    return res.json({ message: 'welcome to the api' });
  }

  static getAllUsers: HandlerFunction = async (_, res) => {
    const users = await User.find();
    return res.json(users);
  }

  static addUser: HandlerFunction = async (req, res) => {
    const { id, first_name, last_name, email, phone, password } = req.body;
    const newUser = new User({ id, first_name, last_name, email, phone, password });
    await newUser.save();
    return res.json(newUser);
  }

  static getUserById: HandlerFunction = async (req, res) => {
    const {id} = req.params;
    const user = await User.findOne({id});
    return res.json(user);
  }

  static updateUser: HandlerFunction = async (req, res) => {
    const {id} = req.params;
    const {first_name, last_name, email, phone, password} = req.body;
    const user = await User.findOneAndUpdate({id}, {first_name, last_name, email, phone, password}, {new: true});
    return res.json(user);
  }

  static deleteUser: HandlerFunction = async (req, res) => {
    const {id} = req.params;
    await User.findOneAndDelete({id});
    return res.json({message: "User deleted successfully"});
  }
}

export default Handlers;