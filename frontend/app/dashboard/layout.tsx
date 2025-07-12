'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function WithNavLayout({ children }: { children: ReactNode }) {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const pathname = usePathname();
	return (
		<div className="min-h-screen flex">
			{/* Left Navigation Menu */}
			<nav className={`bg-zinc-100 dark:bg-zinc-900 p-6 transition-all duration-300 overflow-hidden ${isCollapsed ? 'w-20' : 'w-64'}`}>
				<div className="flex items-center justify-between mb-6">
					{!isCollapsed && (
						<h2 className="text-xl font-bold whitespace-nowrap text-zinc-800 dark:text-zinc-100">Menu</h2>
					)}
					<button 
						onClick={() => setIsCollapsed(prev => !prev)}
						className="text-zinc-800 dark:text-zinc-100 focus:outline-none"
					>
						{isCollapsed ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						)}
					</button>
				</div>
				{!isCollapsed && (
					<ul className="space-y-2">
						<li>
							<Link href="/dashboard">
								<span className={`block px-3 py-2 rounded cursor-pointer whitespace-nowrap ${pathname === '/dashboard' ? 'bg-blue-500 text-white' : 'text-zinc-800 dark:text-zinc-100 hover:bg-blue-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-100'}`}>
									Dashboard
								</span>
							</Link>
						</li>
						<li>
							<Link href="/dashboard/connect-bank">
								<span className={`block px-3 py-2 rounded cursor-pointer whitespace-nowrap ${pathname === '/dashboard/connect-bank' ? 'bg-blue-500 text-white' : 'text-zinc-800 dark:text-zinc-100 hover:bg-blue-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-100'}`}>
									Connect Bank (Plaid)
								</span>
							</Link>
						</li>
						<li>
							<Link href="/dashboard/manage-account">
								<span className={`block px-3 py-2 rounded cursor-pointer whitespace-nowrap ${pathname === '/dashboard/manage-account' ? 'bg-blue-500 text-white' : 'text-zinc-800 dark:text-zinc-100 hover:bg-blue-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-100'}`}>
									Manage Account
								</span>
							</Link>
						</li>
					</ul>
				)}
			</nav>
			{/* Main Content */}
			<div className="flex-1 p-8 bg-white dark:bg-zinc-800">
				{children}
			</div>
		</div>
	);
}
