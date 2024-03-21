import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';

export default function EmployeesStats() {
	return (
		<div className='grid lg:grid-cols-3 gap-4'>
			<Card>
				<CardHeader>
					<CardTitle className='text-base'>Total Employees</CardTitle>
				</CardHeader>
				<CardContent className='flex justify-between items-center '>
					<div className='flex gap-2'>
						<UserIcon />
						<div className='text-5xl font-bold'>100</div>
					</div>
					<div>
						<Button size='xs' asChild>
							<Link href='/dashboard/employees'>View All</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className='text-base'>Employees present</CardTitle>
				</CardHeader>
			</Card>
			<Card className='border-pink-500'>
				<CardHeader>
					<CardTitle className='text-base'>Employee of the month</CardTitle>
				</CardHeader>
			</Card>
		</div>
	);
}
