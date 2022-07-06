import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { FaChild } from "react-icons/fa";
import { LayoutAuth } from "../../layouts"

const baseURL = "localhost:8080/";

const getStudents = () => {
  axios
    .post(baseURL + "/student")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const StudentsList = () => {
  return (
    <LayoutAuth title="Alunos">
      <Flex direction="column">
        <HStack justifyContent={"space-between"}>
          <Text fontSize="4xl">Alunos</Text>
          <Link href='/students/new'>
            Criar aluno
          </Link>
        </HStack>
        <br></br>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Matrícula</Th>
                <Th>Idade</Th>
                <Th>Responsável Legal</Th>
                <Th>Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>João de Barro</Td>
                <Td>234567890</Td>
                <Td>10</Td>
                <Td>
                  <VStack align="left">
                    <Text fontWeight="bold">Eliana da Terra</Text>
                    <Link href="#">ver perfil</Link>
                  </VStack>
                </Td>
                <Td>
                <Link href="students/:id/edit" color='red.700'>
                  Editar aluno
                </Link>
              </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </LayoutAuth>
  );
};

export default StudentsList;