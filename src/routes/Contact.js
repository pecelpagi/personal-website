import React from 'react'
import Box from '../components/Box'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Box css={{
      paddingBottom: 100,
      'ul': {
        marginLeft: '1em',
        padding: 0,
      },
      'li': {
        marginBottom: 30,
        fontSize: 14,
        '@sm': {
          fontSize: 18,
        }
      }
    }}>
      <h1 className='page-title'>Contact.</h1>
      <ul>
        <li><Box>Mobile:</Box><Box>+6285 731 762 554</Box></li>
        <li><Box>Email: </Box><a href="mailto:galuhrmdh@gmail.com">galuhrmdh@gmail.com</a></li>
        <li><Box>LinkedIn:</Box><a href="https://www.linkedin.com/in/galuhrmdh" target='_blank' rel="noreferrer">https://www.linkedin.com/in/galuhrmdh</a></li>
        <li><Box>GitHub:</Box><a href="https://github.com/pecelpagi" target='_blank' rel="noreferrer">https://github.com/pecelpagi</a></li>
        <li><Box>Instagram:</Box><a href="https://www.instagram.com/pecelpagi_" target='_blank' rel="noreferrer">https://www.instagram.com/pecelpagi_</a></li>
        <li><Box>Strava:</Box><a href="https://www.strava.com/athletes/125012491" target='_blank' rel="noreferrer">https://www.strava.com/athletes/125012491</a></li>
      </ul>
    </Box>
  )
}

export default Contact