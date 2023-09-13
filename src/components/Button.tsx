import { ButtonHTMLAttributes } from 'react'
import { LucideIcon } from 'lucide-react'

import styles from './Button.module.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string
  icon?: LucideIcon
  justIcon?: boolean
}

export function Button({
  title,
  icon: Icon,
  justIcon = false,
  ...rest
}: Props) {
  return (
    <button className={justIcon ? styles.buttonIcon : styles.button} {...rest}>
      {title && title}
      {Icon && <Icon size={16} />}
    </button>
  )
}
