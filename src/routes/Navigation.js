import React, { Fragment, useState } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Link, Outlet, useLocation } from 'react-router-dom';
import Box from '../components/Box';
import MobileMenu from '../components/MobileMenu';

const scrollToTop = () => {
  window.scrollTo(0, 0);
}

const Navigation = () => {
  const [isShowingMobileMenu, setShowingMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <Fragment>
      <Box
        css={{
          height: '100%',
          padding: '0 30px',
          paddingTop: 120,
          position: 'relative',
          margin: '0 auto',
          '@sm': {
            display: 'flex',
            maxWidth: '700px',
          },
        }}
      >
        <Box
          css={{
            top: 0,
            left: 0,
            position: 'fixed',
            width: '100%',
            height: 120,
            display: 'flex',
            zIndex: 1,
            justifyContent: 'center',
            '.nav-container': {
              background: '#000',
              width: '100%',
              maxWidth: '700px',
              display: 'grid',
              gridTemplateColumns: '1fr auto auto',
              gap: 10,
              alignItems: 'center',
            },
            '.logo': {
              marginLeft: 30,
              fontWeight: 700,
              '@lg': {
                marginLeft: 0
              }
            },
            'button': {
              background: 'transparent',
              outline: 'none',
              boxShadow: 'none',
              border: 0,
              marginRight: 10,
              color: '#000',
              '@sm': {
                display: 'none',
              },
            },
            'ul': {
              display: 'none',
              listStyleType: 'none',
              margin: '0',
              padding: '0',
              height: 'fit-content',
              gap: 20,
              letterSpacing: '0.1em',
              '@sm': {
                display: 'flex',
              },
              'li': {
                'a': {
                  fontWeight: 600,
                  borderBottom: 0,
                  paddingBottom: 5,
                }
              },
              'li.active': {
                'a': {
                  borderBottom: '2px solid #FFF'
                }
              }
            }
          }}
        >
          <Box
            className='nav-container'
          >
            <h2 className='logo'>
              galuhrmdh.com
            </h2>
            <ul>
              <li className={location.pathname === '/' ? 'active' : ''}><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects" onClick={scrollToTop}>Projects</Link></li>
              <li className={location.pathname === '/blog' ? 'active' : ''}><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
              <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
            <button type="button" onClick={() => { setShowingMobileMenu(true); }}><HamburgerMenuIcon color="#FFF" height={36} width={36} /></button>
          </Box>
        </Box>
        <Outlet />
      </Box>
      {isShowingMobileMenu && <MobileMenu onClick={() => { setShowingMobileMenu(false); }} {...{ scrollToTop }} />}
    </Fragment>
  )
}

export default Navigation