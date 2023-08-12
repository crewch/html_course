import TitleH2 from '@/components/ui/TitleH2/TitleH2'
import styles from './FourthSection.module.scss'
import Card4 from '@/components/ui/Card4/Card4'
import feedBackImg1 from '/public/feedBack-1.jpg'
import feedBackImg2 from '/public/feedBack-2.jpg'
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink'

const FourthSection = () => {
	return (
		<section className={styles.section}>
			<video className={styles.video} autoPlay muted loop>
				<source src='/HotAirBalloons.mp4' />
				<source src='/HotAirBalloons.webm' />
			</video>
			<div className={styles.bg} />
			<TitleH2 color='text-white' className='relative pt-20 text-center mb-20'>
				ОТЗЫВЫ НАШИХ КЛИЕНТОВ
			</TitleH2>
			<div className={styles.cards}>
				<Card4
					Img={feedBackImg2}
					title={'Я ПОЛУЧИЛ МАССУ ВПЕЧАТЛЕНИЙ'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.'
					}
					name='АНТОН РЯБИН'
				/>
				<Card4
					Img={feedBackImg1}
					title={'ЭТО БЫЛО ВЕЛИКОЛЕПНО И НЕЗАБЫВАЕМО'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.'
					}
					name='ЛИЗА ФРОЛОВА'
				/>
				<ButtonLink href='#'>ЗАБРОНИРОВАТЬ</ButtonLink>
			</div>
		</section>
	)
}

export default FourthSection
