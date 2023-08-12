import Header from '@/components/screens/Home/Header/Header'
import styles from './Home.module.scss'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const Home = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default Home
