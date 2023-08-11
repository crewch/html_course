import { FC } from 'react'
import styles from './Card3.module.scss'
import classNames from 'classnames'
import ButtonLink from '../ButtonLink/ButtonLink'
import Image from 'next/image'

interface Card3Props {
	Img: any
	title: string
	text: string
	price: string
}

const Card3: FC<Card3Props> = ({ Img, price, text, title }) => {
	return (
		<div className={styles.card}>
			<div className={classNames(styles.side, styles.sideFace)}>
				<div className={styles.bg} />
				<Image src={Img} alt='Img' quality={100} className={styles.img} />
				<div className={styles.container}>
					<h4 className={styles.title}>
						<span className={styles.span}>{title.split(' ')[0]}</span>
						<br />
						<span className={classNames(styles.span, styles.span2)}>
							{title.split(' ')[1]}
						</span>
					</h4>
				</div>
				<ul className={styles.list}>
					{text.split('.').map(string => (
						<li key={string} className={styles.listItem}>
							{string}
						</li>
					))}
				</ul>
			</div>
			<div className={classNames(styles.side, styles.sideBack)}>
				<h3 className={styles.title}>ПОЛНАЯ СТОИМОСТЬ:</h3>
				<p className={styles.price}>{price}</p>
				<ButtonLink href='#'>ЗАБРОНИРОВАТЬ</ButtonLink>
			</div>
		</div>
	)
}

export default Card3
