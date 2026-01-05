import { forwardRef, useState } from 'react'
import styles from './Input.module.css'

export interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  ({ type = 'text', clearable, ...props }, ref) => {
    const [value, setValue] = useState(props.value ?? '')
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type

    return (
      <div className={`${styles.wrapper} ${isFocused ? styles.focused : ''}`}>
        <input
          ref={ref}
          {...props}
          type={inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          className={styles.input}
        />

        {isPassword && (
          <button
            type="button"
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword((v) => !v)}
            className={styles.icon}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '◎' : '◉'}
          </button>
        )}

        {clearable && value && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={() => setValue('')}
            className={`${styles.icon} ${styles.clearIcon}`}
          >
            ✕
          </button>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
