import React from 'react';
import {
  Box, Container, Flex, Heading, Text, Button, Input, HStack, VStack, Grid, Link,
  useColorModeValue, IconButton, Collapse, useDisclosure, Drawer, DrawerBody, DrawerHeader,
  DrawerOverlay, DrawerContent, DrawerCloseButton, useBreakpointValue
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons';

const Blog: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navigationItems = ['World', 'U.S.', 'Technology', 'Design', 'Culture', 'Business', 'Politics', 'Opinion', 'Science', 'Health', 'Style', 'Travel'];

  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="white" py={4} boxShadow="sm" position="sticky" top={0} zIndex={1000}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={4}>
              <Flex align="center" maxW="300px" w="100%" bg={bgColor} borderRadius="md">
                <Input placeholder="Search" size="sm" variant="unstyled" pl={4} />
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  size="sm"
                  variant="ghost"
                />
              </Flex>
              <Button size="sm" colorScheme="blue">Sign up</Button>
              {/* Hamburger icon for mobile */}
              {isMobile && (
                <IconButton
                  aria-label="Open Menu"
                  icon={<HamburgerIcon />}
                  size="sm"
                  variant="ghost"
                  onClick={onOpen}
                />
              )}
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Navigation */}
      <Box bg="gray.50" py={2} boxShadow="sm" display={isMobile ? 'none' : 'block'}>
        <Container maxW="container.xl">
          <HStack spacing={4} overflowX="auto" className="no-scrollbar">
            {navigationItems.map((item) => (
              <Button key={item} variant="ghost" size="sm">{item}</Button>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Drawer for mobile navigation */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              {navigationItems.map((item) => (
                <Button key={item} variant="ghost" size="sm" onClick={onClose}>{item}</Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Container maxW="container.xl" mt={8}>
        <Flex direction={['column', null, 'row']} gap={8}>
          {/* Main Blog Content */}
          <Box flex={1}>
            {/* Featured Post */}
            <Box bg="gray.800" color="white" p={8} mb={8} borderRadius="md">
              <Heading as="h2" size="2xl" mb={4}>Title of a longer featured blog post</Heading>
              <Text mb={4}>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</Text>
              <Button variant="outline" colorScheme="whiteAlpha">Continue reading...</Button>
            </Box>

            {/* Featured Posts Grid */}
            <Grid templateColumns={['1fr', null, 'repeat(2, 1fr)']} gap={8} mb={8}>
              {/* World Featured Post */}
              <Box borderWidth={1} p={4} borderRadius="md">
                <Text color="blue.500" fontWeight="bold" mb={2}>World</Text>
                <Heading as="h3" size="md" mb={2}>Featured post</Heading>
                <Text mb={2}>This is a wider card with supporting text below as a natural lead-in to additional content.</Text>
                <Link color="blue.500">Continue reading</Link>
              </Box>
              {/* Design Featured Post */}
              <Box borderWidth={1} p={4} borderRadius="md">
                <Text color="green.500" fontWeight="bold" mb={2}>Design</Text>
                <Heading as="h3" size="md" mb={2}>Post title</Heading>
                <Text mb={2}>This is a wider card with supporting text below as a natural lead-in to additional content.</Text>
                <Link color="green.500">Continue reading</Link>
              </Box>
            </Grid>

            {/* Regular Blog Posts */}
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading as="h2" size="xl" mb={4}>From the Firehose</Heading>
                <Heading as="h3" size="lg" mb={2}>Sample blog post</Heading>
                <Text fontSize="sm" color="gray.500" mb={4}>January 1, 2014 by Mark</Text>
                <Text mb={4}>This blog post shows a few different types of content that's supported and styled with Chakra UI. Basic typography, images, and code are all supported.</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box w={['100%', null, '300px']}>
            <VStack spacing={8} align="stretch">
              {/* About */}
              <Box bg={bgColor} p={4} borderRadius="md">
                <Heading as="h4" size="md" mb={2}>About</Heading>
                <Text>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</Text>
              </Box>
              {/* Archives */}
              <Box>
                <Flex justify="space-between" align="center" onClick={onToggle} cursor="pointer">
                  <Heading as="h4" size="md" mb={2}>Archives</Heading>
                  <IconButton
                    aria-label="Toggle Archives"
                    icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    variant="unstyled"
                    size="md"
                  />
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                  <VStack align="stretch">
                    {['March 2014', 'February 2014', 'January 2014', 'December 2013', 'November 2013', 'October 2013', 'September 2013', 'August 2013', 'July 2013', 'June 2013', 'May 2013', 'April 2013'].map((month) => (
                      <Link key={month} color="blue.500">{month}</Link>
                    ))}
                  </VStack>
                </Collapse>
              </Box>
              {/* Elsewhere */}
              <Box>
                <Heading as="h4" size="md" mb={2}>Elsewhere</Heading>
                <VStack align="stretch">
                  {['GitHub', 'Twitter', 'Facebook'].map((platform) => (
                    <Link key={platform} color="blue.500">{platform}</Link>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" mt={12} py={6} borderTopWidth={1} textAlign="center" bg={bgColor}>
        <Text color={textColor}>Blog template built for Chakra UI by @mdo.</Text>
        <Button variant="link" mt={2}>Back to top</Button>
      </Box>
    </Box>
  );
};

export default Blog;
