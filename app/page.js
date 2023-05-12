import Upcoming from '@components/Upcoming'
import PastEvents from '@components/PastEvents'

const Home = () =>{
	return(
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>OurEvents</h1>
			<br className='max-md: hidden' />
			<h3 className='orange_gradient text-center'>
			 Up coming events</h3>
			 <p className='desc text-center'> Look out for these events and mark your calendar </p>

			 <Upcoming />
			 <PastEvents />
		</section>
		)
}

export default Home