'use client'

import { useState} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';


const AddEvent = () =>{

	const router = useRouter();
	const { data: session } = useSession();
	
	const [submitting, setSubmitting ] = useState(false);
	const [ theEvent, setTheEvent ] = useState({
		theName: '',
		theDate: '',
	})

	const addEvent = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try{
			const response = await fetch('/api/theevents/new',
			{
				method: 'POST',
				body: JSON.stringfy({
					theName:theEvent.theName,
					userId: session.user.id,
					theDate: theEvent.theDate
				})
			})
			if(response.ok){
				router.push('/');
			}
		}catch (error){
			console.log(error);
		}finally {
			setSubmitting(false);
		}
	}
	return(
		<Form 
			type='Add'
			theEvent={theEvent}
			setTheEvent={setTheEvent}
			submitting={submitting}
			handleSubmit={addEvent}
		/>
		)
}

export default AddEvent