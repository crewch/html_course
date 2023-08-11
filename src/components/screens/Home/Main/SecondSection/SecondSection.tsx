import Image from 'next/image'
import styles from './SecondSection.module.scss'
import BalloonsImg from '/public/section-adventure.jpg'
import Card2 from '@/components/ui/Card2/Card2'
import IconCard1 from '/public/IconCard1.svg'
import IconCard2 from '/public/IconCard2.svg'
import IconCard3 from '/public/IconCard3.svg'
import IconCard4 from '/public/IconCard4.svg'

const SecondSection = () => {
	return (
		<section className={styles.section}>
			<Image
				src={BalloonsImg}
				alt='BalloonsImg'
				quality={100}
				fill
				style={{ objectFit: 'cover' }}
			/>
			<div className={styles.container}>
				<Card2
					Img={IconCard4}
					title={'ПРИКЛЮЧЕНИЕ'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных'
					}
				/>
				<Card2
					Img={IconCard3}
					title={'ПРИКЛЮЧЕНИЕ'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных'
					}
				/>
				<Card2
					Img={IconCard1}
					title={'ПРИКЛЮЧЕНИЕ'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных'
					}
				/>
				<Card2
					Img={IconCard2}
					title={'ПРИКЛЮЧЕНИЕ'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных'
					}
				/>
			</div>
		</section>
	)
}

export default SecondSection
