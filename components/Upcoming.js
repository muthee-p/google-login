
'use client'

import {useState, UseEffect } from 'react'

import EventCard from 'EventCard'

const EventCardList = ({ data}) => {
	return (
		<div className= 'mt-16 prompt_latout'>
			{data.map((post) => (
				<EventCard
					key={theEvents._id}
					theEvents={theEvents}
				/>
				))}
		</div>
		)
}

const Upcoming = () =>{
	const [theEvents, setTheEvents ] = useState([]);
	UseEffect(() =>{
		const fetchEvents = async () =>{
			const response = await fetch('/api/theevent');
			const data = await response.json();
			setTheEvents(data);
		}
		fetchEvents();
	}, []);
	return(
		<section className='feed'>
		Upcoming Events
		<EventCardList
		 data={[theEvents]}
		 />
		</section>
		)
}

export default Upcoming