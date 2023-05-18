'use client'
import { useState } from 'react'
import Link from 'next/link';

const Login = () =>{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) =>{
		e.preventDefault();
	}

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
				Enter email </span>
			
			<input 
			value={email} 
			onChange={(e) => setEmail({e.target.value })}
			type='text'
			required
			placeholder='email here'
			className='form_input' 
			/>
			</label>

			<label>
				<span className='font-satoshi font-semibold text-base text-gray-700'> 
				Enter your password </span>
			
			<input 
			value={password} 
			onChange={(e) => setPassword({e.target.value })}
			required
			type='password'
			className='form_input'
			placeholder='your password'
			/>
			</label>
			<div className='flex-end mx-3 mb-5 gap-4'>
				<Link href='/' className='text-gray-500 text-sm' > Cancel</Link>
				
				<button type='submit' 
				className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
				login
				</button>
				<p> Not a member? <Link href="/register">Register</Link>
				</p>
			</div>

			</form>
		</section>
		)
}

export default Login