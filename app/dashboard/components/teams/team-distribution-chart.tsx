'use client';
import data from '@/teams';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export default function TeamDistributionChart() {
	return (
		<ResponsiveContainer width='100%' height={150}>
			<PieChart>
				<Tooltip
					labelClassName='font-bold'
					wrapperClassName='[&_.recharts-tooltip-item]:!text-black dark:[&_.recharts-tooltip-item]:!text-white !text-sm dark:!bg-black rounded-md dark:!border-border'
				/>
				<Pie data={data} dataKey={'value'} nameKey='name'>
					{data.map((dataItem, i) => (
						<Cell fill={dataItem.color} key={i} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}
