import { connectToDB } from '@utils/database';
import TheEvent from '@models/theevent';

export const GET = async (request) =>{
	try {
		await connectToDB();

		const theevents = await TheEvent.find({})

		return new Response(JSON.stringify(prompts), {
			status: 200
		})
	}catch (error){
		return new Response('faied to fetch all propmts', {status: 500 })
	}
}