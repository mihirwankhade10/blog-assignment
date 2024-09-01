import React from 'react';
import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebar }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" px={[4, 6, 8]}>
      <Flex direction={['column', null, 'row']} gap={8}>
        <Box flex={1}>{children}</Box>
        {!isMobile && sidebar && (
          <Box w={['100%', null, '300px']}>
            {sidebar}
          </Box>
        )}
      </Flex>
      {isMobile && sidebar && (
        <Box mt={8} w="100%">
          {sidebar}
        </Box>
      )}
    </Container>
  );
};

export default Layout;