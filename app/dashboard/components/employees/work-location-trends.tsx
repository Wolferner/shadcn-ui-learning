'use client';
import data from '@/data/work-location-data';
import {
	Bar,
	BarChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

export default function WorkLocationTrends() {
	return (
		<ResponsiveContainer height={350} width='100%'>
			<BarChart
				data={data}
				className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'
			>
				<XAxis dataKey='name' stroke='#888888' />
				<YAxis stroke='#888888' fontSize={12} />
				<Tooltip
					separator=': '
					labelClassName='font-bold'
					wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
					formatter={(value, name) => {
						if (name === 'wfh') {
							return [value, 'Work from home'];
						}
						if (name === 'office') {
							return [value, 'Work from office'];
						}
					}}
				/>
				<Legend
					iconType='circle'
					formatter={value => {
						if (value === 'office') {
							return <div className='text-sm'>Work from office</div>;
						} else if (value === 'wfh') {
							return <div className='text-sm'>Work from home</div>;
						}
					}}
				/>
				<Bar dataKey='office' stackId={1} fill='#ec4899' />
				<Bar dataKey='wfh' stackId={1} fill='#6b7280' radius={[4, 4, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
}
