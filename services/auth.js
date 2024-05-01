const userAndSessionIdStorage = new Map();

const setUser = (id, user) => {
    console.log("userSet");
    userAndSessionIdStorage.set(id, user);
}

const getUser = (id) => {
    console.log("UserRetrieved");
    return userAndSessionIdStorage.get(id);
}

module.exports = {
  setUser,
  getUser,
};