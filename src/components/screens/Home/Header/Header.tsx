import styles from './Header.module.scss'
import Image from 'next/image'
import HeaderImg from '/public/header-background.jpg'
import IconLogo from '/public/Icon-logo.svg'
import ButtonLink from '@/components/ui/ButtonLink'

const Header = () => {
	return (
		<header className={styles.header}>
			<Image
				src={HeaderImg}
				alt='Balloons'
				priority
				quality={100}
				fill
				style={{
					objectFit: 'cover',
				}}
			/>
			<div className={styles.container}>
				<Image
					src={IconLogo}
					alt='Balloon'
					priority
					quality={100}
					className={styles.logo}
				/>
				<div className={styles.container_title}>
					<h1 className={styles.container_title_first}>
						<span className={styles.title_first_main}>
							ТУРЫ НА ВОЗДУШНОМ ШАРЕ
						</span>
						<span className={styles.title_first_secondary}>
							незабываемое приключение ждет вас
						</span>
					</h1>
					<ButtonLink href='#' className={styles.btn_animated}>
						НАШ КАТАЛОГ
					</ButtonLink>
				</div>
			</div>
		</header>
	)
}

export default Header
