import React from 'react'
import Box from '../components/Box'

const blogs = [
  {
    id: '1',
    title: 'Web Storage dan Cookie',
    link: 'https://medium.com/@galuh/web-storage-dan-cookie-a65b702f1542',
    date: 'Feb 24, 2023',
  },
  {
    id: '2',
    title: 'Integrasi Validasi dengan react-hook-form',
    link: 'https://medium.com/@galuh/integrasi-validasi-dengan-react-hook-form-2ffc6b5215b2',
    date: 'May 26, 2022',
  }
]

const Blog = () => {
  return (
    <Box css={{
      paddingBottom: 100,
      '.page-title': {
        marginBottom: 20,
      }
    }}>
      <Box>
        <h1 className='page-title'>Blog.</h1>
        <span>Unfortunately it is only available in Bahasa Indonesia.</span>
      </Box>
      <Box
        css={{
          marginTop: '3em',
          display: 'flex',
          gap: 50,
          flexDirection: 'column',
          'h5': {
            marginBottom: 10,
            fontSize: '1em'
          },
          'a': {
            fontSize: '1.5em'
          }
        }}
      >
        {blogs.map(x => (
          <Box key={x.id}>
            <h5>{x.date}</h5>
            <a href={x.link} target="_blank" rel="noreferrer">{x.title}</a>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Blog