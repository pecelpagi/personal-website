import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Cross2Icon } from '@radix-ui/react-icons'
import Box from './Box'

const MobileMenu = ({ onClick, scrollToTop }) => {
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    
        return () => {
            document.body.style.overflow = 'auto';
        }
    });

    const handleClickMenu = () => {
        scrollToTop();
        onClick();
    }

    return (
        <Box
            css={{
                top: 0,
                left: 0,
                zIndex: 2,
                position: 'fixed',
                width: '100%',
                height: '100%',
                background: '#000',
                display: 'flex',
                flexDirection: 'column',
                'button': {
                    background: 'transparent',
                    outline: 'none',
                    boxShadow: 'none',
                    border: 0,
                    color: '#000'
                },
                'ul': {
                    display: 'flex',
                    flexDirection: 'column',
                    listStyleType: 'none',
                    margin: '0',
                    padding: '0',
                    gap: 20,
                    letterSpacing: '0.1em',
                    height: '100%',
                    justifyContent: 'center',
                    'li': {
                        'a': {
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            borderBottom: 0,
                            paddingBottom: 5,
                        }
                    },
                    'li.active': {
                        'a': {
                            borderBottom: '2px solid #000'
                        }
                    }
                }
            }}
        >
            <Box
                css={{
                    textAlign: 'right',
                    marginRight: 10,
                    paddingTop: 20,
                }}
            >
                <button type="button" onClick={onClick}><Cross2Icon color="#FFF" height={36} width={36} /></button>
            </Box>
            <Box
                css={{
                    textAlign: 'center',
                    flex: '1 1 auto',
                    alignSelf: 'center',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}><Link to="/" onClick={handleClickMenu}>Home</Link></li>
                    <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects" onClick={handleClickMenu}>Projects</Link></li>
                    <li className={location.pathname === '/blog' ? 'active' : ''}><Link to="/blog" onClick={handleClickMenu}>Blog</Link></li>
                    <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact" onClick={handleClickMenu}>Contact</Link></li>
                </ul>
            </Box>
        </Box>
    )
}

export default MobileMenu