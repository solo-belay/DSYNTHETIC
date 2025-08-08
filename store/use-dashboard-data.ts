import { create } from "zustand"
import type { PerformanceMetric } from "@/types/dashboard"

interface DashboardDataState {
  performanceMetrics: PerformanceMetric[]
  setPerformanceMetrics: (metrics: PerformanceMetric[]) => void
}

export const useDashboardDataStore = create<DashboardDataState>((set) => ({
  performanceMetrics: [
    {
      rank: "#1",
      model: "LLM1",
      accuracy: "87.3%",
      responseTime: "0.00s",
      hallucination: "87.3%",
      date: "2024-01-19",
      pdfTitle: "final.pdf",
      mismatchQA: 10,
      answeredQA: 10,
    },
    {
      rank: "#2",
      model: "LLM3",
      accuracy: "87.3%",
      responseTime: "0.00s",
      hallucination: "87.3%",
      date: "2024-01-19",
      pdfTitle: "final.pdf",
      mismatchQA: 10,
      answeredQA: 10,
    },
    {
      rank: "#3",
      model: "LLM2",
      accuracy: "87.3%",
      responseTime: "0.00s",
      hallucination: "87.3%",
      date: "2024-01-19",
      pdfTitle: "final.pdf",
      mismatchQA: 10,
      answeredQA: 10,
    },
  ],
  setPerformanceMetrics: (metrics) => set({ performanceMetrics: metrics }),
}))
