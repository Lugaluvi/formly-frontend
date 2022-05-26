import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LayoutMain } from '../layouts';

const Home: NextPage = () => {
  return (
    <LayoutMain title="Login">
      <Flex width="100%" height="100%">
        <Flex
          flex="1"
          height="100%"
          alignItems="center"
          justifyContent="center"
          padding="xl"
        >
          <Flex gridGap="lg" flexDirection="column">
            <Heading as="h1" size="lg">
              Bem-vindo(a), vamos começar?
            </Heading>
            <Flex flexDirection="column" alignItems="center" mt='5vh'>
              <Link href='/CreateTeacher'><Button bgColor='#5A1113' textColor={'white'} variant='solid'>Começar</Button></Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </LayoutMain>
  );
};

export default Home;