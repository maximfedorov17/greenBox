import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
	await prisma.user.createMany({
		data: [
			{
				telegramm_conection: 'Alena3228',
				password: '123456',
			},
			{
				telegramm_conection: 'Maksim3228',
				password: '123456',
			},
		],
	})

	await prisma.categories.createMany({
		data: [
			{
				name: 'Автомобили',
			},
			{
				name: 'Квартиры',
			},
		],
	})

	await prisma.types.createMany({
		data: [
			{
				name: 'Грузовые',
				categoryId: 1,
			},
			{
				name: 'Лодки',
				categoryId: 1,
			},
			{
				name: 'Мотоциклы',
				categoryId: 1,
			},
			{
				name: 'Автомобили',
				categoryId: 1,
			},
		],
	})

	await prisma.cart.createMany({
		data: [
			{
				name: 'Грузовик',
				description: 'вфцвфцвыфвфцвфцвыфвцфвфцв',
				price: 1000,
				typeId: 1,
			},
			{
				name: 'Лодка',
				description: 'вфцвфцвыфвфцвфцвыфвцфвфцв',
				price: 1000,
				typeId: 2,
			},
		],
	})
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
