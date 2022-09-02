import { EmailIcon } from '@chakra-ui/icons';
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useRouter } from 'next/router';
  import { useState, useEffect } from 'react';
  
  type ForgotPasswordFormInputs = {
    email: string;
  };
  
  export default function ForgotPassword(): JSX.Element {
      const router = useRouter();
      const [ email, setEmail] = useState("");
      const HandleEmailChange = (e) => setEmail(e.target.value)

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={HandleEmailChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={SubmitEmail}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit 
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
    function SubmitEmail() {
        if (email.length !=0) {
            router.replace("/auth/changePass")
        }
    }
  }