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
import theme from "../../../theme";

const baseURL = "localhost:8080/";

const Subjects = () => {
  return (
    <LayoutAuth title="Matérias">
      <HStack justifyContent={"space-between"} mb="2%">
        <Box>
          <Text fontSize="4xl">Matérias</Text>
          <Text color={theme.secondary} mb="2%">
            Aqui estão listadas as matérias da sua escola.
          </Text>
        </Box>
        <Link href='/subjects/new'>
          Nova matéria
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
              <Td>História</Td>
              <Td>
                <Link href="subjects/:id/edit" color='red.700'>
                  Editar matéria
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutAuth>
  );
};

export default Subjects;
