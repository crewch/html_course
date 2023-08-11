import { FC } from 'react'
import styles from './Card2.module.scss'
import Image from 'next/image'

interface Card2Props {
	Img: any
	title: string
	text: string
}

const Card2: FC<Card2Props> = ({ Img, text, title }) => {
	return (
		<div className={styles.card}>
			<Image src={Img} alt='icon' className={styles.img} quality={100} />
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Card2
