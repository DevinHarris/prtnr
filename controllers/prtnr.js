const User = require('../models/User');

// GET /:id/

exports.getRoot = (req, res, next) => {
    res.status(200).send({
        message: 'Home'
    })
}

// using queries to find prtnrs

exports.getUsers = async (req, res, next) => {

    try {
        const { query } = req;

        const users = await User.find(query);
        
        if (!users) {
            res.status(404).send({
                message: 'No users found.'
            })
        } else if (users.length === 0) {
            res.status(404).send({
                message: 'No users were found from here.'
            })
        }

        res.status(200).send({
            message: 'Users found.',
            data: users
        })
    } catch (err) {
        res.status(500).send({
            error: err
        })
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({
            username: username
        })

        if (!user) {
            res.status(404).send({
                message: `User: ${username} was not found.`
            })
        }

        res.status(200).send({
            message: 'User was found!',
            data: user
        })
    } catch (err) {
        res.status(500).send({
            error: err
        })
    }
    
}

exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        
        if (!user) {
            res.status(500).send({
                message: 'User could not be created.'
            })
        }

        res.status(200).send({
            message: 'User successfully created.',
            data: user
        })
    } catch(err) {
        res.status(500).send({
            error: err
        })
    }
}

exports.updateUser = async (req, res, next) => {

    try {
        const { username } = req.params;
        const user = await User.findOneAndUpdate({
            username: username
        })
        
        if (!user) {
            res.status(500).send({
                message: 'User could not be updated.'
            })
        }

        res.status(200).send({
            message: 'User successfully updated',
            data: user
        })
    } catch(err) {
        res.status(500).send({
            error: err
        })
    }

}

exports.deleteUser = async (req, res, next) => {

    try {
        const { username } = req.params;
        const user = await User.findByIdAndDelete(username);
        
        if (!user) {
            res.status(500).send({
                message: 'User could not be deleted.'
            })
        }

        res.status(200).send({
            message: 'User successfully updated',
            data: user
        })
    } catch(err) {
        res.status(500).send({
            error: err
        })
    }

}