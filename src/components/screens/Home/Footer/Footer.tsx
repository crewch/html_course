import Image from 'next/image'
import styles from './Footer.module.scss'
import BalloonImg from '/public/Icon-logo.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<a href='#'>
					<Image
						src={BalloonImg}
						alt=''
						quality={100}
						className={styles.img}
						width={120}
						height={150}
						style={{
							width: '10%',
							height: 'auto',
						}}
					/>
				</a>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<a href='#'>О НАС</a>
						</li>
						<li className={styles.listItem}>
							<a href='#'>СКИДКИ</a>
						</li>
						<li className={styles.listItem}>
							<a href='#'>ЛУЧШИЕ ТУРЫ</a>
						</li>
						<li className={styles.listItem}>
							<a href='#'>КАЛЬКУЛЯТОР ЦЕНЫ</a>
						</li>
						<li className={styles.listItem}>
							<a href='#'>СВЯЗАТЬСЯ С НАМИ</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
