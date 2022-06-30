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
import { LayoutAuth } from "../../layouts";

const StudentsList = () => {
  return (
    <LayoutAuth title="Alunos">
      <Flex direction="column">
        <HStack justifyContent={"space-between"}>
          <Heading>Alunos</Heading>
          <Link href='/students/new'>
            Criar aluno
          </Link>
        </HStack>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Matrícula</Th>
                <Th>Responsável Legal</Th>
                <Th>Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>João de Barro</Td>
                <Td>234567890</Td>
                <Td>
                  <VStack align="left">
                    <Text fontWeight="bold">Eliana da Terra</Text>
                    <Link href="#">ver perfil</Link>
                  </VStack>
                </Td>
                <Td>
                  <Button
                    textColor="white"
                    variant="solid"
                    width="180px"
                    my="15px"
                    bgColor="#5A1113"
                  >
                    Visualizar Resumo
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>João de Barro</Td>
                <Td>234567890</Td>
                <Td>
                  <VStack align="left">
                    <Text fontWeight="bold">Eliana da Terra</Text>
                    <Link href="#">ver perfil</Link>
                  </VStack>
                </Td>
                <Td>
                  <Button
                    textColor="white"
                    variant="solid"
                    width="180px"
                    my="15px"
                    bgColor="#5A1113"
                  >
                    Visualizar Resumo
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>João de Barro</Td>
                <Td>234567890</Td>
                <Td>
                  <VStack align="left">
                    <Text fontWeight="bold">Eliana da Terra</Text>
                    <Link href="#">ver perfil</Link>
                  </VStack>
                </Td>
                <Td>
                  <Button
                    textColor="white"
                    variant="solid"
                    width="180px"
                    my="15px"
                    bgColor="#5A1113"
                  >
                    Visualizar Resumo
                  </Button>
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