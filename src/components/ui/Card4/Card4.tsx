import { FC } from 'react'
import styles from './Card4.module.scss'
import Image from 'next/image'

interface Card4Props {
	Img: any
	title: string
	text: string
	name: string
}

const Card4: FC<Card4Props> = ({ Img, text, title, name }) => {
	return (
		<div className={styles.card}>
			<figure className={styles.figure}>
				<Image fill src={Img} alt='' quality={100} className={styles.img} />
				<figcaption className={styles.figcaption}>{name}</figcaption>
			</figure>
			<div className={styles.cardBox}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	)
}

export default Card4
