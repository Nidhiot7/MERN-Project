const bcrypt = require('bcryptjs')

const User = require('../models/errorModel')
const HttpError = require('../models/errorModel')

// ****************************************Register New user**********************************
// Post : api/users/register
// Unprotected

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password)  {
            return next(new HttpError("Fill in all fields", 422))
        }

        const newEmail = email.toLowerCase()

        const emailExists = await User.findOne({ email: newEmail })
        if(emailExists){
            return next(new HttpError("Email already exists", 422));
        }
        if ((password.trim()).length < 6) {
            return next(new HttpError("Password should be at least 6 characters.", 422))
        }
        if (password != password2) {
            return next(new HttpError("Passwords do not match.", 422))
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = await User.create({ name, email: newEmail, password: hashedPass });
        res.status(201).json(`New User ${newUser.email} registered`)

    } catch (error) {
        return next(new HttpError("User registration failed", 422))
    }

}




// ****************************************Login a Registered user**********************************
// Post : api/users/login
// Unprotected

const loginUser = async (req, res, next) => {
    res.json("Login User");
}



// ****************************************User Profile**********************************
// Post : api/users/:id
// Protected

const getUser = async (req, res, next) => {
    res.json("User Profile");
}





// ****************************************Change User Avatar (Profile Picture)**********************************
// Post : api/users/change-avatar
// Protected

const changeAvatar = async (req, res, next) => {
    res.json("Change User Avatar");
}





// ****************************************Edit User Details (from Profile)**********************************
// Post : api/users/edit-user
// Protected

const editUser = async (req, res, next) => {
    res.json("Edit User Details");
}





// ****************************************Get Authors**********************************
// Post : api/users/author
// Protected

const getAuthors = (req, res, next) => {
    res.json("Get all users/authors");
}

module.exports = { registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors };