import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Textarea,
    Tfoot,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useState } from "react";
  import { LayoutAuth } from "../../layouts";
  
  const baseURL = "localhost:8080/";
  
  const StudentsList = () => {
    const [name, setName] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [phone, setPhone] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [resumeActivities, setResumeActivities] = useState<String>("");
  
    const listStudents = () => {
      axios
        .post(baseURL + "/students", {
          firstName: name,
          email: email,
          phone: phone,
          description: description,
          resumeActivities: resumeActivities,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  
    return (
      <LayoutAuth title="Alunos">
        <Flex direction="column">
          <Heading>Alunos</Heading>
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
                  <Td>Maria de Barro</Td>
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
                  <Td>Maria de Barro</Td>
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
                  <Td>Maria de Barro</Td>
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
              <Tfoot>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Matrícula</Th>
                  <Th>Responsável Legal</Th>
                  <Th>Ação</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </LayoutAuth>
    );
  };
  
  export default StudentsList;