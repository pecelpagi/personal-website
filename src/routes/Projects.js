import React, { Fragment, useState } from 'react'
import Box from '../components/Box'
import PreviewProject from '../components/PreviewProject'

const previewData = {
  dashboard: {
    image: '/document/dashboard.png',
    url: 'https://dashboard.majoo.id'
  },
  cockpit: {
    image: '/document/cockpit.png',
    url: 'https://cockpit.mangkujagat.com'
  },
  simpeg: {
    image: '/document/simpeg.png',
    url: 'https://github.com/pecelpagi/simpeg-client'
  },
  laundria: {
    image: '/document/laundria.png',
    url: 'https://github.com/pecelpagi/laundria-client'
  }
}

const Projects = () => {
  const [currentPreviewData, setCurrentPreviewData] = useState(null);

  const handlePreview = (key) => {
    setCurrentPreviewData(previewData[key]);
  }

  return (
    <Fragment>
      <Box css={{
        paddingBottom: 100,
        '.page-title': {
          marginBottom: 20,
        }
      }}>
        <Box>
          <h1 className='page-title'>Projects.</h1>
          <span>If you would like to see all my projects, please download the documentation in <a href="/document/PORTFOLIO_GALUH.pdf">here</a>.</span>
        </Box>
        <Box
          css={{
            marginTop: '2em',
            display: 'grid',
            gap: 25,
            gridTemplateColumns: '1fr',
            'img.absolute': {
              visibility: 'hidden',
            },
            '@sm': {
              gridTemplateColumns: '1fr 1fr',
            },
            '.project': {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              'h1': {
                padding: 0,
                margin: 0,
                fontSize: '1.25em'
              },
              'span': {
                fontWeight: 'normal',
                flex: '1 1 0px',
              },
              padding: 25,
              border: '1px solid #FFF',
              '.preview': {
                textDecoration: 'none',
                color: '#FFF',
                fontWeight: '600',
                paddingBottom: '0px',
                borderBottom: '2px solid #FFF',
                width: 'fit-content'
              },
              '&:hover': {
                border: '1px solid #FFF',
                background: '#FFF',
                color: '#000',
                cursor: 'pointer',
                '.preview': {
                  background: '#FFF',
                  color: '#000',
                  borderBottom: '2px solid #000',
                }
              },
            }
          }}
        >
          <Box className='project' onClick={() => { handlePreview('dashboard'); }}>
            <h1>Majoo Sales Dashboard Web Application</h1>
            <span>
              A web application that business owners use to monitor their sales. It has been used by thousands of business owners in Indonesia.
            </span>
            <div className='preview'>
              Preview
            </div>
            <img className='absolute' src={previewData.dashboard.image} height={10} />
          </Box>
          <Box className='project' onClick={() => { handlePreview('cockpit'); }}>
            <h1>Majoo Internal Dashboard Web Application</h1>
            <span>
              A web application to monitor majoo users, manage user submissions, and more.
            </span>
            <div className='preview'>
              Preview
            </div>
            <img className='absolute' src={previewData.cockpit.image} height={10} />
          </Box>
          <Box className='project' onClick={() => { handlePreview('laundria'); }}>
            <h1>Laundria</h1>
            <span>
              Web application for laundry management.
            </span>
            <div className='preview'>
              Preview
            </div>
            <img className='absolute' src={previewData.laundria.image} height={10} />
          </Box>
          <Box className='project' onClick={() => { handlePreview('simpeg'); }}>
            <h1>SIMPEG</h1>
            <span>
              Web application for employee management.
            </span>
            <div className='preview'>
              Preview
            </div>
            <img className='absolute' src={previewData.simpeg.image} height={10} />
          </Box>
        </Box>
      </Box>
      {currentPreviewData && <PreviewProject {...{ currentPreviewData }} onClose={() => { setCurrentPreviewData(null); }} />}
    </Fragment>
  )
}

export default Projects