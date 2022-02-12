import BoltIcon from '@mui/icons-material/Bolt';
import { Container, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <Box component='header' className='header'>
            <Container maxWidth='lg' className='header-container'>
                <Link href="/">
                    <a className='header_link'>
                        <Typography className='header_me'>
                            me
                        </Typography>
                    </a>
                </Link>
                <List aria-label='list of navigation' className="header_list">
                    <ListItem className="header_list-item">
                        <Link href="/projects">
                            <a aria-label='go to projects' className='header_link'>
                                <BoltIcon className='header_link_icon' />
                                <Typography className='header_link_text'>
                                    projects
                                </Typography>
                            </a>
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Box>
    )
}
