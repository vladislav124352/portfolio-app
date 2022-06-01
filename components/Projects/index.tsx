import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { Project } from './Project'

export const Projects = () => {
    return (
        <Box className='projects'>
            <Head>
                <title>Projects</title>
            </Head>
            <Project
                projectTitle='Notes App'
                liveDemoLink='https://bestnotes.vercel.app'
                githubLink='https://github.com/vladislav124352/notes-app'
                technologies={['React', 'Redux-Toolkit', 'TypeScript', 'Chakra UI', 'Formik', 'Vercel']}
                imageUrl='https://i.ibb.co/dJsV056/readme-background.png'
                projectDescription='This is a handy note-taking app.' />

            <Project
                projectTitle='Weather App'
                liveDemoLink='https://goweather.vercel.app'
                githubLink='https://github.com/vladislav124352/weather-app'
                technologies={['React', 'Redux', 'TypeScript', 'Tailwind.css', 'Formik']}
                imageUrl='https://user-images.githubusercontent.com/61385848/149000872-bc1b9abc-18ff-4e6d-b35a-45e5aa33eef7.png'
                projectDescription='This is a beautiful weather website.' />

            <Project
                projectTitle='Calendar App'
                liveDemoLink='https://my-calendar-app.vercel.app'
                githubLink='https://github.com/vladislav124352/calendar-app'
                technologies={['React', 'Redux-Toolkit', 'Next.js', 'TypeScript', 'Moment.js', 'Styled Components', 'Vercel']}
                imageUrl='https://i.ibb.co/qdJxhd5/Screenshot-2022-02-10-205325.png'
                projectDescription='This is a simple Calendar App' />

            <Project
                projectTitle='Pacman Game'
                liveDemoLink='https://pacman-game.vercel.app/'
                githubLink='https://github.com/vladislav124352/pacman-game'
                technologies={['HTML5/CSS3', 'Vanilla JS', 'Canvas']}
                imageUrl='https://i.ibb.co/4Zsf8rN/Screenshot-2022-06-01-211411.png'
                projectDescription='This is a simple pacman game' />

            <Project
                projectTitle='Chess Game'
                liveDemoLink='https://my-chess.vercel.app/'
                githubLink='https://github.com/vladislav124352/chess-app'
                technologies={['HTML5/CSS3', 'Vanilla JS', 'jQuery', 'Bootstrap']}
                imageUrl='https://i.ibb.co/mH6frr7/Screenshot-2022-06-01-211427.png'
                projectDescription='This is a simple chess game.' />
        </Box>
    )
}
