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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

// Schema for Zod validation
const formSchema = zod
	.object({
		email: zod.string().email(),
		accountType: zod.enum(['personal', 'company']),
		companyName: zod.string().optional(),
		numberOfEmployees: zod.coerce.number().optional(),
	})
	.superRefine((data, ctx) => {
		if (data.accountType === 'company' && !data.companyName) {
			ctx.addIssue({
				code: zod.ZodIssueCode.custom,
				path: ['companyName'],
				message: 'Company name is required',
			});
		}
		if (
			data.accountType === 'company' &&
			(!data.numberOfEmployees || data.numberOfEmployees < 0)
		) {
			ctx.addIssue({
				code: zod.ZodIssueCode.custom,
				path: ['numberOfEmployees'],
				message: 'Number Of Employees is required',
			});
		}
	});

// Types for form generated from zod schema
type FormType = zod.infer<typeof formSchema>;

export default function SignUpPage() {
	//Initialization of react-hook-form
	const form = useForm<FormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	const handleSubmit = (data: FormType) => {
		console.log('success', data);
		form.reset();
	};

	// Watch accountType value to show only needed fields
	const accountType = form.watch('accountType');

	return (
		<>
			<PersonStandingIcon size={50} />

			<Card className='w-full max-w-sm '>
				<CardHeader>
					<CardTitle>Sign up</CardTitle>
					<CardDescription>Sign up for a new account</CardDescription>
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

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='accountType'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Account Type</FormLabel>
										<FormControl>
											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder='Select account type' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value='personal'>Personal</SelectItem>
													<SelectItem value='company'>Company</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							{accountType === 'company' && (
								<>
									<FormField
										control={form.control}
										name='companyName'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Company name</FormLabel>
												<FormControl>
													<Input placeholder='Netfix ltd' {...field} />
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='numberOfEmployees'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Employees</FormLabel>
												<FormControl>
													<Input
														type='number'
														min={0}
														placeholder='Employees'
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}

							<Button type='submit'>Sign up</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className='justify-between'>
					<small>Already have an account ?</small>
					<Button variant='outline' size='sm' asChild>
						<Link href='/login'>Login</Link>
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
