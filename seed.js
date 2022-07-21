const mongoose = require('mongoose')
const User = require('./models/User.model')
const Post = require('./models/Post')
 mongoose.connect('mongodb+srv://alex:smith@cluster0.jbnxf.mongodb.net/?retryWrites=true&w=majority');



const users = [
	{
		username: 'notweiner',
        pasword: "monke"   
    	},
]
const posts = [
	{
		name:'guy',
		description:'smoll'
	}
]

User.create(users)
	.then(localsFromDB => {
		console.log(`${localsFromDB.length} celebrities got created`)
		mongoose.connection.close()
	})
	.catch(err => console.log(err))

Post.create(posts)
	.then(localsFromDB => {
		console.log(`${localsFromDB.length} celebrities got created`)
		mongoose.connection.close()
	})
	.catch(err => console.log(err))
	