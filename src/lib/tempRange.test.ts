import { expect, describe, test } from 'vitest'
import { Day } from '../vite-env'
import tempRange from './tempRange'

describe("Temperature Range", () => {

	test("Just one day, the range is its min and max temp", () => {

		const input = [
			{ temperatureMax: 90, temperatureMin: 20 } as Day
		]

		const expected = { min: 20, max: 90 }

		expect(expected).toEqual(tempRange(input))

	})
	
	test("Multiple days, the properly calculate the range", () => {

		const input = [
			{ temperatureMax: 60, temperatureMin: 20 } as Day,
			{ temperatureMax: 90, temperatureMin: 10 } as Day,
			{ temperatureMax: 70, temperatureMin: 30 } as Day,
		]

		const expected = { min: 10, max: 90 }

		expect(expected).toEqual(tempRange(input))

	})
	
	test("No days, fallback to min and max safe values", () => {

		const input:Day[] = []

		const expected = { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER }

		expect(expected).toEqual(tempRange(input))

	})


})