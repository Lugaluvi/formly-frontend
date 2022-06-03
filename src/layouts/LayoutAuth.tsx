import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Header, Sidebar } from "../components";
import { LayoutEmpty } from "./LayoutEmpty";

interface LayoutAuthProps {
  children: ReactNode;
  title?: string;
}

export const LayoutAuth: FC<LayoutAuthProps> = ({ title, children }) => (
  <LayoutEmpty title={title}>
    <Flex
      height="100%"
      flexDirection="row"
      flexWrap="wrap"
      style={{ overflow: "hidden" }}
    >
      <Sidebar />
      <Box height="100%" width="calc(100% - 120px)">
        <Header />
        <Box
          height="calc(100vh - 90px)"
          width="100%"
          style={{ overflow: "auto" }}
          padding="12"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  </LayoutEmpty>
);
