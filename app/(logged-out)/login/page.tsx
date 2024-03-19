'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
	return (
		<>
			<PersonStandingIcon size={50} />

			<Card className='w-full max-w-sm '>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Login to your SupportMe account</CardDescription>
				</CardHeader>
				<CardContent>login form</CardContent>
				<CardFooter className='justify-between'>
					<small>Dont have an account ?</small>
					<Button variant='outline' size='sm' asChild>
						<Link href='/sign-up'>Sign up</Link>
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
