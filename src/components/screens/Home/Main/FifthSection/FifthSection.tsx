import Image from 'next/image'
import styles from './FifthSection.module.scss'
import BgImg from '/public/bg-form.jpg'
import TitleH2 from '@/components/ui/TitleH2/TitleH2'
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink'

const FifthSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<Image src={BgImg} alt='' quality={100} fill className={styles.bgImg} />
				<div className={styles.bgGradient} />
				<div className={styles.box}>
					<TitleH2 className='pointer-events-none mb-[1.875rem]'>
						ЗАБРОНИРОВАТЬ ТУР
					</TitleH2>
					<form action={'#'} className={styles.form}>
						<div className={styles.formGroup}>
							<input
								type='text'
								placeholder='Имя Фамилия'
								required
								id='formName'
								className={styles.input}
							/>
							<label htmlFor='formName' className={styles.label}>
								Ваше имя и фамилия
							</label>
						</div>
						<div className={styles.formGroup}>
							<input
								type='email'
								placeholder='Ваш почтовый email'
								required
								id='formEmail'
								className={styles.input}
							/>
							<label htmlFor='formEmail' className={styles.label}>
								Ваш почтовый email
							</label>
						</div>
						<div className={styles.radioGroup}>
							<div className={styles.radioField}>
								<input
									type='radio'
									id='radio1'
									name='radio'
									className={styles.radio}
								/>
								<label htmlFor='radio1' className={styles.labelRadio}>
									<span className={styles.btnRadio} />
									Групповой тур
								</label>
							</div>
							<div className={styles.radioField}>
								<input
									type='radio'
									id='radio2'
									name='radio'
									className={styles.radio}
								/>
								<label htmlFor='radio2' className={styles.labelRadio}>
									<span className={styles.btnRadio} />
									Индивидуальный тур
								</label>
							</div>
						</div>
						<ButtonLink href='#' className={styles.btn}>
							ЗАБРОНИРОВАТЬ
						</ButtonLink>
					</form>
				</div>
			</div>
		</section>
	)
}

export default FifthSection
