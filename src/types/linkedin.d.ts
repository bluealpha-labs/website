export {}

declare global {
  interface Window {
    lintrk?: (action: string, payload: Record<string, unknown>) => void
  }
}
