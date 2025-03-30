import React from 'react';
import { Box, Grid } from '@mui/system';
import './InfoComponent.css';

export default function InfoComponent(props) {
    return (
        <Grid container direction="column" alignItems="center" sx={{ mt: 8 }}>
            <Grid item size={12}>
                <Box sx={{ position: 'relative' }}>
                    <img
                        className='News-image-infoComponent'
                        src={props.imageLink}
                        alt={props.imageAltText}
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    />
                    {
                        props.imageCredit && <Box
                            sx={{
                                position: 'absolute',
                                bottom: 8,
                                right: 16,
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: '#fff',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '0.8rem'
                            }}
                        >
                            <a
                                href={props.imageAuthorRef}
                                target='_blank'
                                rel="noreferrer"
                                style={{ color: '#fff', textDecoration: 'none' }}
                            >
                                créditos da imagem: {props.imageCredit}
                            </a>
                        </Box>
                    }
                </Box>
            </Grid>
            <Grid item size={12}>
                <p className='Upper-title'
                >
                    {props.upperTitle}
                </p>
            </Grid>
            <Grid item size={12}>
                <h1 className='Main-title'>
                    {props.title}
                </h1>
            </Grid>
            <Grid item size={12}>
                <p className='Main-paragraph'
                    dangerouslySetInnerHTML={{ __html: props.paragraph }}
                />
            </Grid>
            <Grid item size={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                    {props.newsRefLink &&
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href={props.newsRefLink}
                            className='Ref-button'
                            sx={{
                                background: '#FAFBFF',
                                color: '#2141E3',
                                px: 4
                            }}
                        >
                            fonte
                        </a>
                    }
                </Box>
            </Grid>
        </Grid>
    );
}
