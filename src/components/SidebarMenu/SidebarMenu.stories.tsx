import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SidebarMenu } from './SidebarMenu'

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
}

export default meta

export const Nested: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div style={{ position: 'relative', height: '500px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 12px',
            background: '#9ca3af',
            color: '#1f2937',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '24px',
            fontWeight: 500,
            zIndex: 998,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            ;(e.target as HTMLButtonElement).style.background = '#6b7280'
          }}
          onMouseLeave={(e) => {
            ;(e.target as HTMLButtonElement).style.background = '#9ca3af'
          }}
        >
          ☰
        </button>

        <SidebarMenu
          isOpen={open}
          onClose={() => setOpen(false)}
          items={[
            {
              id: '1',
              label: 'Products',
              children: [
                {
                  id: '2',
                  label: 'Phones',
                  children: [{ id: '3', label: 'iPhone' }],
                },
              ],
            },
          ]}
        />
      </div>
    )
  },
}

export const OneLevelMenu: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div style={{ position: 'relative', height: '400px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 12px',
            background: '#9ca3af',
            color: '#1f2937',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '24px',
            fontWeight: 500,
            zIndex: 998,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            ;(e.target as HTMLButtonElement).style.background = '#6b7280'
          }}
          onMouseLeave={(e) => {
            ;(e.target as HTMLButtonElement).style.background = '#9ca3af'
          }}
        >
          ☰
        </button>

        <SidebarMenu
          isOpen={open}
          onClose={() => setOpen(false)}
          items={[
            { id: '1', label: 'Home' },
            { id: '2', label: 'About' },
            { id: '3', label: 'Services' },
            { id: '4', label: 'Contact' },
          ]}
        />
      </div>
    )
  },
}
