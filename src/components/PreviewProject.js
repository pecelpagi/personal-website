import React from 'react'
import Box from './Box'
import { Cross2Icon } from '@radix-ui/react-icons'

const PreviewProject = ({ currentPreviewData, onClose }) => {
    return (
        <Box
            css={{
                position: 'fixed',
                top: 0,
                zIndex: 2,
                background: '#000000ab',
                left: 0,
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#000',
                    maxWidth: '95%',
                    width: `${window.innerHeight}px`,
                    'a': {
                        border: 0,
                        padding: 0,
                    }
                }}
            >
                <Box
                    css={{
                        padding: '0 15px',
                        display: 'grid',
                        gap: 10,
                        gridTemplateColumns: '1fr auto',
                        'button': {
                            background: 'transparent',
                            outline: 'none',
                            boxShadow: 'none',
                            border: 0,
                            color: '#000',
                            cursor: 'pointer'
                        },
                    }}>
                    <h5>Please click on the image below to visit.</h5>
                    <button type="button" onClick={onClose}><Cross2Icon color='#FFF' height={36} width={36} /></button>
                </Box>
                <a style={{ background: '#212121', border: 0, padding: 0 }} href={currentPreviewData.url} target="_blank" rel="noreferrer"><img alt="project preview" src={currentPreviewData.image} style={{ width: '100%' }} /></a>
            </Box>
        </Box>
    )
}

export default PreviewProject