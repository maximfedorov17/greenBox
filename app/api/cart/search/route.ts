import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''

	const cart = await prisma.cart.findMany({
		where: {
			name: {
				contains: query,
				mode: 'insensitive',
			},
		},
		take: 6,
	})

	return NextResponse.json(cart)
}
