import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

export default function MyProfile() {

  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        
        <Avatar
          size={'xl'}
          src={
            'https://cdns-images.dzcdn.net/images/artist/1e4dc4c8f984e6c0a35318481d84dbc3/500x500.jpg'
          }
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Name
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @ or ID
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            >
            Edit Profile
          </Button>
          
        </Stack>
      </Box>
    </Center>
    
  );
};
function Checkout () {
  router.push('../paymentpage')
}