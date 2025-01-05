import { Categories, Types } from '@prisma/client'
import { axiosInstance } from './axios-req'

export type CategoriesTypes = Categories & {
	types: Types[]
}
export const getAll = async (): Promise<CategoriesTypes[]> => {
	return (await axiosInstance.get<CategoriesTypes[]>('/categories')).data
}
