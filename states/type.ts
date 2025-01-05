import { create } from 'zustand'

interface State {
	type: number | undefined
	setType: (type: number) => void
	typeName: string
	setTypeName: (typeName: string) => void
}

export const useCategoryType = create<State>()(set => ({
	type: undefined,
	setType: (type: undefined | number) => set({ type }),
	typeName: 'Все',
	setTypeName: (typeName: string) => set({ typeName }),
}))
