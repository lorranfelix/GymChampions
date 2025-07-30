const {user: User} = require('../models/user');

const userController = {

    create: async (req, res) => {
        try {

            const user ={
                name: req.body.name,  
                age: req.body.age,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture,
                phoneNumbers: req.body.phoneNumbers
            };

            const response = await userModel.create(user);

            res.status(201).json({response, message: 'User created successfully!'});



        }   catch (error) {
            console.error('Error creating user:', error);
        }
    }     

}
module.exports = userController;