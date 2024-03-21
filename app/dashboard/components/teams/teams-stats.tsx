import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import cm from '@/public/cm.jpg';
import teamLeaders from '@/teamLeaders';
import {
	AlertTriangleIcon,
	BadgeCheckIcon,
	ListChecksIcon,
	PieChartIcon,
	StarIcon,
	UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SupportTicketsResolved from './support-tickets-resolved';
import TeamDistributionChart from './team-distribution-chart';

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
							<div className='text-5xl font-bold'>8</div>
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
						<CardTitle className='text-base flex justify-between items-center'>
							<span>Team leaders</span>
							<StarIcon className='text-yellow-500' />
						</CardTitle>
					</CardHeader>
					<CardContent className='flex flex-wrap gap-2'>
						{teamLeaders.map((leader, index) => (
							<TooltipProvider key={`${leader.firstName}${leader.lastName}`}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Avatar>
											{!!leader.avatar && (
												<Image
													src={leader.avatar}
													alt={`${leader.firstName} ${leader.lastName}`}
												/>
											)}
											<AvatarFallback>
												{leader.firstName[0]}
												{leader.lastName[0]}
											</AvatarFallback>
										</Avatar>
									</TooltipTrigger>
									<TooltipContent>
										{leader.firstName} {leader.lastName}
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						))}
					</CardContent>
				</Card>

				<Card className=' flex flex-col'>
					<CardHeader className='pb-2'>
						<CardTitle className='text-base flex justify-between items-center'>
							<span>Team distribution</span>
							<PieChartIcon />
						</CardTitle>
					</CardHeader>
					<CardContent className='pb-0'>
						<TeamDistributionChart />
					</CardContent>
				</Card>
			</div>

			<Card className='my-4'>
				<CardHeader>
					<CardTitle className='text-lg flex items-center gap-2'>
						<ListChecksIcon />
						Support tickets resolved
					</CardTitle>
				</CardHeader>
				<CardContent className='pl-0'>
					<SupportTicketsResolved />
				</CardContent>
			</Card>
		</>
	);
}
