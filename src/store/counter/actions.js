import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const setStep = createAction('SETSTEP')

// console.log([increment])

// console.log(setStep(100))

// const address = 'Address-1'

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	[address]: 'qwrety',
// }
