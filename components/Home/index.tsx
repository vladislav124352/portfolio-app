import { AlternateEmail, Facebook, GitHub, LinkedIn, Phone, Telegram } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Contact } from './Contact';

export const Home = () => {
    return (
        <Box marginTop='100px'>
            <Box className='home'>
                <Typography component='h2'>
                    Hi, I&apos;m
                </Typography>
                <Typography className='home_name' component='h1'>
                    Vlad Polishchuk
                </Typography>
                <Typography className='home_description' component='h3'>
                    I'm a Front-End developer from Russia, Belgorod city.
                    I have been studying it for over a year and during this time
                    I have gained hands-on experience with many development tools,
                    the main one being React.js. I like complex tasks, so if you have it - write to me.
                    In addition, I study psychology and management.
                </Typography>
                <Box sx={{ margin: '20px', display: 'flex' }}>
                    <Contact name='My GitHub profile' href='https://github.com/vladislav124352'>
                        <GitHub />
                    </Contact>
                    <Contact name='My Facebook profile' href='https://facebook.com/vladislav124352'>
                        <Facebook />
                    </Contact>
                    <Contact name='My Telegram profile' href='https://t.me/vladislav124352'>
                        <Telegram />
                    </Contact>
                    <Contact name='My linkedin profile' href='https://www.linkedin.com/in/vladislav-polishchuk-a785a522b/'>
                        <LinkedIn />
                    </Contact>
                    <Contact name='My gmail' href='mailto:vladpolisuk159@gmail.com'>
                        <AlternateEmail />
                    </Contact>
                    <Contact name='My phone number' href='tel:+79586803972'>
                        <Phone />
                    </Contact>
                </Box>
            </Box>
        </Box >
    )
}