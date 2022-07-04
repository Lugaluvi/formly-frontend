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

const ResumesList = () => {
  return (
    <LayoutAuth title="Resumos">
        <HStack spacing={200} align="flex-start" mb="3%">
        <Box>
          <HStack spacing="24px">
            <Center height="150px">
              <Divider orientation="vertical" />
            </Center>
            <Stat>
              <StatLabel fontSize="2xl" mb="2%">
                Total de alunos com resumo
              </StatLabel>
              <StatNumber
                fontSize="3xl"
                mb="2%"
                color="#6B7D87"
                fontWeight="normal"
              >
                4
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
              <StatLabel fontSize="2xl" mb="2%">
                Total de resumos gerados
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
        </HStack>
      <Flex direction="column">
        <HStack justifyContent={"space-between"}>
          <Heading>Alunos</Heading>
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
                    <Link href="resumes/new">Gerar Resumo</Link>
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
                    <Link href="resumes/new">Gerar Resumo</Link>
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