import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { LayoutAuth } from "../../layouts";
import theme from "../../../theme";

const baseURL = "localhost:8080/";

const ResponsibleForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");


  const createResponsible = () => {
    axios
      .post(baseURL + "/responsibles", {
        firstName: firstName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <LayoutAuth title="Criar Responsável">
      <Flex direction="column">
        <Text fontSize="4xl">Criar responsável</Text>
        <Text color={theme.secondary} mb="2%">
          Informe os dados para criar o responsável.
        </Text>
        <FormControl width="50vw" my="1%">
          <FormLabel htmlFor="firstName">Nome</FormLabel>
          <Input
            id="firstName"
            placeholder="Informe o nome"
            value={firstName}
            focusBorderColor="primary"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormControl>
        <FormControl width="50vw" my="1%">
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            id="email"
            placeholder="Informe o e-mail"
            value={email}
            focusBorderColor="primary"
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl width="50vw" my="1%">
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            type="password"
            id="password"
            placeholder="Informe a senha"
            value={password}
            focusBorderColor="primary"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <FormControl width="50vw" my="1%">
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <Input
            id="phone"
            placeholder="Informe o telefone"
            value={phone}
            focusBorderColor="primary"
            onChange={(event) => setPhone(event.target.value)}
          />
        </FormControl>
        <Button
          textColor="white"
          width="100px"
          mt="1%"
          bgColor="primary"
          fontWeight="normal"
          onClick={() => createResponsible()}
        >
          Concluir
        </Button>
      </Flex>
    </LayoutAuth>
  );
};

export default ResponsibleForm;
