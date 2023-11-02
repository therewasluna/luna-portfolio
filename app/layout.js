import { Silkscreen as Font } from 'next/font/google'
import './globals.css'

const font = Font({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
	title: 'Luna light',
	description: 'Luna Light portfolio',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ scrollBehavior: 'smooth' }}>
			<body className={`${font.className} bg-neutral-900`}>
				<div className='fixed top-0 right-0 bottom-0 left-0 opacity-50 -z-30' style={{ background: 'url(/bg.gif)' }}></div>
				{children}
			</body>
		</html>
	)
}
