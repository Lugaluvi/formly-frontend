import {
  Button,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  HStack,
  Center,
  Divider,
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import React, { useState } from "react";
import { LayoutAuth } from "../../layouts";
import Link from "next/link";

const baseURL = "localhost:8080/";

const Dashboard = () => {
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
      <HStack spacing={200} align="flex-start" mb="3%">
        <Box>
          <HStack spacing="24px">
            <Center height="150px">
              <Divider orientation="vertical" />
            </Center>
            <Stat>
              <StatLabel fontSize="3xl" mb="2%">
                Total de alunos
              </StatLabel>
              <StatNumber
                fontSize="3xl"
                mb="2%"
                color="#6B7D87"
                fontWeight="normal"
              >
                126
              </StatNumber>
            </Stat>
          </HStack>
        </Box>
        <Box>
          <HStack spacing="24px">
            <Center height="150px">
              <Divider orientation="vertical" />
            </Center>
            <Stat>
              <StatLabel fontSize="3xl" mb="2%">
                Resumos gerados
              </StatLabel>
              <StatNumber
                fontSize="3xl"
                mb="2%"
                color="#6B7D87"
                fontWeight="normal"
              >
                345
              </StatNumber>
            </Stat>
          </HStack>
        </Box>
        <Box>
          <HStack spacing="24px">
            <Center height="150px">
              <Divider orientation="vertical" />
            </Center>
            <Stat>
              <StatLabel fontSize="3xl" mb="2%">
                Informações gerais
              </StatLabel>
              <StatNumber
                fontSize="lg"
                color="#6B7D87"
                fontWeight="normal"
              >
                Alunos com dificuldades em matérias: 35
              </StatNumber>
              <StatNumber
                fontSize="lg"
                color="#6B7D87"
                fontWeight="normal"
              >
                Alunos com dificuldades comportamentais: 12
              </StatNumber>
            </Stat>
          </HStack>
        </Box>
      </HStack>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          mb="1%"
          fontWeight="normal"
          bgColor="#5A1113"
          color="#FFF"
        >
          Listar
        </MenuButton>
        <MenuList>
          <MenuItem>Todos os alunos</MenuItem>
          <MenuItem>Todas as matérias</MenuItem>
          <MenuItem>Todas as turmas</MenuItem>
          <MenuItem>Todas os resumos</MenuItem>
        </MenuList>
      </Menu>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Matrícula</Th>
              <Th>Idade</Th>
              <Th>Responsável legal</Th>
              <Th>Resumos</Th>
              <Th>Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">Fernando da Terra</Td>
              <Td>234567890</Td>
              <Td>13</Td>
              <Td>
                <VStack align="left">
                  <Text fontWeight="bold">Eliana da Terra</Text>
                  <Link href="#">ver perfil</Link>
                </VStack>
              </Td>
              <Td>5 resumos gerados</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Gerar Resumo
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Fernando da Terra</Td>
              <Td>234567890</Td>
              <Td>13</Td>
              <Td>
                <VStack align="left">
                  <Text fontWeight="bold">Eliana da Terra</Text>
                  <Link href="#">ver perfil</Link>
                </VStack>
              </Td>
              <Td>5 resumos gerados</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Gerar Resumo
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Fernando da Terra</Td>
              <Td>234567890</Td>
              <Td>13</Td>
              <Td>
                <VStack align="left">
                  <Text fontWeight="bold">Eliana da Terra</Text>
                  <Link href="#">ver perfil</Link>
                </VStack>
              </Td>
              <Td>5 resumos gerados</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Gerar Resumo
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutAuth>
  );
};

export default Dashboard;
