'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
	name: string
	description: string
	price: number
}

export const ItemCart: React.FC<Props> = ({
	className,
	name,
	description,
	price,
}) => {
	return (
		<>
			<div
				className={cn(
					'w-full h-full flex flex-col gap-4 border border-green-600 rounded-md p-4',
					className
				)}
			>
				<h1 className='text-2xl font-bold'>{name}</h1>
				<h2 className='text-lg'>{description}</h2>
				<h3 className='text-2xl text-green-600 font-bold'>{price}</h3>
			</div>
		</>
	)
}
