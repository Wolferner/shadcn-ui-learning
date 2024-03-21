import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import cm from '@/public/cm.jpg';
import {
	AlertTriangleIcon,
	BadgeCheckIcon,
	ListChecksIcon,
	UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TeemsStats() {
	return (
		<>
			<div className='grid lg:grid-cols-3 gap-4'>
				<Card>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Total Teams</CardTitle>
					</CardHeader>
					<CardContent className='flex justify-between items-center '>
						<div className='flex gap-2'>
							<UsersIcon />
							<div className='text-5xl font-bold'></div>
						</div>
						<div>
							<Button size='xs' asChild>
								<Link href='/dashboard/teams'>View All</Link>
							</Button>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Team leaders</CardTitle>
					</CardHeader>
					<CardContent>b</CardContent>
				</Card>

				<Card className=' flex flex-col'>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base'>Team distribution</CardTitle>
					</CardHeader>
					<CardContent className='flex gap-2 items-center'>a</CardContent>
				</Card>
			</div>

			<Card className='my-4'>
				<CardHeader>
					<CardTitle className='text-lg flex items-center gap-2'>
						<ListChecksIcon />
						Support tickets resolved
					</CardTitle>
				</CardHeader>
				<CardContent className='pl-0'>graph</CardContent>
			</Card>
		</>
	);
}
