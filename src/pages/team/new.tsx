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

const TeamForm = () => {
  const [name, setName] = useState<String>("");

  const createTeam = () => {
    axios
      .post(baseURL + "/team", {
        name: name,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <LayoutAuth title="Criar turma">
      <Flex direction="column">
        <Text fontSize="4xl">Criar turma</Text>
        <Text color={theme.secondary} mb="2%">
          Informe o nome para criar a turma.
        </Text>
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
        <Button
          textColor="white"
          width="100px"
          mt="1%"
          bgColor="primary"
          fontWeight="normal"
          onClick={() => createTeam()}
        >
          Concluir
        </Button>
      </Flex>
    </LayoutAuth>
  );
};

export default TeamForm;
