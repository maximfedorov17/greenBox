import { Cart } from '@prisma/client'
import { axiosInstance } from './axios-req'

export const getAll = async (): Promise<Cart[]> => {
	return (await axiosInstance.get<Cart[]>('/cart')).data
}

// export const getOne = async (id: number): Promise<Cart> => {
// 	return (await axiosInstance.get<Cart>(`/cart/${id}`)).data}
