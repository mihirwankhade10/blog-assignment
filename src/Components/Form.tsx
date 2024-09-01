import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="400px" margin="auto">
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" size={["sm", "md"]} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" size={["sm", "md"]} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size={["sm", "md"]}>Sign Up</Button>
      </VStack>
    </Box>
  );
};

export default Form;