'use client'

import { cn } from '@/lib/utils'
import { Api } from '@/services/api-client'
import { CategoriesTypes } from '@/services/categories'
import { useCategoryToogle } from '@/states/category'
import { useCategoryType } from '@/states/type'

import { ListX } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

interface Props {
	classname?: string
}

export const Categories: React.FC<Props> = ({ classname }) => {
	const [showTypes, setShowTypes] = React.useState<null | string>(null)
	const showTypesToggle = (cat: string) => {
		if (showTypes === cat) {
			setShowTypes(null)
		} else {
			setShowTypes(cat)
		}
	}
	const [categories, setCategories] = React.useState<CategoriesTypes[]>([])
	React.useEffect(() => {
		async function fetchCategories() {
			try {
				const categories = await Api.categories.getAll()
				setCategories(categories)
			} catch (error) {
				console.log(error)
			}
		}

		fetchCategories()
	}, [])

	const typeCarts = useCategoryType(state => state.setType)
	const typeName = useCategoryType(state => state.setTypeName)
	const categoryOpen = useCategoryToogle(state => state.categoryOpen)
	const setCategoryOpen = useCategoryToogle(state => state.setCategoryOpen)

	function typeClick(id: number, name: string) {
		typeCarts(id)
		typeName(name)
		setCategoryOpen(false)
	}
	function removeFiltersClick() {
		typeCarts(0)
		typeName('Все')
		setCategoryOpen(false)
	}
	return (
		<>
			{categoryOpen && (
				<div
					className={cn(
						'w-[85%] z-10 absolute top-0 right-0 bg-white p-4 rounded-sm flex justify-between',
						classname
					)}
				>
					<div className='flex flex-col'>
						{categories.map(category => (
							<div key={category.name} className='flex items-center gap-4'>
								<button
									className='text-lg  hover:underline font-medium'
									onClick={() => showTypesToggle(category.name)}
								>
									{category.name}
								</button>

								{showTypes === category.name && (
									<div className='flex gap-2 '>
										{category.types.map(type => (
											<button
												className='text-base transition-all hover:text-green-600'
												onClick={() => typeClick(type.id, type.name)}
												key={type.id}
											>
												{type.name}
											</button>
										))}
									</div>
								)}
							</div>
						))}
					</div>
					<Button
						variant={'outline'}
						onClick={() => removeFiltersClick()}
						className=' flex items-center gap-1'
					>
						<ListX />
						<span className='font-semibold'>Сбросить фильтры</span>
					</Button>
				</div>
			)}
		</>
	)
}
