import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { LayoutAuth } from "../../layouts";

const baseURL = "localhost:8080/";

const TeacherForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const createTeacher = () => {
    axios
      .post(baseURL + "/teacher", {
        name: name,
        email: email,
        phone: phone
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <LayoutAuth title="Cadastrar professor">
      <Flex direction="column">
        <Heading>Cadastro do Professor</Heading>
        <Text>
          Preencha as informações abaixo conforme o cadastro do professor.
        </Text>
        <FormControl width="50vw" my="2%">
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            placeholder="Nome"
            bg="#fafafafa"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl width="50vw" mb="2%">
          <FormLabel htmlFor="login" mb="2%">
            Telefone
          </FormLabel>
          <InputGroup>
            <Input
              type="tel"
              placeholder="Informe o telefone"
              bg="#fafafafa"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl width="50vw" mb="2%">
          <FormLabel htmlFor="login">Email</FormLabel>
          <Input
            id="login"
            placeholder="Email"
            bg="#fafafafa"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <Button
          textColor="white"
          variant="solid"
          width="80px"
          my="15px"
          bgColor="#5A1113"
          onClick={() => createTeacher()}
        >
          Concluir
        </Button>
      </Flex>
    </LayoutAuth>
  );
};

export default TeacherForm;
