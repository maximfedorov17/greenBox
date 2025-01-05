'use client'
import { cn } from '@/lib/utils'
import { Api } from '@/services/api-client'
import { useCategoryType } from '@/states/type'
import { Cart } from '@prisma/client'
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Container } from './container'
import { ItemCart } from './item-cart'

interface Props {
	classname?: string
}

export const CartContainer: React.FC<Props> = ({ classname }) => {
	const [carts, setCarts] = React.useState<Cart[]>([])
	const [isLoading, setIsLoading] = React.useState(true)
	React.useEffect(() => {
		async function fetchCarts() {
			try {
				const carts = await Api.cart.getAll()
				setCarts(carts)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchCarts()
	}, [])

	const types = useCategoryType(state => state.type)
	return (
		<>
			{isLoading && (
				<Container className={cn('mt-4 grid grid-cols-4 gap-4', classname)}>
					{Array.from({ length: 20 }).map((_, index) => (
						<Skeleton key={index} className='h-[200px] w-full' />
					))}
				</Container>
			)}
			<Container className={cn('mt-4 grid grid-cols-4 gap-4', classname)}>
				{carts.map(item =>
					types
						? item.typeId === types && (
								<ItemCart
									key={item.id}
									name={item.name}
									description={item.description}
									price={item.price}
								/>
						  )
						: !types && (
								<ItemCart
									key={item.id}
									name={item.name}
									description={item.description}
									price={item.price}
								/>
						  )
				)}
			</Container>
		</>
	)
}
