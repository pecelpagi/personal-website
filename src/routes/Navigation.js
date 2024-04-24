import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import Box from '../components/Box';

const Navigation = () => {
  const location = useLocation();


  return (
    <Box
      css={{
        height: '100%',
        maxWidth: '960px',
        background: '#FFF',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <Box
        css={{
          height: 120,
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: 10,
          alignItems: 'center',
          'ul': {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            height: 'fit-content',
            display: 'flex',
            gap: 20,
            letterSpacing: '0.1em',
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
        <h2>
          galuhrmdh.com
        </h2>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></li>
          <li className={location.pathname === '/blog' ? 'active' : ''}><Link to="/blog">Blog</Link></li>
          <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
        </ul>
      </Box>
      <Outlet />
    </Box>
  )
}

export default Navigation