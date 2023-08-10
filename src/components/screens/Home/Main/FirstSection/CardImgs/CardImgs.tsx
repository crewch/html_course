import Image from 'next/image'
import styles from './CardImgs.module.scss'
import CardImg1 from '/public/cardImg1.svg'
import CardImg2 from '/public/cardImg2.svg'
import CardImg3 from '/public/cardImg3.svg'
import classNames from 'classnames'

const CardImgs = () => {
	return (
		<div className={styles.composition}>
			<Image
				src={CardImg1}
				alt={'CardImg1'}
				quality={100}
				className={classNames(styles.photo, styles.photo_1)}
			/>
			<Image
				src={CardImg2}
				alt={'CardImg2'}
				quality={100}
				className={classNames(styles.photo, styles.photo_2)}
			/>
			<Image
				src={CardImg3}
				alt={'CardImg3'}
				quality={100}
				className={classNames(styles.photo, styles.photo_3)}
			/>
		</div>
	)
}

export default CardImgs
