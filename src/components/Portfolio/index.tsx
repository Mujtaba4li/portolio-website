import './style.css'

import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'

import { baseURL } from '@api'
import arrow from '@assets/icons/Group 48840.svg'
import portfolio1 from '@assets/Image 2.png'
import portfolio2 from '@assets/Image 7.png'
import portfolio3 from '@assets/Image.png'
import portfolio4 from '@assets/Image3.png'

interface IPortfolio {}
const dummyItems = [
	{ id: 1, image: portfolio1 },
	{ id: 2, image: portfolio2 },
	{ id: 3, image: portfolio3 },
	{ id: 4, image: portfolio4 },
]
const Portfolio: FC<IPortfolio> = () => {
	const [portfolioItems, setportfolioItems] = useState(dummyItems)
	useEffect(() => {
		axios
			.get(`${baseURL}/api/images`)
			.then(response => {
				const items = response.data
				console.log(items)
				setportfolioItems(items)
			})
			.catch(error => {
				console.error('Error fetching images:', error)
			})
	}, [])

	return (
		<div className='relative flex flex-col mt-20 py-10 mx-5 bg-slate-100 px-8 md:mx-20'>
			<div className='absolute top-0 right-0 bg-white border-gray-600 border-2 rounded-full pt-4 pb-4 pl-5 pr-5 rotate-45 -mt-10 hidden md:block '>
				<img src={arrow} alt='Arrow Image' className='rotate-180' />
			</div>
			<div className='flex justify-between custom-style'>
				<h1 className='text-4xl w-full md:w-1/3 font-bold'>Explore what we have done</h1>
				<p className='text-xl w-full md:w-1/2'>
					Learn how Moosh Digital can empower you to make smarter, personalized decisions,
					streamline operations, and improve the customer experience.
				</p>
			</div>
			<div className='mt-10 grid-container'>
				{portfolioItems.map((item, index) => (
					<div key={`${item.id ? item.id : item}`} className='grid-item'>
						{/* <img src={item.image} alt='Portfolio Image' className='w-full' /> */}
						<img
							src={`${baseURL}/api/image/${item}`}
							alt='Portfolio Image'
							className='w-full'
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Portfolio
