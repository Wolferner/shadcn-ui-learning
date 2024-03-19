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
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

// Schema for Zod validation
const formSchema = zod.object({
	email: zod.string().email(),
	password: zod.string(),
});
// Types for form generated from zod schema
type FormType = zod.infer<typeof formSchema>;

export default function LoginPage() {
	//Initialization of react-hook-form
	const form = useForm<FormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const handleSubmit = (data: FormType) => {
		console.log('success', data);
		form.reset();
	};

	return (
		<>
			<PersonStandingIcon size={50} />

			<Card className='w-full max-w-sm '>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Login to your SupportMe account</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							className='flex flex-col gap-4'
							onSubmit={form.handleSubmit(handleSubmit)}
						>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder='John@ss.dd' {...field} />
										</FormControl>
										<FormDescription>
											This is the email address you signed up to SupportMe with.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input type='password' placeholder='******' {...field} />
										</FormControl>
										<FormDescription>
											This is place for your password.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit'>Login</Button>
						</form>
					</Form>
				</CardContent>
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
