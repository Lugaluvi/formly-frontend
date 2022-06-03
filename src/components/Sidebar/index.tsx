import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaAppleAlt,
  FaChild,
  FaGraduationCap,
  FaHome,
  FaPaperclip,
  FaUserFriends,
} from "react-icons/fa";
import { Logo } from "../Logo";

const ITEMS = [
  { name: "Tela Inicial", icon: FaHome, href: "/home" },
  { name: "Alunos", icon: FaChild, href: "/students" },
  { name: "Resumos", icon: FaPaperclip, href: "/resumes" },
  { name: "Disciplinas", icon: FaAppleAlt, href: "/subjects" },
  { name: "Responsáveis", icon: FaUserFriends, href: "/responsible" },
  { name: "Professores", icon: FaGraduationCap, href: "/teachers" },
];

export const Sidebar = () => {
  const router = useRouter();

  const itemBg = (href: string) =>
    router.asPath.includes(href) ? "#911C1F" : "#6E1517";

  return (
    <Box width="120px" background="#5A1113" height="full">
      <Flex justifyContent="center" paddingY={1}>
        <Logo />
      </Flex>

      {ITEMS.map((item) => (
        <Link key={item.name} href={item.href}>
          <Grid
            _hover={{ bg: "#911C1F" }}
            background={itemBg(item.href)}
            color="white"
            paddingY={4}
            style={{ cursor: "pointer" }}
          >
            <GridItem textAlign="center" paddingBottom={2}>
              <Flex justifyContent="center">
                <item.icon size={24} />
              </Flex>
            </GridItem>
            <GridItem textAlign="center">{item.name}</GridItem>
          </Grid>
        </Link>
      ))}
    </Box>
  );
};
