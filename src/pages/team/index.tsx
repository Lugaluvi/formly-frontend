import {
  Button,
  Text,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React from "react";
import { LayoutAuth } from "../../layouts";
import Link from "next/link";

const baseURL = "localhost:8080/";

const Teams = () => {
  return (
    <LayoutAuth title="Turmas">
      <HStack justifyContent={"space-between"} mb="2%">
        <Text fontSize="4xl">Turmas</Text>
        <Link href='/teams/new'>
          Nova turma
        </Link>
      </HStack>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">Turma 001</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar turma
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Turma 002</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar turma
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Turma 003</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar turma
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutAuth>
  );
};

export default Teams;
