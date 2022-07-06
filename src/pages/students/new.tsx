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
  const [registration, setRegistration] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("0");

  const createStudent = () => {
    axios
      .post(baseURL + "/student", {
        registration: registration,
        name: name,
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
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            placeholder="Informe o nome"
            value={name}
            focusBorderColor="primary"
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl width="50vw" my="1%">
          <FormLabel htmlFor="age">Idade</FormLabel>
          <NumberInput defaultValue={10} min={1} max={100}>
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
