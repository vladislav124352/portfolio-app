import { Link } from '@mui/material'
import React, { FC } from 'react'

interface Props {
    name: string;
    href: string;
}

export const Contact: FC<Props> = ({ name, href, children }) => {
    return (
        <Link
            marginRight='10px'
            target='_blank'
            aria-label={name}
            href={href}>
            {children}
        </Link>
    )
}
