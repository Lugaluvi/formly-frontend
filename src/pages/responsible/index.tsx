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

const Responsible = () => {
  return (
    <LayoutAuth title="Responsáveis">
      <HStack justifyContent={"space-between"} mb="2%">
        <Text fontSize="4xl">Responsáveis</Text>
        <Link href='/responsible/new'>
          Novo Responsável
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
              <Td fontWeight="bold">Responsável Maria</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar responsável
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Responsável João</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar responsável
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Responsável Paulo</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar responsável
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutAuth>
  );
};

export default Responsible;
