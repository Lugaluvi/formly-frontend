import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Link,
    Text,
    Textarea,
  } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Logo } from "../../components/Logo";
import { LayoutMain } from '../../layouts';

const baseURL = "localhost:8080/";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Login = () => {
    axios
      .post(baseURL + "/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
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
          <Flex gridGap="lg" alignItems="center" flexDirection="column">
          <Flex justifyContent="center" alignItems="center" paddingY={1}>
            <Logo />
            <Heading as="h1" size="xl" color="#5A1113">
              Form-ly
            </Heading>
          </Flex>
            <Heading as="h1" size="md">
              Bem-vindo(a), vamos começar?
            </Heading>
            <Flex flexDirection="column" alignItems="center" mt='5vh'>
              <FormControl width="20vw" my="2%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  id="email"
                  placeholder="E-mail"
                  bg="#fafafafa"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
              <FormControl width="20vw" my="2%">
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  bg="#fafafafa"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
              <Link href='/teachers/new'>        
                <Button textColor="white"
                variant="solid"
                width="90px"
                my="15px"
                bgColor="#5A1113"
                onClick={() => Login()}>
                  Continuar
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </LayoutMain>

  );
};

export default LoginForm;