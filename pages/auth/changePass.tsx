import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import router from 'next/router';
import { useState } from 'react';

function ChangePass(): JSX.Element {
  const HandlePasswordChange = (e) => setPassword(e.target.value)
  const HandleRePasswordChange = (e) => setRePassword(e.target.value)
  const [ password, setPassword] = useState("");
  const [ rePassword, setRePassword] = useState("");
    return(
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
             Enter new password
             </Heading>
             <FormControl id="password" isRequired>
             <FormLabel>Password</FormLabel>
             <Input
             placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            onChange={HandlePasswordChange}
            />
            </FormControl>
            <FormControl id="password" isRequired>
            <FormLabel>Re-Enter Password</FormLabel>
            <Input 
            type="password"
            placeholder='Re-Enter Password' 
            onChange={HandleRePasswordChange}
            />
            </FormControl>
            <Stack spacing={6}>
            <Button
            bg={'teal.400'}
            color={'white'}
            onClick={changePass}
            _hover={{
                bg: 'teal.500',
                }}>
                    Submit
                    </Button>
                  </Stack>
                </Stack>
            </Flex>
            );
            function changePass() {
             if (password.length > 7&&rePassword.length > 7) {
              if(password == rePassword) {
                router.replace("/auth/login")
              }
             }
              
            }
          }

export default ChangePass