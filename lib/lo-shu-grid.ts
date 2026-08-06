/** Standard Lo Shu magic square layout (rows left-to-right, top-to-bottom). */
export const LO_SHU_LAYOUT: readonly (readonly number[])[] = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
] as const

export type DobParts = { day: number; month: number; year: number }

export type LoShuGridResult = {
  dob: DobParts
  driverNumber: number
  conductorNumber: number
  /** Digits from DOB with zeros removed. */
  dobDigits: number[]
  /** DOB digits (no zeros) + driver + conductor. */
  finalDigits: number[]
  /** Occurrence count for digits 1–9. */
  counts: Record<number, number>
  /** Cell display strings keyed by grid digit (1–9). */
  cells: Record<number, string>
  missingNumbers: number[]
}

/** Reduce a positive integer to a single digit 1–9 (or 0 only when input is 0). */
export function reduceToSingleDigit(value: number): number {
  if (!Number.isFinite(value) || value < 0) {
    throw new RangeError('value must be a non-negative finite number')
  }
  if (value === 0) return 0
  let n = Math.floor(value)
  while (n > 9) {
    n = String(n)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0)
  }
  return n
}

/** Sum decimal digits of a non-negative integer. */
export function sumDigitsOfInteger(value: number): number {
  return String(Math.abs(Math.floor(value)))
    .split('')
    .reduce((sum, d) => sum + Number(d), 0)
}

/** Parse DD-MM-YYYY; returns null when invalid or not a real calendar date. */
export function parseDobString(value: string): DobParts | null {
  const trimmed = value.trim()
  const match = trimmed.match(/^(\d{2})-(\d{2})-(\d{4})$/)
  if (!match) return null

  const day = Number(match[1])
  const month = Number(match[2])
  const year = Number(match[3])

  if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1900 || year > 2100) {
    return null
  }

  const date = new Date(year, month - 1, day)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null
  }

  return { day, month, year }
}

/** All individual digits from DOB in DDMMYYYY form (zeros included). */
export function allDobDigits(dob: DobParts): number[] {
  const dd = String(dob.day).padStart(2, '0')
  const mm = String(dob.month).padStart(2, '0')
  const yyyy = String(dob.year)
  return [...`${dd}${mm}${yyyy}`].map((d) => Number(d))
}

/** DOB digits with zeros removed. */
export function nonZeroDobDigits(dob: DobParts): number[] {
  return allDobDigits(dob).filter((d) => d !== 0)
}

/** Driver (Mulank): reduce summed digits of the birth day. */
export function calculateDriverNumber(day: number): number {
  return reduceToSingleDigit(sumDigitsOfInteger(day))
}

/** Conductor (Bhagyank): reduce summed digits of the full DOB (zeros included). */
export function calculateConductorNumber(dob: DobParts): number {
  const total = allDobDigits(dob).reduce((sum, d) => sum + d, 0)
  return reduceToSingleDigit(total)
}

/** Format repeated digits for a grid cell, e.g. three 1s → "1 1 1". */
export function formatCellDigits(digit: number, count: number): string {
  if (count <= 0) return ''
  return Array.from({ length: count }, () => String(digit)).join(' ')
}

/** Build occurrence counts for digits 1–9 from the final digit pool. */
export function buildDigitCounts(digits: number[]): Record<number, number> {
  const counts: Record<number, number> = {}
  for (let d = 1; d <= 9; d++) counts[d] = 0
  for (const digit of digits) {
    if (digit >= 1 && digit <= 9) counts[digit] += 1
  }
  return counts
}

/** Full Lo Shu grid calculation from parsed DOB parts. */
export function calculateLoShuGrid(dob: DobParts): LoShuGridResult {
  const dobDigits = nonZeroDobDigits(dob)
  const driverNumber = calculateDriverNumber(dob.day)
  const conductorNumber = calculateConductorNumber(dob)
  const finalDigits = [...dobDigits, driverNumber, conductorNumber]
  const counts = buildDigitCounts(finalDigits)

  const cells: Record<number, string> = {}
  const missingNumbers: number[] = []
  for (let d = 1; d <= 9; d++) {
    cells[d] = formatCellDigits(d, counts[d])
    if (counts[d] === 0) missingNumbers.push(d)
  }

  return {
    dob,
    driverNumber,
    conductorNumber,
    dobDigits,
    finalDigits,
    counts,
    cells,
    missingNumbers,
  }
}

export function formatDob(parts: DobParts): string {
  const dd = String(parts.day).padStart(2, '0')
  const mm = String(parts.month).padStart(2, '0')
  return `${dd}-${mm}-${parts.year}`
}
