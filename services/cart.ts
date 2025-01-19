import { Cart } from '@prisma/client'
import { axiosInstance } from './axios-req'

export const getAll = async (): Promise<Cart[]> => {
	return (await axiosInstance.get<Cart[]>('/cart')).data
}

export const search = async (query: string): Promise<Cart[]> => {
	return (
		await axiosInstance.get<Cart[]>(`/cart/search`, { params: { query } })
	).data
}
