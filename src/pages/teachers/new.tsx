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

export default function TeacherForm() {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [phone, setPhone] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [resumeActivities, setResumeActivities] = useState<String>("");

  const createTeacher = () => {
    axios
      .post(baseURL + "/teacher", {
        firstName: name,
        email: email,
        phone: phone,
        description: description,
        resumeActivities: resumeActivities,
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
      <Flex marginLeft="35%" direction="column">
        <Heading>Cadastro do Professor</Heading>
        <Text>
          Preencha as informações abaixo conforme o cadastro do professor.
        </Text>
        <FormControl width="50vw" my="2%">
          <FormLabel htmlFor="first-name">Nome</FormLabel>
          <Input
            id="first-name"
            placeholder="Nome"
            bg="#fafafafa"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        {/* <FormControl width="50vw" mb="2%">
          <FormLabel htmlFor="login">Login</FormLabel>
          <Input id="login" placeholder="Login" bg="#fafafafa" />
        </FormControl> */}
        <FormControl width="50vw" mb="2%">
          <FormLabel htmlFor="login" mb="2%">
            Telefone
          </FormLabel>
          <InputGroup>
            <InputLeftAddon bg="#ecececf9" />
            <Input
              type="tel"
              placeholder="phone number"
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
        {/* <FormControl width="50vw" mb="2%">
          <FormLabel htmlFor="turma">Turma</FormLabel>
          <Select
            placeholder="Selecione uma turma"
            width="50vw"
            bg="#fafafafa"
          >
            <option value="option1">Turma 1</option>
            <option value="option2">Turma 2</option>
            <option value="option3">Turma 3</option>
          </Select>
        </FormControl> */}
        <Text mb="8px" width="50vw">
          Informações gerais
        </Text>
        <Textarea
          width="50vw"
          placeholder="Here is a sample placeholder"
          bg="#fafafafa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Text mb="8px" width="50vw">
          Complementos e Atividades
        </Text>
        <Textarea
          width="50vw"
          placeholder="Here is a sample placeholder"
          bg="#fafafafa"
          value={resumeActivities}
          onChange={(event) => setResumeActivities(event.target.value)}
        />
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
}
