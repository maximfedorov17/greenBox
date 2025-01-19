'use client'
import { cn } from '@/lib/utils'
import { Api } from '@/services/api-client'
import { Cart } from '@prisma/client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useClickAway, useDebounce } from 'react-use'
import { Input } from '../ui/input'
interface Props {
	classname?: string
}

export const SearchInput: React.FC<Props> = ({ classname }) => {
	const [focus, setFocus] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [searchItems, setSearchItems] = useState<Cart[]>([])
	const ref = useRef(null)
	useClickAway(ref, () => {
		setFocus(false)
	})
	useDebounce(
		() => {
			Api.cart.search(searchValue).then(item => setSearchItems(item))
		},
		150,
		[searchValue]
	)

	return (
		<>
			{focus && (
				<div className='fixed top-0 left-0  h-screen w-screen bg-black/15 z-30' />
			)}
			<div ref={ref} className={cn('relative w-1/2', classname)}>
				<Input
					onFocus={() => setFocus(true)}
					className='z-20 relative w-full border border-gray-300 bg-white py-2 px-4 text-sm text-gray-900 focus:z-50 focus:border-primary focus:ring-primary'
					placeholder='Поиск'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
				/>
				{focus && searchItems.length > 0 && (
					<div className='absolute top-12 w-full  z-50  rounded-md border border-gray-300 bg-white py-2 shadow-md'>
						{searchItems.map(item => (
							<Link href={`/cart/${item.id}`} key={item.id}>
								<div
									onClick={() => setFocus(false)}
									className='cursor-pointer px-4 py-2 hover:bg-gray-100'
								>
									{item.name}
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
