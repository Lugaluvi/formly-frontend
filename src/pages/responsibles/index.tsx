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
  Tr,
  Box
} from "@chakra-ui/react";
import React from "react";
import { LayoutAuth } from "../../layouts";
import Link from "next/link";
import theme from "../../../theme";

const baseURL = "localhost:8080/";

const Responsible = () => {
  return (
    <LayoutAuth title="Responsáveis">
      <HStack justifyContent={"space-between"} mb="2%">
        <Box>
          <Text fontSize="4xl">Responsáveis</Text>
          <Text color={theme.secondary} mb="2%">
            Aqui estão listadas os responsáveis dos alunos de sua escola.
          </Text>
        </Box>
        <Link href='/responsibles/new'>
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
              <Td>Responsável Maria</Td>
              <Td>
                <Link href="responsibles/:id/edit" color='red.700'>
                  Editar responsável
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutAuth>
  );
};

export default Responsible;
