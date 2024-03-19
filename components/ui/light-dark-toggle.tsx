'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './tooltip';

interface LightDarkToggleProps {
	className?: string;
}

export function LightDarkToggle({ className }: LightDarkToggleProps) {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const modeHandler = () => {
		setIsDarkMode(prev => !prev);
		document.body.classList.toggle('dark');
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className={className} onClick={modeHandler}>
					{isDarkMode ? <MoonIcon /> : <SunIcon />}
				</TooltipTrigger>
				<TooltipContent>
					{isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
