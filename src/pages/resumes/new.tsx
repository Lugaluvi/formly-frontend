import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import theme from "../../../theme";
import { LayoutAuth } from "../../layouts";

const baseURL = "localhost:8080/";

const ResumeForm = () => {
  const [title, setTitle] = useState<string>("");
  const [difficulties, setDifficulties] = useState<string>("");
  const [difficultiesMotives, setDifficultiesMotives] = useState<string>("");
  const [generalObservations, setGeneralObservations] = useState<string>("");
  const [behaviourAttitudes, setBehaviourAttitudes] = useState<string>("");

  const createResume = () => {
    axios
      .post(baseURL + "/resume", {
        title: title,
        difficulties: difficulties,
        difficultiesMotives: difficultiesMotives,
        generalObservations: generalObservations,
        behaviourAttitudes: behaviourAttitudes,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <LayoutAuth title="Gerar resumo">
      <HStack spacing="24px" align="flex-start">
        <Flex direction="column">
          <Text fontSize="4xl">Gerar resumo</Text>
          <Text color={theme.secondary} mb="2%">
            Preencha as informações abaixo conforme o comportamento do aluno.
          </Text>
          <FormControl width="50vw" my="2%">
            <FormLabel htmlFor="title">Título</FormLabel>
            <Input
              id="title"
              placeholder="Informe o título"
              value={title}
              focusBorderColor="primary"
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormControl>
          <FormControl width="50vw" my="2%">
            <FormLabel htmlFor="login">Dificuldades em matérias</FormLabel>
            <Text color={theme.secondary} mb="2%">
              Selecione as matérias que o aluno apresentou dificuldade.
            </Text>
            <Select
              placeholder="Selecione uma matéria"
              width="50vw"
              bg="#fafafafa"
              onChange={(event) => setDifficulties(event.target.value)}
            >
              <option value="history">História</option>
              <option value="math">Matématica</option>
              <option value="geo">Geografia</option>
              <option value="philo">Filosofia</option>
              <option value="comp">Computação</option>
              <option value="eng">Inglês</option>
              <option value="esp">Espanhol</option>
              <option value="socio">Sociologia</option>
            </Select>
          </FormControl>
          <FormControl width="50vw" my="2%">
            <FormLabel htmlFor="login">Motivo das dificuldades</FormLabel>
            <Text color={theme.secondary} mb="2%">
              Selecione o motivo das dificuldades que o aluno teve.
            </Text>
            <Select
              placeholder="Selecione uma dificuldade"
              width="50vw"
              bg="#fafafafa"
              onChange={(event) => setDifficultiesMotives(event.target.value)}
            >
              <option value="student-attention">
                Aluno não prestou atenção
              </option>
              <option value="student-plays">
                Aluno brincou durante a aula
              </option>
              <option value="student-absent">
                Aluno apresentou muitas faltas
              </option>
              <option value="student-support">
                Aluno não tem o suporte necessário
              </option>
            </Select>
          </FormControl>
          <Flex my="3%">
            <FormControl width="24vw" mr="2%">
              <FormLabel htmlFor="title">Observações gerais</FormLabel>
              <Textarea
                value={generalObservations}
                onChange={(event) => setGeneralObservations(event.target.value)}
                placeholder="Descreva as observações"
                focusBorderColor="primary"
                size="sm"
              />
            </FormControl>
            <FormControl width="25vw">
              <FormLabel htmlFor="title">Comportamento e atitudes</FormLabel>
              <Textarea
                value={behaviourAttitudes}
                onChange={(event) => setBehaviourAttitudes(event.target.value)}
                placeholder="Descreva sobre o comportamento e atitudes do aluno(a)"
                focusBorderColor="primary"
                size="sm"
              />
            </FormControl>
          </Flex>
          <Button
            textColor="white"
            variant="solid"
            width="180px"
            my="15px"
            bgColor="#5A1113"
          >
            <Link href="/pdf" isExternal>
              Gerar resumo
            </Link>
          </Button>
        </Flex>
      </HStack>
    </LayoutAuth>
  );
};

export default ResumeForm;
