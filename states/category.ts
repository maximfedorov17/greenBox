import { create } from 'zustand'

interface State {
	categoryOpen: boolean
	setCategoryOpen: (categoryOpen: boolean) => void
}

export const useCategoryToogle = create<State>()(set => ({
	categoryOpen: false,
	setCategoryOpen: (categoryOpen: boolean) => set({ categoryOpen }),
}))
