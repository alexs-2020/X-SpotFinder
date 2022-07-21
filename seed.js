const mongoose = require('mongoose')
const User = require('./models/User.model')

 mongoose.connect('mongodb+srv://alex:smith@cluster0.jbnxf.mongodb.net/?retryWrites=true&w=majority');



const users = [
	{
		username: 'notweiner',
        pasword: "monke"   
    	},
]

User.create(users)
	.then(localsFromDB => {
		console.log(`${localsFromDB.length} celebrities got created`)
		mongoose.connection.close()
	})
	.catch(err => console.log(err))