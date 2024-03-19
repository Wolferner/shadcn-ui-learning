import { Button } from '@/components/ui/button';
import { PersonStanding, PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1 className='flex items-center  gap-2 '>
				<PersonStandingIcon size={50} className='text-pink-500' />
				Page
			</h1>
			<p>Best dashbord for managing</p>
			<div className='flex gap-2 items-center'>
				<Button asChild>
					<Link href='/login'>Log In</Link>
				</Button>
				<small>or</small>
				<Button asChild variant='outline'>
					<Link href='/sign-up'>Sign up</Link>
				</Button>
			</div>
		</>
	);
}
