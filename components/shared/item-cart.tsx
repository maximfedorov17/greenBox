'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface Props {
	className?: string
	name: string
	description: string
	price: number
	id: number
}

export const ItemCart: React.FC<Props> = ({
	className,
	name,
	description,
	price,
	id,
}) => {
	return (
		<>
			<div
				className={cn(
					'max-w-sm bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-1',
					className
				)}
			>
				<div className='w-full h-48 bg-green-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden'>
					<svg
						className='w-32 h-32'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z'
							stroke='#2ecc71'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
				<h2 className='text-2xl font-bold text-gray-800 mb-2'>{name}</h2>
				<p className='text-gray-600 text-sm leading-relaxed mb-4'>
					{description}
				</p>
				<div className='text-2xl font-bold text-green-500 mb-4'>{price} ₽</div>
				<Link href={`/cart/${id}`}>
					<button className='w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300'>
						Посмотреть обьявление
					</button>
				</Link>
			</div>
		</>
	)
}
