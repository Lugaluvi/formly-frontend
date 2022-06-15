import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  NumberInputField,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { LayoutAuth } from "../../layouts";
import theme from "../../../theme";

const baseURL = "localhost:8080/";

const StudentForm = () => {
  const [registration, setRegistration] = useState<String>("");
  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [age, setAge] = useState<String>("0");

  const createStudent = () => {
    axios
      .post(baseURL + "/student", {
        registration: registration,
        firstName: firstName,
        lastname: lastName,
        age: age,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <LayoutAuth title="Criar aluno">
      <Flex direction="column">
        <Text fontSize="4xl">Criar aluno</Text>
        <Text color={theme.secondary} mb="2%">
          Preencha as informações abaixo para adicionar o novo aluno.
        </Text>
        <FormControl width="50vw" my="1%">
          <FormLabel htmlFor="registration">Matrícula</FormLabel>
          <Input
            id="registration"
            placeholder="Informe a matrícula"
            value={registration}
            focusBorderColor="primary"
            onChange={(event) => setRegistration(event.target.value)}
          />
        </FormControl>
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
          <FormLabel htmlFor="lastName">Sobrenome</FormLabel>
          <Input
            id="lastName"
            placeholder="Informe o sobrenome"
            value={lastName}
            focusBorderColor="primary"
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormControl>
        <FormControl width="50vw" my="1%">
          <FormLabel htmlFor="age">Idade</FormLabel>
          <NumberInput defaultValue={1} min={1} max={100}>
            <NumberInputField 
              id="age"
              value={age}
              focusBorderColor="primary"
              onChange={(event) => setAge(event.target.value)}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button
          textColor="white"
          width="100px"
          mt="1%"
          bgColor="primary"
          fontWeight="normal"
          onClick={() => createStudent()}
        >
          Concluir
        </Button>
      </Flex>
    </LayoutAuth>
  );
};

export default StudentForm;
