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
    FormControl,
    FormLabel,
    Input,
    AvatarBadge,
    IconButton,
    Modal,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalOverlay,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react';
  import React from 'react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
import { join } from 'path';

  export default function ChangeProfile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
          <Heading fontSize={'2x1'} fontFamily={'body'}>
            Edit your profile
          </Heading>
<FormLabel>User Icon</FormLabel>
<Stack direction={['column', 'row']} spacing={6}>
  <Center>
    <Avatar size="xl" src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg">
      <AvatarBadge
        as={IconButton}
        size="sm"
        rounded="full"
        top="-10px"
        colorScheme="red"
        aria-label="remove Image"
        icon={<SmallCloseIcon />}
      />
    </Avatar>
  </Center>
  <Center w="full">
  <>
      <Button onClick={onOpen}>Change Profile </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose way to upload</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={changeProfile}>
            <Modal isOpen={isOpen} onClose={onClose}>
            </Modal>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  </Center>
</Stack>
        <FormControl id="username" isRequired>  
          <FormLabel>username</FormLabel>
          <Input
            placeholder="username"
            _placeholder={{ color: 'gray.500' }}
            type="username"
          />
        </FormControl>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            You cant change your ID 
          </Text>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}

              fontSize={'sm'}
              rounded={'full'}
              bg={'teal.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              onClick={
                onClose
              }
              >
              Save
            </Button>
          </Stack>
        </Box>
      </Center>

    );
    function changeProfile () {
      return (
        <>
          <Button onClick={onOpen}>Open Modal</Button>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>end my life</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                  cry
                </Button>
                <Button onClick={onClose}>im gonna kys</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
    function saveChanges () {
      
   }
  };