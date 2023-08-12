import TitleH2 from '@/components/ui/TitleH2/TitleH2'
import styles from './FirstSection.module.scss'
import Card1 from '@/components/ui/Card1/Card1'
import CardImgs from './CardImgs/CardImgs'

const FirstSection = () => {
	return (
		<section className={styles.section}>
			<TitleH2 className='text-center mb-20'>
				НЕВЕРОЯТНОЕ ОЩУЩЕНИЕ СВОБОДЫ
			</TitleH2>
			<div className={styles.container}>
				<Card1
					title={'ПОЗВОЛЬТЕ СЕБЕ ПРИКЛЮЧЕНИЕ'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрениям и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.'
					}
				/>
				<CardImgs />
				<Card1
					title={'ВВЕРХ НА 6000 МЕТРОВ НАД УРОВНЕМ МОРЯ'}
					text={
						'Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет.'
					}
				/>
				<a className={styles.btn} href='#'>
					Узнать больше &rarr;
				</a>
			</div>
		</section>
	)
}

export default FirstSection
