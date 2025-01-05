import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
	const categories = await prisma.categories.findMany({
		include: {
			types: true,
		},
	})
	return NextResponse.json(categories)
}
