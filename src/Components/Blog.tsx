import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  HStack,
  VStack,
  Grid,
  Link,
  useColorModeValue,
  IconButton,
  Collapse,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Image,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import Form from "./Form";

const Blog: React.FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigationItems = [
    "World",
    "U.S.",
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Opinion",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="white" py={4} borderBottomWidth={1}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              AI Design Blog
            </Heading>
            <HStack spacing={4}>
              <Button
                size="sm"
                colorScheme={isSubscribed ? "green" : "red"}
                onClick={handleSubscribe}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
              <form onSubmit={handleSearch}>
                <HStack>
                  <Input
                    placeholder="Search"
                    size="sm"
                    maxW="200px"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <IconButton
                    aria-label="Search"
                    icon={<SearchIcon />}
                    size="sm"
                    type="submit"
                  />
                </HStack>
              </form>
              <Button size="sm" colorScheme="blue" onClick={onModalOpen}>
                Sign up
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Responsive Navigation */}
      <Box bg="gray.100" py={2}>
        <Container maxW="container.xl">
          {isMobile ? (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              display={{ base: "flex", md: "none" }}
            />
          ) : (
            <HStack spacing={4} overflowX="auto" py={2}>
              {navigationItems.map((item) => (
                <Button key={item} variant="ghost" size="sm">
                  {item}
                </Button>
              ))}
            </HStack>
          )}
        </Container>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch">
              {navigationItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                >
                  {item}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Sign Up Modal */}
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Main Content */}
      <Container maxW="container.xl" mt={8}>
        {/* Featured Post */}
        <Box bg="gray.800" color="white" p={8} mb={8} borderRadius="md">
          <Heading as="h2" size="2xl" mb={4}>
            AI Revolution in Web Design: Creating Stunning UI and Interactive
            Websites
          </Heading>
          <Text mb={4}>
            Explore how artificial intelligence is transforming the landscape of
            web design, enabling developers and designers to create more
            engaging, personalized, and efficient user interfaces.
          </Text>
          <Button variant="outline" colorScheme="whiteAlpha">
            Continue reading...
          </Button>
        </Box>

        {/* Featured Posts Grid */}
        <Grid templateColumns={["1fr", null, "repeat(2, 1fr)"]} gap={8} mb={8}>
          <Flex borderWidth={1} borderRadius="md" overflow="hidden">
            <Box flex={1} p={4}>
              <Text color="blue.500" fontWeight="bold" mb={2}>
                AI Tools
              </Text>
              <Heading as="h3" size="md" mb={2}>
                AI-Powered Design Assistance
              </Heading>
              <Text mb={2}>
                Discover how AI tools are revolutionizing the creative process
                in web design, offering innovative solutions and fresh
                perspectives.
              </Text>
              <Link color="blue.500">Continue reading</Link>
            </Box>
            <Box bg="gray.300" w="150px" />
          </Flex>
          <Flex borderWidth={1} borderRadius="md" overflow="hidden">
            <Box flex={1} p={4}>
              <Text color="green.500" fontWeight="bold" mb={2}>
                User Experience
              </Text>
              <Heading as="h3" size="md" mb={2}>
                Personalized UI with AI
              </Heading>
              <Text mb={2}>
                Learn how AI algorithms are enabling websites to deliver highly
                personalized experiences to each visitor.
              </Text>
              <Link color="green.500">Continue reading</Link>
            </Box>
            <Box bg="gray.300" w="150px" />
          </Flex>
        </Grid>

        <Flex direction={["column", null, "row"]} gap={8}>
          {/* Main Blog Content */}
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={4}>
              The AI Revolution in Web Design
            </Heading>
            <VStack spacing={8} align="stretch">
              {/* Main AI Blog Post */}
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  How AI is Reshaping UI and Interactive Websites
                </Heading>
                <Text fontSize="sm" color="gray.500" mb={4}>
                  May 15, 2024 by Sarah Johnson
                </Text>
                <Text mb={4}>
                  Artificial Intelligence (AI) has emerged as a game-changer in
                  the world of web design, revolutionizing the way we create and
                  interact with user interfaces. From automating repetitive
                  tasks to generating personalized experiences, AI is empowering
                  designers and developers to push the boundaries of what's
                  possible in web design.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  1. AI-Powered Design Assistance
                </Heading>
                <Text mb={4}>
                  One of the most significant impacts of AI in web design is its
                  ability to assist in the creative process. AI-powered tools
                  can now generate layout suggestions, color palettes, and even
                  entire design mockups based on a set of parameters or by
                  analyzing existing successful designs. This not only speeds up
                  the design process but also provides designers with fresh
                  ideas and perspectives they might not have considered
                  otherwise.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  2. Personalized User Experiences
                </Heading>
                <Text mb={4}>
                  AI algorithms are enabling websites to deliver highly
                  personalized experiences to each visitor. By analyzing user
                  behavior, preferences, and historical data, AI can dynamically
                  adjust the layout, content, and even the color scheme of a
                  website in real-time. This level of personalization not only
                  enhances user engagement but also improves conversion rates
                  and overall user satisfaction.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  3. Intelligent Chatbots and Virtual Assistants
                </Heading>
                <Text mb={4}>
                  AI-powered chatbots and virtual assistants have become
                  increasingly sophisticated, offering natural language
                  processing capabilities that can understand and respond to
                  user queries in a more human-like manner. These intelligent
                  assistants can be seamlessly integrated into website designs,
                  providing instant support, guiding users through complex
                  processes, and even assisting in decision-making.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  4. Automated Testing and Optimization
                </Heading>
                <Text mb={4}>
                  AI is streamlining the process of testing and optimizing
                  websites. Machine learning algorithms can automatically
                  perform A/B tests, analyze user interactions, and make
                  data-driven recommendations for improving the user interface.
                  This continuous optimization ensures that websites remain
                  effective and user-friendly, adapting to changing user
                  preferences and behaviors over time.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  5. Accessibility and Inclusive Design
                </Heading>
                <Text mb={4}>
                  AI is playing a crucial role in making websites more
                  accessible to users with disabilities. Advanced algorithms can
                  analyze website content and structure, automatically
                  suggesting improvements to enhance readability, navigation,
                  and compatibility with assistive technologies. This not only
                  ensures compliance with accessibility standards but also
                  creates a more inclusive web experience for all users.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  6. Predictive Design and User Behavior Analysis
                </Heading>
                <Text mb={4}>
                  AI-powered predictive analytics are helping designers
                  anticipate user needs and behaviors. By analyzing vast amounts
                  of user data, AI can forecast trends and user preferences,
                  allowing designers to create interfaces that are not only
                  visually appealing but also intuitively functional. This
                  proactive approach to design ensures that websites remain
                  relevant and engaging in an ever-changing digital landscape.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  7. Automated Content Generation and Curation
                </Heading>
                <Text mb={4}>
                  AI is revolutionizing content creation and curation for
                  websites. Natural language processing and generation
                  algorithms can create compelling copy, headlines, and even
                  entire articles. Additionally, AI can curate and personalize
                  content recommendations for users, ensuring that they always
                  find relevant and interesting information on the site.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  8. Voice User Interfaces (VUI) Integration
                </Heading>
                <Text mb={4}>
                  As voice-activated devices become more prevalent, AI is
                  enabling the seamless integration of Voice User Interfaces
                  (VUI) into web design. This technology allows users to
                  interact with websites using voice commands, making the
                  browsing experience more accessible and hands-free. AI-powered
                  natural language understanding ensures accurate interpretation
                  of user intent and context-aware responses.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  9. Emotional Design with AI
                </Heading>
                <Text mb={4}>
                  AI is beginning to understand and respond to human emotions,
                  paving the way for emotionally intelligent web designs. By
                  analyzing user interactions, facial expressions (via camera),
                  and even tone of voice, AI can adjust the website's mood,
                  color scheme, and content to match the user's emotional state.
                  This emotional design approach creates a more empathetic and
                  engaging user experience.
                </Text>

                <Heading as="h4" size="md" mb={2}>
                  10. The Future of AI in Web Design
                </Heading>
                <Text mb={4}>
                  As AI continues to evolve, we can expect even more
                  groundbreaking applications in web design. From fully
                  autonomous website creation to immersive AR/VR experiences
                  powered by AI, the possibilities are endless. Designers and
                  developers who embrace these AI-powered tools and techniques
                  will be well-positioned to create the next generation of web
                  experiences that are not only beautiful but also highly
                  functional and user-centric.
                </Text>

                <Text fontWeight="bold" mt={8}>
                  The integration of AI in web design is not just a trend; it's
                  a paradigm shift that is reshaping the entire industry. As we
                  continue to explore and harness the power of AI, we can look
                  forward to websites that are more intelligent, responsive, and
                  attuned to user needs than ever before.
                </Text>
              </Box>

              {/* Comments Section */}
              <Box mt={12}>
                <VStack spacing={4} align="stretch">
                  {/* Add comment form */}
                  <Box mt={4}>
                    <Heading as="h4" size="md" mb={2}>
                      Add a Comment
                    </Heading>
                    <VStack spacing={4}>
                      <Input placeholder="Your Name" />
                      <Textarea placeholder="Your Comment" />
                      <Button colorScheme="blue">Submit Comment</Button>
                    </VStack>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box w={["100%", null, "300px"]}>
            <VStack spacing={8} align="stretch">
              {/* About */}
              <Box bg={bgColor} p={4} borderRadius="md">
                <Heading as="h4" size="md" mb={2}>
                  About
                </Heading>
                <Text>
                  Exploring the intersection of AI and web design. We cover the
                  latest trends, tools, and techniques in AI-powered user
                  interface design and development.
                </Text>
              </Box>
              {/* Archives */}
              <Box>
                <Flex
                  justify="space-between"
                  align="center"
                  onClick={onToggle}
                  cursor="pointer"
                >
                  <Heading as="h4" size="md" mb={2}>
                    Archives
                  </Heading>
                  <IconButton
                    aria-label="Toggle Archives"
                    icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    variant="unstyled"
                    size="md"
                  />
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                  <VStack align="stretch">
                    {[
                      "May 2024",
                      "April 2024",
                      "March 2024",
                      "February 2024",
                      "January 2024",
                    ].map((month) => (
                      <Link key={month} color="blue.500">
                        {month}
                      </Link>
                    ))}
                  </VStack>
                </Collapse>
              </Box>
              {/* Elsewhere */}
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  Elsewhere
                </Heading>
                <VStack align="stretch">
                  {["GitHub", "Twitter", "LinkedIn"].map((platform) => (
                    <Link key={platform} color="blue.500">
                      {platform}
                    </Link>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box
        as="footer"
        mt={12}
        py={6}
        borderTopWidth={1}
        textAlign="center"
        bg={bgColor}
      >
        <Text color={textColor}>
          AI Design Blog - Exploring the future of web design and AI
        </Text>
        <Button variant="link" mt={2}>
          Back to top
        </Button>
      </Box>
    </Box>
  );
};

export default Blog;
