
import { connectToDB } from '@utils/database';
import TheEvent from '@models/theevent'

export const POST = async (req, res) => {
	const {userId, theName, theDate} = await req.json();

	try {
		await connectToDB();
		const newEvent = new TheEvent({
			creator: userId,
			theName,
			theDate
		})
		await newEvent.save();

		return new Response(JSON.stringify(newEvent), { status: 201 })

	}catch (error){
		return new Response('Failed to creat a new event', { staus: 500 })
	}
}