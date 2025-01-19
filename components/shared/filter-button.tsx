'use client'

import { cn } from '@/lib/utils'
import { useCategoryToogle } from '@/states/category'
import { CircleX, LocateFixed } from 'lucide-react'
import React, { useRef } from 'react'
import { useClickAway } from 'react-use'
import { Button } from '../ui/button'
import { Categories } from './categories'

interface Props {
	className?: string
}

export const FilterButton: React.FC<Props> = ({ className }) => {
	const categoryOpen = useCategoryToogle(state => state.categoryOpen)
	const setCategoryOpen = useCategoryToogle(state => state.setCategoryOpen)
	const ref = useRef(null)
	useClickAway(ref, () => {
		setCategoryOpen(false)
	})
	return (
		<>
			{categoryOpen && (
				<div className='fixed top-0 left-0  h-screen w-screen bg-black/15 z-20' />
			)}
			<div ref={ref} className={cn('relative z-20 flex gap-6', className)}>
				<Button
					onClick={() => setCategoryOpen(!categoryOpen)}
					className=' flex items-center gap-1'
				>
					{!categoryOpen ? <LocateFixed /> : <CircleX />}

					<span className='font-semibold'>Поиск по категориям</span>
				</Button>

				<Categories />
			</div>
		</>
	)
}
