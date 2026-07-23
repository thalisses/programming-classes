import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'curso-prog-progress'

function loadProgress(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(loadProgress)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
    } catch {
      // localStorage not available — silently ignore
    }
  }, [completed])

  const markCompleted = useCallback((id: string) => {
    setCompleted((prev) => new Set([...prev, id]))
  }, [])

  const isCompleted = useCallback(
    (id: string) => completed.has(id),
    [completed],
  )

  return { isCompleted, markCompleted, completedCount: completed.size }
}
