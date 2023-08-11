import styles from './Main.module.scss'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'
import ThirdSection from './ThirdSection/ThirdSection'
import FourthSection from './FourthSection/FourthSection'

const Main = () => {
	return (
		<main className={styles.main}>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
		</main>
	)
}

export default Main
