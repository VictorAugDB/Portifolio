export function calculatePeriodInMonths(startDateISO: string, endDateISO: string): number {
  const startDate = new Date(startDateISO)
  const endDate = new Date(endDateISO)
  
  return (endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear()))
}