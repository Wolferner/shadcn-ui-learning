'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
	children: React.ReactNode;
	href: string;
}

export default function MenuItem({ children, href }: MenuItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			className={cn(
				'block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground ',
				isActive &&
					'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground text-foreground'
			)}
			href={href}
		>
			{children}
		</Link>
	);
}