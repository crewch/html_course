import TitleH2 from '@/components/ui/TitleH2/TitleH2'
import styles from './ThirdSection.module.scss'
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink'
import Card3 from '@/components/ui/Card3/Card3'
import CardImg4 from '/public/cardImg4.jpg'
import CardImg5 from '/public/cardImg5.jpg'
import CardImg6 from '/public/cardImg6.jpg'

const ThirdSection = () => {
	return (
		<section className={styles.section}>
			<TitleH2 className='text-center mb-20'>НАИБОЛЕЕ ПОПУЛЯРНЫЕ ТУРЫ</TitleH2>
			<div className={styles.container}>
				<Card3
					Img={CardImg4}
					title={'ГРУППОВЫЕ ТУРЫ'}
					text={
						'Группы от 6 человек.Продолжительность 2 час.В группе 1 гид.Дальность полета 6км.Бесплатные сувениры'
					}
					price='5990₽'
				/>
				<Card3
					Img={CardImg5}
					title={'ЧАСТНЫЕ ТУРЫ'}
					text={
						'Группы от 6 человек.Продолжительность 2 час.В группе 1 гид.Дальность полета 6км.Бесплатные сувениры'
					}
					price='5990₽'
				/>
				<Card3
					Img={CardImg6}
					title={'СМОТРОВЫЕ ПЛОЩАДКИ'}
					text={
						'Группы от 6 человек.Продолжительность 2 час.В группе 1 гид.Дальность полета 6км.Бесплатные сувениры'
					}
					price='5990₽'
				/>
			</div>
			<ButtonLink href='#' className='shadow-lg'>
				ЗАБРОНИРОВАТЬ
			</ButtonLink>
		</section>
	)
}

export default ThirdSection
