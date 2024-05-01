const { getUser} = require("../services/auth");

const isValidUser = async (req, res, next) => {
    const id = req.cookies.uid;
    console.log(id);
    if(!id) return res.redirect("/login");

    const user = getUser(id);
    console.log(user);
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}

module.exports = {
    isValidUser,
}