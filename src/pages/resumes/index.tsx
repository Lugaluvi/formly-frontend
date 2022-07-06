import { ExternalLinkIcon } from "@chakra-ui/icons";
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
  Flex,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { FaChild } from "react-icons/fa";
import { LayoutAuth } from "../../layouts";
import theme from "../../../theme";

const ResumesList = () => {
  return (
    <LayoutAuth title="Resumos">
      <Text fontSize="4xl">Resumos</Text>
      <Text color={theme.secondary} mb="2%">
        Escolha um aluno na lista abaixo para gerar um resumo
      </Text>
      <Flex direction="column">
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
                  <Button
                    textColor="white"
                    variant="solid"
                    width="180px"
                    my="15px"
                    bgColor="#5A1113"
                  >
                    <Link href="resumes/new">Gerar Resumo</Link>
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

export default ResumesList;