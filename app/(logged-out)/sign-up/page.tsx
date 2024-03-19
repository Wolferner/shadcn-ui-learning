'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, PersonStandingIcon } from 'lucide-react';
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
		dob: zod.date().refine(
			date => {
				const today = new Date();
				const eighteenYearsAgo = new Date(
					today.getFullYear() - 18,
					today.getMonth(),
					today.getDate()
				);
				return date < eighteenYearsAgo;
			},
			{ message: 'You must be 18 years old to sign up' }
		),
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

	const dobFromDate = new Date();
	dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);

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
							<FormField
								control={form.control}
								name='dob'
								render={({ field }) => (
									<FormItem className='flex flex-col pt-2'>
										<FormLabel>Date of birth</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant='outline'
														className='normal-case flex justify-between pr-1'
													>
														<span> Pick a Date</span>
														<CalendarIcon />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent align='start' className='w-auto p-0'>
												<Calendar
													mode='single'
													defaultMonth={field.value}
													selected={field.value}
													onSelect={field.onChange}
													fixedWeeks
													weekStartsOn={1}
													fromDate={dobFromDate}
													toDate={new Date()}
													// disabled={(date)=>{
													// 	return date.getDate()=== 0 || date.getDate()=== 6
													// }}
												/>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>
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
