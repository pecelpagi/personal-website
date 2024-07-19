import React from 'react'
import Box from '../components/Box'

const Contact = () => {
  return (
    <Box css={{
      width: '100%',
      overflowX: 'hidden',
      paddingBottom: 100,
      'ul': {
        marginLeft: '0em',
        padding: 0,
        listStyleType: 'none'
      },
      'li': {
        marginBottom: 30,
      }
    }}>
      <h1 className='page-title'>Contact.</h1>
      <ul>
        <li><Box>Mobile:</Box><Box>+6285 731 762 554</Box></li>
        <li><Box>Email: </Box><a href="mailto:galuhrmdh@gmail.com">galuhrmdh@gmail.com</a></li>
        <li><Box>Telegram: </Box><a href="https://t.me/galuhrmdh">t.me/galuhrmdh</a></li>
        <li><Box>LinkedIn:</Box><a href="https://www.linkedin.com/in/galuhrmdh" target='_blank' rel="noreferrer">https://www.linkedin.com/in/galuhrmdh</a></li>
        <li><Box>GitHub:</Box><a href="https://github.com/pecelpagi" target='_blank' rel="noreferrer">https://github.com/pecelpagi</a></li>
        <li><Box>Instagram:</Box><a href="https://www.instagram.com/pecelpagi_" target='_blank' rel="noreferrer">https://www.instagram.com/pecelpagi_</a></li>
        <li><Box>Upwork: </Box>< a href="https://www.upwork.com/freelancers/~0194b57790cf1ccd33" target='_blank' rel="noreferrer">https://www.upwork.com/freelancers/~0194b57790cf1ccd33</a></li>
      </ul>
    </Box>
  )
}

export default Contact