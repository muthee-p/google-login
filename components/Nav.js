'use client';

import Link from 'next/link';
import Image from 'next/image';

import {useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () =>{
	const {data: session } = useSession();

	const [providers, setProviders] = useState(null);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	useEffect(() => {
		const setUpProviders = async () =>{
			const response = await getProviders();

			setProviders(response);
		}
		setUpProviders();
	}, [])

	return(
		<nav className='flex-between w-full mb-16 pt-3' >
			<Link href='/' className ='flex gap-2 flex-center'>
				<Image 
				src='/assets/images/logo2.svg'
				alt='logo'
				width={30}
				height={30}
				className='object-contain'
				 />
				 <p className='logo_text'>
				 Google SignIn</p>
			</Link>

			{/*desktop nav*/}

			<div className='sm:flex hidden'>
				{session?.user ? (
					<div className= 'flex gap-3 md:gap-5'>
						<p > Howdy, &#32;{session?.user.name}
						</p>
						<Link href='/dashboard' className='black_btn'>
						Dashbord
						</Link>
						<button type='button' 
						onClick={signOut} className='outline_btn'>
						Sign Out
						</button>

						<div>
						<Image src={session?.user.image}
							alt='profile'
							width={37}
							height={37}
							className='rounded-full'
							onClick={() => setToggleDropdown(false)}
							/>
						</div>
						</div>
						):(
						<>
							{providers && Object.values(providers).map((provider) =>(
								<button type='button'
									key={provider.name}
									onClick={() =>signIn(provider.id)}
									className='black_btn'
								>
									Sign In
								</button>
						))}
					</>
						)}
			</div>
			

			{/*mobile navigation*/}
			<div className='sm:hidden flex relative'>
				{session?.user ? (
					<div className='flex'>
						<Image src={session?.user.image}
							alt='profile'
							width={37}
							height={37}
							className='rounded-full'
							onClick={() => 
								setToggleDropdown(!toggleDropdown)
							}
							/>

						{toggleDropdown && (
								<div className='dropdown'>
									<p className='dropdown_link'
									onClick={() => setToggleDropdown(false)}>
									Admin</p>
									<Link href='/createEvent'
										className='black_btn'
										onClick={() => setToggleDropdown(false)}
										>
										Add Events
									</Link>

									<button type='button' 
										onClick={() => {
											setToggleDropdown(false);
											signOut();}}
										 className='mt-5 w-full black_btn'>
										Sign Out
									</button>
								</div>
								)}
							</div>
					): (
					<>
					{providers && 
					Object.values(providers).map((provider) =>(
							<button type='button'
							key={provider.name}
							onClick={() =>{signIn(provider.id)}}
							className='black_btn'
							>
							Sign In
							</button>
						)
						)}
					</>
					)
					}
			</div>

		</nav>
		);
};

export default Nav