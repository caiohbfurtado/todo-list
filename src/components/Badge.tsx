import styles from './Badge.module.css'

type Props = {
  value: string
}

export function Badge({ value }: Props) {
  return <div className={styles.badge}>{value}</div>
}
