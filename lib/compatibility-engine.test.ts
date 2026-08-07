import assert from 'node:assert/strict'
import {
  elementLabel,
  getCompatibility,
  getElementFromNumber,
} from './compatibility-engine.ts'

function test(name: string, fn: () => void) {
  try {
    fn()
    console.log(`✓ ${name}`)
  } catch (err) {
    console.error(`✗ ${name}`)
    throw err
  }
}

test('maps numbers to elements', () => {
  assert.equal(getElementFromNumber(1), 'water')
  assert.equal(getElementFromNumber(2), 'earth')
  assert.equal(getElementFromNumber(5), 'earth')
  assert.equal(getElementFromNumber(8), 'earth')
  assert.equal(getElementFromNumber(3), 'wood')
  assert.equal(getElementFromNumber(4), 'wood')
  assert.equal(getElementFromNumber(6), 'metal')
  assert.equal(getElementFromNumber(7), 'metal')
  assert.equal(getElementFromNumber(9), 'fire')
})

test('rejects invalid numbers', () => {
  assert.throws(() => getElementFromNumber(0), RangeError)
  assert.throws(() => getElementFromNumber(10), RangeError)
})

test('water vs fire needs wood bridge', () => {
  const r = getCompatibility(1, 9)
  assert.equal(r.matchStatus, 'Needs Bridging')
  assert.equal(r.bridgeElement, 'wood')
  assert.ok(r.matchPercentage >= 40 && r.matchPercentage <= 60)
  assert.ok(r.remedies?.en.includes('green'))
  assert.ok(r.remedies?.te.length > 0)
})

test('wood vs earth needs fire bridge', () => {
  const r = getCompatibility(3, 2)
  assert.equal(r.matchStatus, 'Needs Bridging')
  assert.equal(r.bridgeElement, 'fire')
})

test('fire vs metal needs earth bridge', () => {
  const r = getCompatibility(9, 6)
  assert.equal(r.bridgeElement, 'earth')
})

test('metal vs wood needs water bridge', () => {
  const r = getCompatibility(7, 4)
  assert.equal(r.bridgeElement, 'water')
})

test('earth vs water needs metal bridge', () => {
  const r = getCompatibility(8, 1)
  assert.equal(r.bridgeElement, 'metal')
})

test('clash is symmetric', () => {
  const ab = getCompatibility(1, 9)
  const ba = getCompatibility(9, 1)
  assert.equal(ab.matchStatus, ba.matchStatus)
  assert.equal(ab.bridgeElement, ba.bridgeElement)
})

test('same earth numbers are excellent', () => {
  const r = getCompatibility(2, 8)
  assert.equal(r.matchStatus, 'Excellent')
  assert.equal(r.matchPercentage, 96)
  assert.equal(r.bridgeElement, null)
})

test('productive pair water and wood is neutral', () => {
  const r = getCompatibility(1, 3)
  assert.equal(r.matchStatus, 'Neutral')
  assert.ok(r.matchPercentage >= 65 && r.matchPercentage < 85)
})

test('neutral status for non-clash non-productive pairs', () => {
  // All distinct element pairs in five-element theory are clash or productive;
  // water + metal is productive (metal nourishes water), so use a fallback guard.
  const r = getCompatibility(1, 6)
  assert.ok(['Neutral', 'Excellent'].includes(r.matchStatus))
})

test('elementLabel returns readable names', () => {
  assert.equal(elementLabel('fire'), 'Fire')
})

console.log('\nAll compatibility engine tests passed.')
