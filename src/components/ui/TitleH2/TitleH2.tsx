import { FC } from 'react'
import styles from './TitleH2.module.scss'
import classNames from 'classnames'

interface TitleH2Props {
	title: string
	color?: string
	className?: string
}

const TitleH2: FC<TitleH2Props> = ({ title, color, className }) => {
	return (
		<h2
			className={classNames(
				styles.title,
				color ? color : styles.gradient,
				className
			)}
		>
			{title}
		</h2>
	)
}

export default TitleH2
