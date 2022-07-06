import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import theme from "../../../theme";
import { LayoutAuth } from "../../layouts";

const baseURL = "localhost:8080/";

const ProfileForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createProfile = () => {
    axios
      .post(baseURL + "/admin", {
        firstName: firstName,
        lastname: lastName,
        phone: phone,
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
    <LayoutAuth title="Editar usuário">
      <Flex direction="column">
        <Text fontSize="4xl">Editar usuário</Text>
        <Text color={theme.secondary} mb="2%">
          Preencha as informações abaixo para editar o seu perfil.
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
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <Input
            id="phone"
            placeholder="Informe o telefone"
            value={phone}
            focusBorderColor="primary"
            onChange={(event) => setPhone(event.target.value)}
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
        <Button
          textColor="white"
          width="100px"
          mt="1%"
          bgColor="primary"
          fontWeight="normal"
          onClick={() => createProfile()}
        >
          Concluir
        </Button>
      </Flex>
    </LayoutAuth>
  );
};

export default ProfileForm;
