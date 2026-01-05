import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  args: {
    placeholder: 'Type here...',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'date'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
  },
}
export default meta

export const Text: StoryObj = {}
export const Password: StoryObj = {
  args: { type: 'password' },
}
export const Email: StoryObj = {
  args: { type: 'email', placeholder: 'Enter your email' },
}
export const Clearable: StoryObj = {
  args: { clearable: true, placeholder: 'This input is clearable' },
}
export const Disabled: StoryObj = {
  args: { disabled: true, placeholder: 'This input is disabled' },
}
