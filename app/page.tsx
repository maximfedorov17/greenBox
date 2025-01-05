import { CartContainer } from '@/components/shared/cart-container'
import { Container } from '@/components/shared/container'
import { FilterButton } from '@/components/shared/filter-button'
import { TypeName } from '@/components/shared/type-name'

export default function Home() {
	return (
		<>
			<Container className='mt-4'>
				<FilterButton />
				<TypeName classname='mt-14' />

				<CartContainer classname='mt-4' />
			</Container>
		</>
	)
}
