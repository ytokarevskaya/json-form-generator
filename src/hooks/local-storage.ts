import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>

// Get from local storage then parse stored json or return initialValue
function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (parseJSON(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [initialValue, key])

  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValueRef = useRef<SetValue<T>>()

  setValueRef.current = value => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value
      window.localStorage.setItem(key, JSON.stringify(newValue))
      setStoredValue(newValue)
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  }

  const setValue: SetValue<T> = useCallback(
    value => setValueRef.current?.(value),
    [],
  )

  useEffect(() => {
    setStoredValue(readValue())
  }, [readValue])

  return [storedValue, setValue]
}

export default useLocalStorage

function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.warn('JSON parsing error on', { value })
    return undefined
  }
}
