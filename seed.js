const mongoose = require('mongoose')
const User = require('./models/User.model')
const Post = require('./models/Post')
 mongoose.connect('mongodb+srv://alex:smith@cluster0.jbnxf.mongodb.net/?retryWrites=true&w=majority').then((xx) =>{
	console.log('connected')
 })
 const Location = require('./models/Location')


const users = [
	{
		username: 'notweiner@cock.com',
        pasword: 'Monke'   
    	},
]
// const posts = [
// 	{
// 		name:'guy',
// 		description:'smoll'
// 	}
// ]

// const local = [
// 	{
// 		title: 'local',
//         city: "monke",
// 		location:{
// 			long: -70.9,
// 			lat: 41
// 		}
		
//     	},
// ]

// User.create(users)
// 	.then(localsFromDB => {
// 		console.log(`${localsFromDB.length} celebrities got created`)
// 		mongoose.connection.close()
// 	})
// 	.catch(err => console.log("no"))

// Post.create(posts)
// 	.then(localsFromDB => {
// 		console.log(`${localsFromDB.length} celebrities got created`)
// 		mongoose.connection.close()
// 	})
// 	.catch(err => console.log(err))
	

	// Location.create(local)
	// .then(localsFromDB => {
	// 	console.log(`${localsFromDB.length} celebrities got created`)
	// 	mongoose.connection.close()
	// })
	// .catch(err => console.log(err))