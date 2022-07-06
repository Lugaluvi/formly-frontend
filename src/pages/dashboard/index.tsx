import {
  Box,
  Center,
  Divider,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
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
import Link from "next/link";
import { LayoutAuth } from "../../layouts";

const baseURL = "localhost:8080/";

const Dashboard = () => {
  return (
    <LayoutAuth title="Tela inicial">
      <HStack spacing={200} align="flex-start" mb="3%">
        <Box>
          <HStack spacing="24px">
            <Center height="150px">
              <Divider orientation="vertical" />
            </Center>
            <Stat>
              <StatLabel fontSize="3xl" mb="2%">
                Total de alunos
              </StatLabel>
              <StatNumber
                fontSize="3xl"
                mb="2%"
                color="#6B7D87"
                fontWeight="normal"
              >
                126
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
              <StatLabel fontSize="3xl" mb="2%">
                Resumos gerados
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
        <Box>
          <HStack spacing="24px">
            <Center height="150px">
              <Divider orientation="vertical" />
            </Center>
            <Stat>
              <StatLabel fontSize="3xl" mb="2%">
                Informações gerais
              </StatLabel>
              <StatNumber fontSize="lg" color="#6B7D87" fontWeight="normal">
                Alunos com dificuldades em matérias: 35
              </StatNumber>
              <StatNumber fontSize="lg" color="#6B7D87" fontWeight="normal">
                Alunos com dificuldades comportamentais: 12
              </StatNumber>
            </Stat>
          </HStack>
        </Box>
      </HStack>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Matrícula</Th>
              <Th>Idade</Th>
              <Th>Responsável legal</Th>
              <Th>Resumos</Th>
              <Th>Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">Fernando da Terra</Td>
              <Td>234567890</Td>
              <Td>13</Td>
              <Td>
                <VStack align="left">
                  <Text fontWeight="bold">Eliana da Terra</Text>
                  <Link href="responsibles/1">ver perfil</Link>
                </VStack>
              </Td>
              <Td>5 resumos gerados</Td>
              <Td>
                <Link href="resumes/new" color="red.700">
                  Gerar resumo
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Fernando da Terra</Td>
              <Td>234567890</Td>
              <Td>13</Td>
              <Td>
                <VStack align="left">
                  <Text fontWeight="bold">Eliana da Terra</Text>
                  <Link href="responsibles/1">ver perfil</Link>
                </VStack>
              </Td>
              <Td>5 resumos gerados</Td>
              <Td>
                <Link href="resumes/new" color="red.700">
                  Gerar resumo
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Fernando da Terra</Td>
              <Td>234567890</Td>
              <Td>13</Td>
              <Td>
                <VStack align="left">
                  <Text fontWeight="bold">Eliana da Terra</Text>
                  <Link href="responsibles/1">ver perfil</Link>
                </VStack>
              </Td>
              <Td>5 resumos gerados</Td>
              <Td>
                <Link href="resumes/new">Gerar resumo</Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutAuth>
  );
};

export default Dashboard;
