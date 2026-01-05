import { useEffect } from 'react'
import styles from './Toast.module.css'

export type ToastType = 'success' | 'error' | 'info'

export interface IToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose: () => void
  closable?: boolean
}

export const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  closable,
}: IToastProps) => {
  useEffect(() => {
    if (!duration) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div role="alert" className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      {closable && (
        <button
          aria-label="Close toast"
          onClick={onClose}
          className={styles.close}
        >
          ✕
        </button>
      )}
    </div>
  )
}
