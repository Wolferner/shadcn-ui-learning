'use client';
import data from '@/data';
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

export default function WorkLocationTrends() {
	return (
		<ResponsiveContainer height={350} width='100%'>
			<BarChart data={data}>
				<XAxis dataKey='name' stroke='#888888' />
				<YAxis stroke='#888888' fontSize={12} />
				<Tooltip />
				<Bar dataKey='office' stackId={1} fill='#ec4899' />
				<Bar dataKey='wfh' stackId={1} fill='#6b7280' radius={[4, 4, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
}
