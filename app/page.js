'use client'

import { useState } from 'react'
import Typewriter from 'typewriter-effect'

export default function Main() {

	const [menu, setMenu] = useState() || false

	return (
		<main className="w-full text-white">
			<header className={`fixed top-0 right-0 left-0 z-50 bg-opacity-10 border-b-2 backdrop-blur-md bg-neutral-700 min-h-max`}>
				<div className='flex flex-row justify-between items-center px-5 w-full h-14'>
					<p className='text-xl'>Luna Light</p>
					<div className='flex flex-row-reverse gap-5 items-center'>
						<div onClick={() => setMenu(!menu)} className='flex flex-col gap-1.5 justify-around w-5 h-max md:hidden'>
							<div className='w-full h-0.5 bg-white' />
							<div className='w-full h-0.5 bg-white' />
							<div className='w-full h-0.5 bg-white' />
						</div>
						<div className={`hidden flex-row-reverse gap-6 justify-end items-end text-lg md:flex`}>
							<a href='#home' onClick={() => setMenu(false)}>
								<button>
									Home
								</button>
							</a>
							<a href='#skills' onClick={() => setMenu(false)}>
								<button>
									Skills
								</button>
							</a>
							<a href='#projects' onClick={() => setMenu(false)}>
								<button>
									Projects
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className={`flex overflow-hidden flex-row justify-end items-start px-5 w-full transition-all md:hidden`} style={{ maxHeight: menu ? '200px' : '0px' }}>
					<div className={`flex flex-col gap-6 justify-end items-end pt-2 pb-5 text-lg h-fit`}>
						<a href='#home' onClick={() => setMenu(false)}>
							<button className='underline underline-offset-8'>
								Home
							</button>
						</a>
						<a href='#skills' onClick={() => setMenu(false)}>
							<button className='underline underline-offset-8'>
								Skills
							</button>
						</a>
						<a href='#projects' onClick={() => setMenu(false)}>
							<button className='underline underline-offset-8'>
								Projects
							</button>
						</a>
					</div>
				</div>
			</header>
			<section
				id="home"
				className="px-8 w-full h-screen"
			>
				<div className="flex justify-center items-center w-full h-screen">
					<div className="flex flex-col gap-4 items-center pb-10 w-full text-center sm:pb-0">
						<p className="text-4xl font-bold">This is Luna Light</p>
						<p className="inline text-2xl italic">
							I'm a <span className='inline-block not-italic'><Typewriter
								options={{
									strings: ['Software developer', 'UI desinger', 'Network expert'],
									autoStart: true,
									loop: true,
								}}
							/></span>
						</p>
					</div>
				</div>
				<div className='flex absolute right-0 bottom-0 left-0 justify-around items-center'>
					<div className='flex flex-row gap-5 py-5'>
						<a href='https://github.com/ThereWasLuna'>
							<button className='px-3 py-1 text-white border-2'>GITHUB</button>
						</a>
						<a href='https://t.me/ThereWasLuna'>
							<button className='px-3 py-1 text-white border-2'>TELEGRAM</button>
						</a>
						<a href='https://twitter.com/ThereWasLuna?s=09'>
							<button className='px-3 py-1 text-white border-2'>TWITTER</button>
						</a>
					</div>
				</div>
			</section>
			<section id='skills' className="px-8 pt-28 w-full min-h-screen md:h-screen">
				<div className='flex justify-center w-full'>
					<p className='text-3xl font-bold'>Skills</p>
				</div>
				<div className='grid grid-cols-1 gap-8 justify-center pt-14 w-full h-full md:grid-cols-2 lg:grid-cols-3'>
					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>Kotlin - 95%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>JAVASCRIPTE - 80%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>JAVA ( I HATE IT ) - 80%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>PYTHON - 50%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>RUBY - 50%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>LINUX - 60%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>REACTJS - 90%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>EXPRESSJS - 70%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>ANDROID STUDIO - 90%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>GIT - 70%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>FIGMA - 70%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>

					<div className='flex flex-col w-full h-20 border-2'>
						<p className='px-4 pt-3'>HTML & CSS - 80%</p>
						<div className='grid grid-cols-10 gap-3 px-4 py-3 w-full h-full'>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='bg-white'></div>
							<div className='border-2'></div>
							<div className='border-2'></div>
						</div>
					</div>
				</div>
			</section>

			<section id='projects' className="px-8 pt-28 w-full h-screen">
				<div className='flex justify-center w-full'>
					<p className='text-3xl font-bold'>Projects</p>
				</div>
				<div className='grid grid-cols-1 gap-8 justify-center py-14 w-full md:grid-cols-2 lg:grid-cols-3'>
					<div className='flex flex-col justify-between px-4 w-full h-40 border-2'>
						<div className='w-full'>
							<p className='pt-3 text-lg font-bold'>ZEN RAT</p>
							<p className='pt-1 line-clamp-2'>
								Advanced and powerful Android device controlling tool with a wide range of features and capabilities
							</p>
						</div>
						<div className='flex justify-between items-center pb-3.5 w-full'>
							<div className='flex flex-row gap-2 pt-1.5'>
								<img className='w-5 aspect-square' src='/star.svg' />
								<p>13</p>
							</div>
							<a href='https://github.com/AbyssalArmy/ZenRat'>
								<button className='px-3 py-1 text-white border-2'>VIEW ON GITHUB</button>
							</a>
						</div>
					</div>

					<div className='flex flex-col justify-between px-4 w-full h-40 border-2'>
						<div className='w-full'>
							<p className='pt-3 text-lg font-bold'>COMPOSE LOCK</p>
							<p className='pt-1 line-clamp-2'>
								Android jetpack compose pattern lock library
							</p>
						</div>
						<div className='flex justify-between items-center pb-3.5 w-full'>
							<div className='flex flex-row gap-2 pt-1.5'>
								<img className='w-5 aspect-square' src='/star.svg' />
								<p>20</p>
							</div>
							<a href='https://github.com/ThereWasLuna/ComposeLock'>
								<button className='px-3 py-1 text-white border-2'>VIEW ON GITHUB</button>
							</a>
						</div>
					</div>

					<div className='flex flex-col justify-between px-4 w-full h-40 border-2'>
						<div className='w-full'>
							<p className='pt-3 text-lg font-bold'>SMS EYE</p>
							<p className='pt-1 line-clamp-2'>
								Sms Eye is a software for spying on Android SMS, every time the victim device receives a new SMS, Sms Eye will forward it to your Telegram bot
							</p>
						</div>
						<div className='flex justify-between items-center pb-3.5 w-full'>
							<div className='flex flex-row gap-2 pt-1.5'>
								<img className='w-5 aspect-square' src='/star.svg' />
								<p>173</p>
							</div>
							<a href='https://github.com/AbyssalArmy/SmsEye'>
								<button className='px-3 py-1 text-white border-2'>VIEW ON GITHUB</button>
							</a>
						</div>
					</div>

					<div className='flex flex-col justify-between px-4 w-full h-40 border-2'>
						<div className='w-full'>
							<p className='pt-3 text-lg font-bold'>GALLERY EYE</p>
							<p className='pt-1 line-clamp-2'>
								Gallery Eye is a software for spying on Android saved photos, after installing Gallery Eye on victim device, Gallery Eye will forward all victim saved photos to your telegram bot
							</p>
						</div>
						<div className='flex justify-between items-center pb-3.5 w-full'>
							<div className='flex flex-row gap-2 pt-1.5'>
								<img className='w-5 aspect-square' src='/star.svg' />
								<p>142</p>
							</div>
							<a href='https://github.com/AbyssalArmy/GalleryEye'>
								<button className='px-3 py-1 text-white border-2'>VIEW ON GITHUB</button>
							</a>
						</div>
					</div>

					<div className='flex flex-col justify-between px-4 w-full h-40 border-2'>
						<div className='w-full'>
							<p className='pt-3 text-lg font-bold'>LOCATION EYE</p>
							<p className='pt-1 line-clamp-2'>
								LocationEye is a powerful Android spyware designed to track a device's location
							</p>
						</div>
						<div className='flex justify-between items-center pb-3.5 w-full'>
							<div className='flex flex-row gap-2 pt-1.5'>
								<img className='w-5 aspect-square' src='/star.svg' />
								<p>4</p>
							</div>
							<a href='https://github.com/AbyssalArmy/LocationEye'>
								<button className='px-3 py-1 text-white border-2'>VIEW ON GITHUB</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}