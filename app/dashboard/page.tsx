import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
	return (
		<Tabs>
			<TabsList>
				<TabsTrigger value='employees'>Employees stats</TabsTrigger>
				<TabsTrigger value='teams'>Teams stats</TabsTrigger>
			</TabsList>
			<TabsContent value='employees'>1</TabsContent>
			<TabsContent value='teams'>2</TabsContent>
		</Tabs>
	);
}
