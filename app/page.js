"use client"

import { useSession } from 'next-auth/react';
const Home = () =>{
	const {data: session } = useSession();

	return(
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>Welcome</h1>
			<br className='max-md: hidden' />
			<h3 className='orange_gradient text-center mt-3'>
			 This is the Home page</h3>
			 {session?.user ? (
			 	 <p className='desc text-center '>You are now in </p>
			 	 ):(
			 <p className='desc text-center'>Please Sign in to Continue </p>
			 )}
			 
		</section>
		)
}

export default Home