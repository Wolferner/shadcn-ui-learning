import { LightDarkToggle } from '@/components/ui/light-dark-toggle';

type Props = {
	children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
	return (
		<>
			<div className='flex flex-col gap-2 min-h-screen items-center justify-center p-24'>
				{children}
			</div>
			{/* We use -mt-3 because top-1/2 cont 50% from top of to top of icon, because icon is a bit lower than should be. Also we can use top-[calc(50%-12px)], to get needed result */}
			<LightDarkToggle className='fixed top-1/2 right-2 -mt-3' />
		</>
	);
}
