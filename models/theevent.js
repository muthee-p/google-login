import {Schema, model, models } from 'mongoose';

const TheEventSchema = new Schema({
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	theName: {
		type: String,
		required: [true, 'The Name is required'],
	},
	theDate: {
		type:String,
		required: [true, 'the date is required'],
	}
});


const TheEvent = models.TheEvent || model('TheEvent', TheEventSchema);

export default TheEvent;