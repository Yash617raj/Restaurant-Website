const userModel = require("../models/user");
const express = require("express");
const { v4 : uuidv4 } = require('uuid');
const {setUser} = require("../services/auth");


const handleUserLogin = async (req, res) => {
    try {
        const details = req.body;
        const user = await userModel.findOne({
            name: String(details.name),
            email : String(details.email),
            password : String(details.password),
        })

        if(!user) return res.send("Enter correct details");
        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("uid", sessionId);
        return res.status(200).redirect("/home");
        
    } catch (error) {
        console.log("Login error :: " , error);
    }
}

const handleUserSignUp = async (req, res) => {
    const details= req.body;
    const aUser = await userModel.create({
        name : details.name,
        email : details.email,
        password : details.password
    })
    console.log(aUser);
    return res.redirect("/home");
}

const staticPage = (req, res) => {
    return res.render("static/home");
}

const homePage = (req, res) => {
    return res.render("home");
}

const userSignUp = async (req, res) => {
    return res.render("static/signup");
}

const userLogin = (req, res) => {
    return res.render("static/user");
}

const handleReading = (req, res) => {
    return res.render("reading");
}

module.exports = {
  userSignUp,
  handleUserLogin,
  staticPage,
  homePage,
  handleUserSignUp,
  userLogin,
  handleReading,
};