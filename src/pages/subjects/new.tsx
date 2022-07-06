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

const SubjectForm = () => {
  const [name, setName] = useState<string>("");

  const createSubject = () => {
    axios
      .post(baseURL + "/subject", {
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
    <LayoutAuth title="Criar matéria">
      <Flex direction="column">
        <Text fontSize="4xl">Criar matéria</Text>
        <Text color={theme.secondary} mb="2%">
          Informe o nome para criar a matéria.
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
          onClick={() => createSubject()}
        >
          Concluir
        </Button>
      </Flex>
    </LayoutAuth>
  );
};

export default SubjectForm;
