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
  Checkbox,
  CheckboxGroup,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  HStack,
  Center,
  Divider,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { LayoutAuth } from "../../layouts";
import theme from "../../../theme";

const baseURL = "localhost:8080/";

const ResumeForm = () => {
  const [title, setTitle] = useState<String>("");
  const [difficulties, setDifficulties] = useState<Array<String>>([""]);
  const [difficultiesMotives, setDifficultiesMotives] = useState<Array<String>>(
    [""]
  );
  const [generalObservations, setGeneralObservations] = useState<String>("");
  const [behaviourAttitudes, setBehaviourAttitudes] = useState<String>("");

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
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("his")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "his"],
                })
              }
            >
              História
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("math")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "math"],
                })
              }
            >
              Matemática
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("geo")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "geo"],
                })
              }
            >
              Geografia
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("philo")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "philo"],
                })
              }
            >
              Filosofia
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("comp")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "comp"],
                })
              }
            >
              Informática
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("eng")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "eng"],
                })
              }
            >
              Inglês
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("esp")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "esp"],
                })
              }
            >
              Espanhol
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficulties.includes("socio")}
              onChange={() =>
                setDifficulties({
                  arrayvar: [...difficulties, "socio"],
                })
              }
            >
              Sociologia
            </Checkbox>
          </FormControl>
          <FormControl width="50vw" my="2%">
            <FormLabel htmlFor="login">Motivo das dificuldades</FormLabel>
            <Text color={theme.secondary} mb="2%">
              Selecione o motivo das dificuldades que o aluno teve.
            </Text>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficultiesMotives.includes("student-attention")}
              onChange={() =>
                setdifficultiesMotivesMotives({
                  arrayvar: [...difficulties, "student-attention"],
                })
              }
            >
              Aluno não prestou atenção
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficultiesMotives.includes("student-plays")}
              onChange={() =>
                setDifficultiesMotives({
                  arrayvar: [...difficulties, "student-plays"],
                })
              }
            >
              Aluno brincou durante a aula
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficultiesMotives.includes("student-absent")}
              onChange={() =>
                setDifficultiesMotives({
                  arrayvar: [...difficulties, "student-absent"],
                })
              }
            >
              Aluno apresentou muitas faltas
            </Checkbox>
            <Checkbox
              size="md"
              pr="2%"
              colorScheme="red"
              isChecked={difficultiesMotives.includes("student-support")}
              onChange={() =>
                setDifficultiesMotives({
                  arrayvar: [...difficulties, "student-support"],
                })
              }
            >
              Aluno não tem o suporte necessário
            </Checkbox>
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
            width="100px"
            mt="2%"
            bgColor="primary"
            fontWeight="normal"
            onClick={() => createResume()}
          >
            Concluir
          </Button>
        </Flex>
        <HStack spacing="24px">
          <Center height="200px">
            <Divider orientation="vertical" />
          </Center>
          <Stat>
            <StatLabel fontSize="2xl" mb="2%">
              Informações do Aluno(a)
            </StatLabel>
            <StatNumber fontSize="xl" mb="2%">
              João de Barro
            </StatNumber>
            <StatHelpText fontSize="md">
              Responsável: Maria de Barro
            </StatHelpText>
            <StatHelpText fontSize="md">Matrícula: 423452254-54</StatHelpText>
            <StatHelpText fontSize="md">Disciplinas: 6</StatHelpText>
            <StatHelpText fontSize="md">Idade: 13 Anos</StatHelpText>
          </Stat>
        </HStack>
      </HStack>
    </LayoutAuth>
  );
};

export default ResumeForm;
