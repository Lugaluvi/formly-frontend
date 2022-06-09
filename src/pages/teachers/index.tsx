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
  
  const TeachersList = () => {
    const [name, setName] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [phone, setPhone] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [resumeActivities, setResumeActivities] = useState<String>("");
  
    const listTeachers = () => {
      axios
        .post(baseURL + "/teachers", {
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
      <LayoutAuth title="Professores">
        <Flex direction="column">
          <Heading>Professores</Heading>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Matrícula</Th>
                  <Th>Turmas</Th>
                  <Th>Ação</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Fernando da Terra</Td>
                  <Td>234567890</Td>
                  <Td>5a - 5b</Td>
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
                  <Td>Fernando da Terra</Td>
                  <Td>234567890</Td>
                  <Td>5a - 5b</Td>
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
                  <Td>Fernando da Terra</Td>
                  <Td>234567890</Td>
                  <Td>5a - 5b</Td>
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
                  <Th>Turmas</Th>
                  <Th>Ação</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </LayoutAuth>
    );
  };
  
  export default TeachersList;