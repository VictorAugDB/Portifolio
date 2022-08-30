export function createDate(day: number, month: number, year: number): Date {
  return new Date(year, month - 1, day)
}