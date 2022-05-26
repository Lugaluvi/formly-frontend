import React, { ReactNode, useEffect, useState } from "react";

import axios from "axios";
const baseURL = "localhost:8080/";

import { Image, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Select,
  Textarea,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import {
  AiFillSetting,
  AiFillStar,
  AiFillFileText,
  AiFillHome,
} from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { IconType } from "react-icons";
import { ReactText } from "react";
interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Tela Inicial", icon: AiFillHome },
  { name: "Alunos", icon: HiUsers },
  { name: "Resumos", icon: AiFillFileText },
  { name: "Disciplinas", icon: AiFillStar },
  { name: "Responsáveis", icon: AiFillSetting },
  { name: "Professores", icon: FaGraduationCap },
];

export default function TeacherForm({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [teacherRegistration, setTeacherRegistration] = useState<String>("");
  const [teacherFirstName, setTeacherFirstName] = useState<String>("");
  const [teacherLastName, setTeacherLastName] = useState<String>("");
  const [teacherEmail, setTeacherEmail] = useState<String>("");
  const [teacherPhone, setTeacherPhone] = useState<String>("");
  const [teacherDescription, setTeacherDescription] = useState<String>("");
  const [teacherResumeActivities, setTeacherResumeActivities] =
    useState<String>("");
  const [teacherPassword, setTeacherPassword] = useState<String>("");

  const createTeacher = () => {
    axios
      .post(baseURL + "/teacher", {
        registration: teacherRegistration,
        firstName: teacherFirstName,
        lastname: teacherLastName,
        email: teacherEmail,
        phone: teacherPhone,
        description: teacherDescription,
        resumeActivities: teacherResumeActivities,
        password: teacherPassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(createTeacher, []);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      <Flex marginLeft={"35%"} direction={"column"}>
        <Heading>Cadastro do Professor</Heading>
        <Text>
          Preencha as informações abaixo conforme o cadastro do professor.
        </Text>
        <FormControl width={"50vw"} my="2%">
          <FormLabel htmlFor="first-name">Nome</FormLabel>
          <Input id="first-name" placeholder="Nome" bg="#fafafafa" />
        </FormControl>
        <FormControl width={"50vw"} mb="2%">
          <FormLabel htmlFor="login">Login</FormLabel>
          <Input id="login" placeholder="Login" bg="#fafafafa" />
        </FormControl>
        <FormControl width={"50vw"} mb="2%">
          <FormLabel htmlFor="login" mb="2%">
            Telefone
          </FormLabel>
          <InputGroup>
            <InputLeftAddon bg="#ecececf9" />
            <Input type="tel" placeholder="phone number" bg="#fafafafa" />
          </InputGroup>
        </FormControl>
        <FormControl width={"50vw"} mb="2%">
          <FormLabel htmlFor="login">Email</FormLabel>
          <Input id="login" placeholder="Email" bg="#fafafafa" />
        </FormControl>
        <FormControl width={"50vw"} mb="2%">
          <FormLabel htmlFor="turma">Turma</FormLabel>
          <Select
            placeholder="Selecione uma turma"
            width={"50vw"}
            bg="#fafafafa"
          >
            <option value="option1">Turma 1</option>
            <option value="option2">Turma 2</option>
            <option value="option3">Turma 3</option>
          </Select>
        </FormControl>
        <Text mb="8px" width={"50vw"}>
          Informações gerais
        </Text>
        <Textarea
          width={"50vw"}
          placeholder="Here is a sample placeholder"
          bg="#fafafafa"
        />
        <Text mb="8px" width={"50vw"}>
          Complementos e Atividades
        </Text>
        <Textarea
          width={"50vw"}
          placeholder="Here is a sample placeholder"
          bg="#fafafafa"
        />
        <Button
          textColor={"white"}
          variant="solid"
          width={"80px"}
          my="15px"
          bgColor="#5A1113"
        >
          Concluir
        </Button>
      </Flex>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#5A1113", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box boxSize="90px" justifyContent="center">
          <Image
            boxSize="80px"
            src="https://imgur.com/gjGQVRJ.png"
            ml="30%"
            marginY="15px"
            alt="Logo Form-Ly"
          />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box mt="25px">
        {LinkItems.map((link) => (
          <NavItem
            height={"50px"}
            color={"white"}
            key={link.name}
            icon={link.icon}
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#911C1F",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Perfil</MenuItem>
              <MenuItem>Configurações</MenuItem>
              <MenuDivider />
              <MenuItem>Sair</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
