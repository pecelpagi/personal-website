import React from 'react'
import Box from '../components/Box'

const Projects = () => {
  return (
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
          gridTemplateColumns: '1fr 1fr',
          '.project': {
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
            border: '1px solid #d6dbe6',
            '.preview': {
              marginTop: 20,
              border: '2px solid #000',
              padding: '10px 15px',
              borderRadius: 0,
              height: 'fit-content',
              fontSize: 14,
              width: 'fit-content'
            },
            '&:hover': {
              border: '1px solid #000',
              cursor: 'pointer',
              '.preview': {
                background: '#000',
                color: '#FFF',
              }
            },
          }
        }}
      >
        <Box className='project'>
          <h1>Majoo Sales Dashboard Web Application</h1>
          <span>
            A web application that business owners use to monitor their sales. It has been used by thousands of business owners in Indonesia.
          </span>
          <div className='preview'>
            Preview
          </div>
        </Box>
        <Box className='project'>
          <h1>Majoo Internal Dashboard Web Application</h1>
          <span>
            A web application to monitor majoo users, manage user submissions, and more.
          </span>
          <div className='preview'>
            Preview
          </div>
        </Box>
        <Box className='project'>
          <h1>Laundria</h1>
          <span>
            Web application for laundry management.
          </span>
          <div className='preview'>
            Preview
          </div>
        </Box>
        <Box className='project'>
          <h1>SIMPEG</h1>
          <span>
            Web application for employee management.
          </span>
          <div className='preview'>
            Preview
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects