import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Container } from './container'
import { SearchInput } from './search-input'

interface Props {
	classname?: string
}

export const Header: React.FC<Props> = ({ classname }) => {
	const userRegCheck = true
	return (
		<div className={cn('border border-b border-green-600 z-50', classname)}>
			<Container className='flex items-center justify-between py-4'>
				<div className='flex items-center gap-4'>
					<Link href={'/'}>
						<h1 className='cursor-pointer text-5xl font-bold text-green-600'>
							GreenBox
						</h1>
					</Link>
				</div>

				<SearchInput />

				{!userRegCheck ? (
					<div className='flex items-center gap-6'>
						<Button className='font-semibold' variant='outline'>
							Регистрация
						</Button>
						<Button className='font-semibold'>Вход</Button>
					</div>
				) : (
					<div className='flex items-center gap-6'>
						<Button className='flex items-center gap-1' variant='outline'>
							<User />
							<span className='font-semibold'>Имя юзера</span>
						</Button>
						<Button className='font-semibold'>Разместить обьявление</Button>
					</div>
				)}
			</Container>
		</div>
	)
}
