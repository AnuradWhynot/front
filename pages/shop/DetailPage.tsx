import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import React from 'react';

export default function DetailPage() {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso-500x500.jpg'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Latte
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              7000₮
            </Text>
          </Box>
<Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
             Caffe latte нь ихэвчлэн англиар зүгээр л латте гэж товчилдог бөгөөд эспрессо болон уурын сүүгээр хийсэн Итали гаралтай кофены ундаа юм. Шоколадны амттай мока эсвэл кофег масала чай, мате, матча, турмерик, руйбос зэрэг өөр ундаагаар солих зэрэг сонголтууд орно. шар буурцгийн сүү эсвэл бүйлсний сүү гэх мэт сүүний өөр хувилбаруудыг бас ашигладаг.
              </Text>
              <Text fontSize={'lg'}>
              Цайны lattes нь сүү цайны стиль, кафены латт дээр янз бүрийн байдаг. Caffe latte шиг тэд уурын сүүтэй байдаг.
              </Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>
<List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  abab:
                  </Text>{' '}
                   ....
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Blala:
                  </Text>{' '}
                .....
                </ListItem>
                <ListItem>

                <Box>
              <Button
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Button>
<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>



                </ListItem>
              </List>
            </Box>
          </Stack>
          <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>

              </Text>

              <Button
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                mb={'4'}>
            Too ширхэг
              </Button>
<Button
            rounded={'none'}
            w={'full'}
            mt={6}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(1px)',
              boxShadow: 'lg',
            }}>
            +
          </Button>



          <Button
            rounded={'none'}
            w={''}
            mt={6}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(1px)',
              boxShadow: 'lg',
            }}>
            -
          </Button>
<Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Сагсанд нэмэх
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 өдөрт хүргэнэ</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}