import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import theme from "../../../theme";
import { LayoutAuth } from "../../layouts";

const baseURL = "localhost:8080/";

const TeachersList = () => {
  return (
    <LayoutAuth title="Professores">
      <Flex direction="column">
      <HStack justifyContent={"space-between"} mb="2%">
        <Box>
          <Text fontSize="4xl">Professores</Text>
          <Text color={theme.secondary} mb="2%">
            Aqui estão listadas os professores de sua escola.
          </Text>
        </Box>
        <Link href='/teachers/new'>
          Novo Professor
        </Link>
      </HStack>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Telefone</Th>
                <Th>Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Fernando da Terra</Td>
                <Td>fernando@terra.com</Td>
                <Td>47 0000-0000</Td>
                <Td>
                  <Link href="teachers/:id/edit" color='red.700'>
                    Editar responsável
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

export default TeachersList;
