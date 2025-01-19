import { Container } from '@/components/shared/container'
import { Button } from '@/components/ui/button'

import { prisma } from '@/lib/db'
import { Cart } from '@prisma/client'
import { Send, X } from 'lucide-react'
import Link from 'next/link'

export default async function Page({
	params: { id },
}: {
	params: { id: string }
}) {
	const cart: Cart = await prisma.cart.findFirst({
		where: { id: Number(id) },
	})

	return (
		<>
			<Container className='mt-4 flex '>
				<div className='w-3/5 h-28 flex flex-col'>
					<div className='w-[42px] h-[42px]'>
						<Link href={'/'}>
							<X
								size={42}
								color='#000000'
								strokeWidth={1}
								className='cursor-pointer'
							/>
						</Link>
					</div>
					<div className='w-full flex items-center mt-4 ml-10'>
						<h1 className='text-4xl font-bold '>{cart.name}</h1>
					</div>
					<div className='w-full flex items-center justify-center'></div>
				</div>

				<div className='w-2/5 h-28 flex flex-col'>
					<div className='w-full flex items-center justify-end mt-14  '>
						<h1 className='text-5xl font-bold mr-10 text-green-600'>
							{cart.price} ₽
						</h1>
					</div>
					<div className='w-full flex items-center justify-start mt-10'>
						<Button className=' text-2xl h-16'>
							Написать продавцу в телеграм
							<Send className='ml-2' />
						</Button>
					</div>
					<div className='w-full flex flex-col  justify-start mt-10'>
						<h1 className='text-3xl font-bold '>Описание:</h1>
						<p className='ml-4 text-xl'>{cart.description}</p>
					</div>
				</div>
			</Container>
		</>
	)
}
