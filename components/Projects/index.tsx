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
                projectTitle='Landing Page'
                liveDemoLink='https://embedsocial.netlify.app'
                githubLink='https://github.com/vladislav124352/embed-social'
                technologies={['HTML5/CSS3', 'Tailwind.css', 'Scrolling Reveal']}
                imageUrl='https://s3-alpha.figma.com/hub/file/689115664/afe6a9b1-e778-4484-ac93-6279ec990137-cover.png'
                projectDescription='This is a landing page website from Anzhela Ristovskaya' />

            <Project
                projectTitle='Sei-Ki (in developing)'
                liveDemoLink='https://seiki-frontend.vercel.app'
                githubLink='https://github.com/vladislav124352/sei-ki-frontend'
                technologies={['React', 'Redux Toolkit', 'Next.js', 'TypeScript', 'Chakra UI', 'Jest', 'Testing Library']}
                imageUrl='https://i.ibb.co/Y8sJS8v/1.png'
                projectDescription='This is the social network "Sei-Ki"' />
        </Box>
    )
}
