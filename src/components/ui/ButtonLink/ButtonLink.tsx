'use client'

import classNames from 'classnames'
import styles from './ButtonLink.module.scss'
import { FC, ReactNode } from 'react'

interface ButtonLinkProps {
	children: ReactNode
	onClick?: () => void
	href?: string
	className?: string
}

const ButtonLink: FC<ButtonLinkProps> = ({
	children,
	onClick,
	href,
	className,
}) => {
	return (
		<a
			href={href}
			onClick={onClick}
			className={classNames(styles.btn, className)}
		>
			{children}
		</a>
	)
}

export default ButtonLink
