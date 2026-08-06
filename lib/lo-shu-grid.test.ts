import assert from 'node:assert/strict'
import {
  allDobDigits,
  calculateConductorNumber,
  calculateDriverNumber,
  calculateLoShuGrid,
  formatCellDigits,
  nonZeroDobDigits,
  parseDobString,
  reduceToSingleDigit,
  sumDigitsOfInteger,
} from './lo-shu-grid.ts'

function test(name: string, fn: () => void) {
  try {
    fn()
    console.log(`✓ ${name}`)
  } catch (err) {
    console.error(`✗ ${name}`)
    throw err
  }
}

test('reduceToSingleDigit reduces multi-digit sums', () => {
  assert.equal(reduceToSingleDigit(10), 1)
  assert.equal(reduceToSingleDigit(33), 6)
  assert.equal(reduceToSingleDigit(29), 2)
})

test('sumDigitsOfInteger', () => {
  assert.equal(sumDigitsOfInteger(28), 10)
  assert.equal(sumDigitsOfInteger(10), 1)
})

test('parseDobString accepts valid DD-MM-YYYY', () => {
  assert.deepEqual(parseDobString('28-05-1971'), { day: 28, month: 5, year: 1971 })
  assert.deepEqual(parseDobString('01-01-2000'), { day: 1, month: 1, year: 2000 })
})

test('parseDobString rejects invalid dates', () => {
  assert.equal(parseDobString('31-02-2000'), null)
  assert.equal(parseDobString('32-01-2000'), null)
  assert.equal(parseDobString('1-1-2000'), null)
  assert.equal(parseDobString(''), null)
})

test('driver number for day 28 is 1', () => {
  assert.equal(calculateDriverNumber(28), 1)
})

test('driver number for day 10 is 1', () => {
  assert.equal(calculateDriverNumber(10), 1)
})

test('driver number for day 29 is 2', () => {
  assert.equal(calculateDriverNumber(29), 2)
})

test('driver number for day 5 is 5', () => {
  assert.equal(calculateDriverNumber(5), 5)
})

test('conductor for 28-05-1971 is 6', () => {
  const dob = { day: 28, month: 5, year: 1971 }
  assert.deepEqual(allDobDigits(dob), [2, 8, 0, 5, 1, 9, 7, 1])
  assert.deepEqual(nonZeroDobDigits(dob), [2, 8, 5, 1, 9, 7, 1])
  assert.equal(calculateConductorNumber(dob), 6)
})

test('conductor for 10-01-2000 is 4', () => {
  const dob = { day: 10, month: 1, year: 2000 }
  assert.equal(calculateConductorNumber(dob), 4)
})

test('full grid for 28-05-1971 matches spec', () => {
  const result = calculateLoShuGrid({ day: 28, month: 5, year: 1971 })
  assert.equal(result.driverNumber, 1)
  assert.equal(result.conductorNumber, 6)
  assert.deepEqual(result.finalDigits, [2, 8, 5, 1, 9, 7, 1, 1, 6])
  assert.equal(result.counts[1], 3)
  assert.equal(result.counts[2], 1)
  assert.equal(result.counts[3], 0)
  assert.equal(result.cells[1], '1 1 1')
  assert.equal(result.cells[9], '9')
  assert.equal(result.cells[3], '')
  assert.deepEqual(result.missingNumbers, [3, 4])
})

test('formatCellDigits spaces repeated digits', () => {
  assert.equal(formatCellDigits(1, 2), '1 1')
  assert.equal(formatCellDigits(7, 0), '')
})

test('day 09 reduces driver correctly', () => {
  assert.equal(calculateDriverNumber(9), 9)
  assert.equal(calculateDriverNumber(18), 9)
})

console.log('\nAll Lo Shu grid tests passed.')
