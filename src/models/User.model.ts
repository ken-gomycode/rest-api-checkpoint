import Database from "../database";

const db = Database.getDb();
const schema = new db.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  }
})

const User = db.model('User', schema);

export default User;