import React from 'react'
import Link from 'next/link';

const Form = ({type, theEvent, setTheEvent, submitting, handleSubmit}) =>{
	return(
		<section className='w-full max-w-full flex-start flex-col'>
			<h1 className='head_text text-left'>{type}
			<span className='blue_gradient'>Event</span>
			</h1>
			<p className='desc text-left max-2-md'>{type} coming events</p>

			<form onSubmit={handleSubmit} 
			className='mt-10 w-full max-2xl flex flex-col gap-7 glassmorphism'>
			<label>
				<span className='font-satoshi font-semibold text-base text-gray-700'> 
				Event title</span>
			
			<input 
			value={theEvent.theName} 
			onChange={(e) => setTheEvent({ ...theEvent, theName: e.target.value })}
			type='text'
			required
			placeholder='Event name here'
			className='form_input' 
			/>
			</label>

			<label>
				<span className='font-satoshi font-semibold text-base text-gray-700'> 
				Event date </span>
			
			<input 
			value={theEvent.theDate} 
			onChange={(e) => setTheEvent({ ...theEvent, theDate: e.target.value })}
			required
			type='text'
			className='form_input'
			placeholder='Event date here'
			/>
			</label>
			<div className='flex-end mx-3 mb-5 gap-4'>
				<Link href='/' className='text-gray-500 text-sm' > Cancel</Link>
				<button type='submit' disabled={ submitting }
				className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
				{submitting ? '${type}...' : type}

				</button>
			</div>

			</form>
		</section>
		)
}

export default Form