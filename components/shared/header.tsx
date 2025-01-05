import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Container } from './container'

interface Props {
	classname?: string
}

export const Header: React.FC<Props> = ({ classname }) => {
	const userRegCheck = true
	return (
		<div className={cn('border border-b border-green-600 z-50', classname)}>
			<Container className='flex items-center justify-between py-4'>
				<div className='flex items-center gap-4'>
					<h1 className='text-5xl font-bold text-green-600'>GreenBox</h1>
				</div>

				<div className='w-1/2'>
					<Input />
				</div>

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
