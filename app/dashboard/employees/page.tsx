import data from '@/employees-data';
import { setTimeout } from 'timers/promises';

export default async function EmployeesPage() {
	await setTimeout(5000);
	return <div>Employees</div>;
}
