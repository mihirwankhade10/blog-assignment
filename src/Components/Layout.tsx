import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Flex direction={['column', null, 'row']} gap={8}>
        <Box flex={1}>{children}</Box>
        <Box w={['100%', null, '300px']}>
          {/* Sidebar content */}
        </Box>
      </Flex>
    </Container>
  );
};

export default Layout;