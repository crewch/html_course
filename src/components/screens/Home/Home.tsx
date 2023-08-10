import Header from '@/components/screens/Home/Header/Header'
import styles from './Home.module.scss'
import Main from './Main/Main'

const Home = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Main />
		</div>
	)
}

export default Home
