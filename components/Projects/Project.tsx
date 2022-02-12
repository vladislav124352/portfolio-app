import { Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { Technology } from './Technology';

interface Props {
    imageUrl: string;
    projectTitle: string;
    projectDescription: string;
    githubLink: string;
    liveDemoLink: string;
    technologies: string[];
}

export const Project: FC<Props> = ({
    imageUrl,
    projectTitle,
    projectDescription,
    githubLink,
    liveDemoLink,
    technologies
}) => {
    return (
        <Card sx={{ backgroundColor: '#090909', color: 'white', marginBottom: '20px' }}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt="project image" />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {projectTitle}
                </Typography>

                <Typography marginBottom='10px' variant="body2" color="#ffffff96">
                    {projectDescription}
                </Typography>

                <Box className='technologies'>
                    {technologies.map((technology: string) => {
                        return (
                            <Technology key={`${technology}_${Math.random()}`}>
                                {technology}
                            </Technology>
                        )
                    })}
                </Box>
            </CardContent>

            <CardActions sx={{ padding: '15px' }}>
                <Link
                    target='_blank'
                    sx={{ padding: '5px' }}
                    aria-label={`${projectTitle} source code`}
                    href={githubLink}>
                    GitHub
                </Link>

                <Link
                    target='_blank'
                    sx={{ padding: '5px' }}
                    aria-label={`${projectTitle} live demo`}
                    href={liveDemoLink}>
                    Live demo
                </Link>
            </CardActions>
        </Card>
    )
}
