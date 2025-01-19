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
				name: 'Транспорт',
			},
			{
				name: 'Одежда',
			},
			{
				name: 'Электроника',
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
			{
				name: 'Футболки',
				categoryId: 2,
			},
			{
				name: 'Кофты',
				categoryId: 2,
			},
			{
				name: 'Штаны',
				categoryId: 2,
			},
			{
				name: 'Куртки',
				categoryId: 2,
			},
			{
				name: 'Телефоны',
				categoryId: 3,
			},
			{
				name: 'Планшеты',
				categoryId: 3,
			},
			{
				name: 'Ноутбуки',
				categoryId: 3,
			},
			{
				name: 'Компьютеры',
				categoryId: 3,
			},
			{
				name: 'Зарядные устройства',
				categoryId: 3,
			},
		],
	})

	await prisma.cart.createMany({
		data: [
			{
				name: 'Грузовик',
				description: 'Большой грузовик',
				price: 1000,
				typeId: 1,
			},
			{
				name: 'Лодка',
				description: 'Простая лодка',
				price: 1000,
				typeId: 2,
			},
			{
				name: 'Мотоцикл',
				description: 'Простой мотоцикл',
				price: 1000,
				typeId: 3,
			},
			{
				name: 'Машина',
				description: 'Простая машина',
				price: 1000,
				typeId: 4,
			},
			{
				name: 'Футболка',
				description: 'Простая футболка',
				price: 1000,
				typeId: 5,
			},
			{
				name: 'Кофта',
				description: 'Простая кофта',
				price: 1000,
				typeId: 6,
			},
			{
				name: 'Штаны',
				description: 'Простые штаны',
				price: 1000,
				typeId: 7,
			},
			{
				name: 'Куртка',
				description: 'Простая куртка',
				price: 1000,
				typeId: 8,
			},
			{
				name: 'Телефон',
				description: 'Простой телефон',
				price: 1000,
				typeId: 9,
			},
			{
				name: 'Планшет',
				description: 'Простой планшет',
				price: 1000,
				typeId: 10,
			},
			{
				name: 'Ноутбук',
				description: 'Простой ноутбук',
				price: 1000,
				typeId: 11,
			},
			{
				name: 'Компьютер',
				description: 'Простой компьютер',
				price: 1000,
				typeId: 12,
			},
			{
				name: 'Зарядка',
				description: 'Простая зарядка',
				price: 1000,
				typeId: 13,
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
