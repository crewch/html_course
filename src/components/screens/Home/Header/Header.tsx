import styles from './Header.module.scss'
import Image from 'next/image'
import HeaderImg from '/public/header-background.jpg'
import IconLogo from '/public/Icon-logo.svg'
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.navigation}>
				<input type='checkbox' id='navMenu' className={styles.checkbox} />
				<label htmlFor='navMenu' className={styles.label}>
					<span className={styles.icon}></span>
				</label>
				<div className={styles.navBg}></div>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<a href='#' className={styles.link}>
								О НАС
							</a>
						</li>
						<li className={styles.listItem}>
							<a href='#' className={styles.link}>
								СКИДКИ
							</a>
						</li>
						<li className={styles.listItem}>
							<a href='#' className={styles.link}>
								ЛУЧШИЕ ТУРЫ
							</a>
						</li>
						<li className={styles.listItem}>
							<a href='#' className={styles.link}>
								КАЛЬКУЛЯТОР ЦЕНЫ
							</a>
						</li>
						<li className={styles.listItem}>
							<a href='#' className={styles.link}>
								СВЯЗАТЬСЯ С НАМИ
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<Image
				src={HeaderImg}
				alt='Balloons'
				priority
				quality={100}
				fill
				style={{
					objectFit: 'cover',
				}}
				className={styles.bgImg}
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
