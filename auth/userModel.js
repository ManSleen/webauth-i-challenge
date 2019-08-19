const db = require("../data/db-config");

module.exports = {
  add,
  findBy,
  find
};

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      console.log(ids);
      const [id] = ids;
      return findById(id);
    });
}

function findBy(filter) {
  return db("users").where(filter);
}

function find() {
  return db("users").select("id", "username", "password");
}
