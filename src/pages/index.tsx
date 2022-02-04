import type { NextPage } from 'next'

import Link from 'next/link';


import { 
  Navigate,
  Container
 } from './styles';


const Home: NextPage = () => {



  return (
    <Container>
      <Link href="/characters">
        <Navigate>Personagens</Navigate>
      </Link>
    </Container>
  )
}

export default Home
