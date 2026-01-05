import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'info'],
      description: 'Toast notification type',
    },
    message: {
      control: 'text',
      description: 'Message to display',
    },
    duration: {
      control: 'number',
      description: 'Auto-close duration in milliseconds (0 to disable)',
    },
    closable: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
}

export default meta

const ToastWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(true)

  const getButtonColor = (type: string) => {
    switch (type) {
      case 'success':
        return { bg: '#10b981', bgHover: '#059669' }
      case 'error':
        return { bg: '#ef4444', bgHover: '#dc2626' }
      case 'info':
        return { bg: '#9ca3af', bgHover: '#6b7280' }
      default:
        return { bg: '#9ca3af', bgHover: '#6b7280' }
    }
  }

  const colors = getButtonColor(args.type || 'info')

  return (
    <div style={{ padding: '20px', marginBottom: '20px' }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: colors.bg,
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 600,
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          ;(e.target as HTMLButtonElement).style.backgroundColor =
            colors.bgHover
        }}
        onMouseLeave={(e) => {
          ;(e.target as HTMLButtonElement).style.backgroundColor = colors.bg
        }}
      >
        Show Toast
      </button>
      {isOpen && (
        <div style={{ marginTop: '16px' }}>
          <Toast {...args} onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  )
}

export const Success: StoryObj = {
  render: (args) => <ToastWrapper {...args} />,
  args: {
    message: 'Success! Operation completed.',
    type: 'success',
    closable: true,
    duration: 3000,
  },
}

export const Error: StoryObj = {
  render: (args) => <ToastWrapper {...args} />,
  args: {
    message: 'Error! Something went wrong.',
    type: 'error',
    duration: 5000,
    closable: true,
  },
}

export const Info: StoryObj = {
  render: (args) => <ToastWrapper {...args} />,
  args: {
    message: 'Information: This is an info toast.',
    type: 'info',
    duration: 0,
    closable: true,
  },
}
