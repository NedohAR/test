import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { Input } from './Input'

const meta: Meta = {
  title: 'Form/Input with React Hook Form',
}

export default meta

interface FormData {
  email: string
  password: string
  username: string
}

const InputFormExample = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data)
    alert(`Form submitted!\n\nData:\n${JSON.stringify(data, null, 2)}`)
  }

  const watchAllFields = watch()

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Registration Form with React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="username"
            style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}
          >
            Username
          </label>
          <Input
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
            })}
            id="username"
            placeholder="Enter username"
            clearable
          />
          {errors.username && (
            <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {errors.username.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}
          >
            Email
          </label>
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            id="email"
            type="email"
            placeholder="Enter email"
            clearable
          />
          {errors.email && (
            <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="password"
            style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}
          >
            Password
          </label>
          <Input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            id="password"
            type="password"
            placeholder="Enter password"
          />
          {errors.password && (
            <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '4px' }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#c4c4c4ff',
            color: '#1f2937',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            ;(e.target as HTMLButtonElement).style.backgroundColor = '#a2a2a2ff'
          }}
          onMouseLeave={(e) => {
            ;(e.target as HTMLButtonElement).style.backgroundColor = '#c4c4c4ff'
          }}
        >
          Submit
        </button>
      </form>

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#f3f4f6',
          borderRadius: '6px',
        }}
      >
        <h3>Form State:</h3>
        <pre style={{ fontSize: '12px', overflow: 'auto' }}>
          {JSON.stringify(watchAllFields, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export const WithValidation: StoryObj = {
  render: () => <InputFormExample />,
}
