import React from 'react';
import { Box, Grid } from '@mui/system';
import { Button, Typography } from '@mui/material';

import './TitleComponent.css';

export default function TitleComponent(props) {
    return (
        <Grid container direction="column" alignItems="center" spacing={0} sx={{ mt: 8 }}>
            <Grid item size={12}>
                <Typography
                    sx={{
                        fontSize: {
                            md: '1.2rem',
                            lg: '1.4rem'
                        }
                    }}
                    className='Upper-title-titleComponent'
                >
                    {props.upperTitle}
                </Typography>
            </Grid>
            <Grid item size={12}>
                <Typography
                    sx={{
                        fontSize: {
                            xs: '3rem',
                            sm: '4rem',
                            md: '5rem',
                            lg: '6rem'
                        },
                        lineHeight: 1.
                    }}
                    className='Main-title-titleComponent'>
                    {props.title}
                </Typography>
            </Grid>
            <Grid item size={12} alignItems="center">
                <Typography
                    sx={{
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2.2rem'
                        }
                    }}
                    className='Main-subtitle-titleComponent'>
                    {props.subtitle}
                </Typography>
            </Grid>
            <Grid item>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                    {props.mainButtonText && <Button
                        variant="contained"
                        size="large"
                        sx={{
                            background: 'linear-gradient(180deg, #3153FF 0%, #2141E3 100%)',
                            borderColor: 'linear-gradient(180deg, #3153FF 0%, #2141E3 100%)',
                            color: '#FAFBFF',
                            borderRadius: 2,
                            px: 4,
                            fontWeight: "bold"
                        }}
                    >
                        {props.mainButtonText}
                    </Button>
                    }
                    {props.secondaryButtonText &&
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                background: '#FAFBFF',
                                color: '#2141E3',
                                borderColor: '#2141E3',
                                borderRadius: 2,
                                px: 4
                            }}
                        >
                            Veja seus livros cadastrados
                        </Button>
                    }
                </Box>
            </Grid>
        </Grid>
    );
}
