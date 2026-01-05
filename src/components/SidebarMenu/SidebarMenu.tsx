import styles from './SidebarMenu.module.css'
import { useState } from 'react'

export interface IMenuItem {
  id: string
  label: string
  children?: IMenuItem[]
}

interface SidebarMenuProps {
  isOpen: boolean
  items: IMenuItem[]
  onClose: () => void
}

export const SidebarMenu = ({ isOpen, items, onClose }: SidebarMenuProps) => {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Close menu"
          title="Close menu"
        >
          ✕
        </button>
        <nav>
          {items.map((item) => (
            <MenuItemNode key={item.id} item={item} />
          ))}
        </nav>
      </aside>
    </>
  )
}

const MenuItemNode = ({ item }: { item: IMenuItem }) => {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children?.length

  return (
    <div>
      <div
        className={styles.item}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {item.label}
        {hasChildren && <span>{open ? '−' : '+'}</span>}
      </div>

      {hasChildren && open && (
        <div className={styles.children}>
          {item.children!.map((child) => (
            <MenuItemNode key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}
