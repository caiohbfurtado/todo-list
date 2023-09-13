import { Check, Trash2 } from 'lucide-react'
import { Button } from './Button'
import styles from './Task.module.css'

export type Props = {
  title: string
  done: boolean
  onChange: () => void
  onDelete: () => void
}

export function Task({ done, title, onChange, onDelete }: Props) {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="done" checked={done} />
      {done ? (
        <div className={styles.checkboxCheck} onClick={onChange}>
          <Check size={12} />
        </div>
      ) : (
        <div className={styles.checkboxUncheck} onClick={onChange} />
      )}
      <label
        htmlFor="done"
        className={done ? styles.titleDone : styles.title}
        onClick={onChange}
      >
        {title}
      </label>

      <Button onClick={onDelete} justIcon icon={Trash2} />
    </div>
  )
}
