import { FC } from 'react'
import styles from './Card1.module.scss'

interface Card1Props {
	title: string
	text: string
}

const Card1: FC<Card1Props> = ({ title, text }) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Card1
