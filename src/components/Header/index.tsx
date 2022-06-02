import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BREADCRUMB, BREADCRUMBS } from "./constants";

export const Header = () => {
  const router = useRouter();
  const [breadcrumbItems, setBreadcrumItems] = useState<Array<BREADCRUMB>>([]);

  useEffect(() => {
    setBreadcrumItems(BREADCRUMBS[router.asPath]);
  }, [router.asPath]);

  return (
    <Box
      height="90px"
      width="full"
      borderBottomColor="gray.200"
      borderBottomWidth="1px"
    >
      <Flex
        height="full"
        width="full"
        alignItems="center"
        justifyContent="center"
        paddingX={4}
      >
        <Breadcrumb>
          {breadcrumbItems.map((item) => (
            <BreadcrumbItem key={item.title} style={{ fontSize: "24px" }}>
              <BreadcrumbLink as={Link} href={item.href}>
                {item.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <Spacer />

        <Menu>
          <MenuButton>
            <HStack>
              {/* TODO: Add user image */}
              <Avatar size="md" src="" />
              <FaChevronDown />
            </HStack>
          </MenuButton>
          <MenuList>
            {/* TODO: Add link to profile */}
            <MenuItem>Perfil</MenuItem>
            <MenuDivider />
            {/* TODO: Handle logout */}
            <MenuItem>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
