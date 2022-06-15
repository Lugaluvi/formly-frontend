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

const Subjects = () => {
  return (
    <LayoutAuth title="Matérias">
      <HStack justifyContent={"space-between"} mb="2%">
        <Text fontSize="4xl">Matérias</Text>
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
              <Td fontWeight="bold">História</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar matéria
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Geografia</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar matéria
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Informática</Td>
              <Td>
                <Button colorScheme="red" variant="outline">
                  Editar matéria
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutAuth>
  );
};

export default Subjects;
