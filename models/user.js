const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 255,
		},
		hashedPassword: {
			type: String,
			required: true,
			max: 1024,
			min: 6,
		},
		
	},
	{
		timestamps: true,
		toObject: {
			// remove `hashedPassword` field when we call `.toObject`
			transform: (_doc, user) => {
				delete user.hashedPassword;
				return user;
			},
		},
	}
);
module.exports = mongoose.model("User", userSchema);