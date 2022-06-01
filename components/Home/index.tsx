import { AlternateEmail, Facebook, GitHub, LinkedIn, Phone, Telegram } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { Contact } from './Contact';

export const Home = () => {
    return (
        <Box className='home'>
            <Head>
                <title>I am Vladislav Polischuk</title>
            </Head>
            <Typography component='h2'>
                Hi, I&apos;m
            </Typography>

            <Typography className='home_name' component='h1'>
                Vladislav Polischuk
            </Typography>

            <Typography className='home_description' component='h3'>
                Hi everyone, I&apos;m a frontend developer.
                At the moment, I have been studying this area on
                my own for more than a year. I have experience in
                developing both simple ToDo applications and quite
                complex social networks. networks.
                I like to communicate with people,
                develop and solve interesting problems
            </Typography>

            <Box className='contacts'>
                <Contact
                    name='My GitHub profile'
                    href='https://github.com/vladislav124352'>
                    <GitHub />
                </Contact>

                <Contact
                    name='My Facebook profile'
                    href='https://facebook.com/vladislav124352'>
                    <Facebook />
                </Contact>

                <Contact
                    name='My linkedin profile'
                    href='https://www.linkedin.com/in/vladislav-polischuk-a785a522b/'>
                    <LinkedIn />
                </Contact>

                <Contact
                    name='My gmail'
                    href='mailto:vladpolisuk159@gmail.com'>
                    <AlternateEmail />
                </Contact>

                <Contact
                    name='My phone number'
                    href='tel:+79586803972'>
                    <Phone />
                </Contact>
            </Box>
        </Box >
    )
}
