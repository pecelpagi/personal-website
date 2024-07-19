import React from 'react'
import Box from '../components/Box'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box css={{
      paddingBottom: 100,
    }}>
      <h1 className='page-title'>About me.</h1>
      <p>
        👋 Hi. My name is Galuh Muhamad Ramadhan.
      </p>
      <p>
        I've been working in software engineering for more than 7 years. I have good knowledge of frontend and backend.
      </p>
      <p>
        I always try my best when building or developing software, so I always keep my code as tidy as possible and refactor periodically. I prefer to break my code into smaller chunks so it's easier to read. My skillset includes:
      </p>
      <p>
        Programming Languages<br />
        - Java, TypeScript, JavaScript (ES6), SQL, PHP, Python
      </p>
      <p>
        Libraries & Frameworks<br />
        - Spring, Django, React, Redux-Saga, Jest, CodeIgniter, Laravel
      </p>
      <p>
        Tools & Platforms<br />
        - Git, Node.js, Docker, Jenkins, RabbitMQ, Elasticsearch, Kubernetes
      </p>
      <p>
        Databases<br />
        - MySQL, PostgreSQL, Redis
      </p>
      <p>
        I am adaptable and eager to learn new development tools. In my spare time I like to study new technologies and techniques to improve the quality of software.
      </p>
      <p>
        Feel free to <Link to="/contact">contact me</Link> regarding your projects or even just to say hello. Let's keep in touch and make an awesome product!
      </p>
      <Box
        css={{
          display: 'flex',
          gap: 30,
          marginTop: '1.5em',
          flexDirection: 'column',
          'a': {
            width: 'fit-content',
          },
          '@sm': {
            gap: 15,
            flexDirection: 'row'
          }
        }}
      >
        <a href="/document/CV_GALUH.pdf">Download Résumé</a>
        <a href="/document/PORTFOLIO_GALUH.pdf">Download Portfolio</a>
      </Box>
    </Box>
  )
}

export default Home