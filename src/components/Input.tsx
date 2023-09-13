import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {}

export function Input({ ...rest }: Props) {
  return <input type="text" className={styles.input} {...rest} />
}
