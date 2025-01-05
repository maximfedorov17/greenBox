'use client'

import { cn } from '@/lib/utils'
import { useCategoryType } from '@/states/type'

import React from 'react'

interface Props {
	classname?: string
}

export const TypeName: React.FC<Props> = ({ classname }) => {
	const typeName = useCategoryType(state => state.typeName)

	return (
		<>
			<div className={cn('font-bold text-4xl', classname)}>{typeName}</div>
		</>
	)
}
