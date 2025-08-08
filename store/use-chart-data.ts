import { create } from "zustand"

interface ChartDataState {
  mismatchCases: number
  otherCases: number
  totalCases: number
  setChartData: (mismatch: number, other: number) => void
}

export const useChartDataStore = create<ChartDataState>((set) => ({
  mismatchCases: 75, // Default value based on image
  otherCases: 25, // Default value based on image
  totalCases: 100,
  setChartData: (mismatch, other) =>
    set({
      mismatchCases: mismatch,
      otherCases: other,
      totalCases: mismatch + other,
    }),
}))
