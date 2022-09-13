import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Wrap,
  WrapItem,
  SpaceProps,
  Container,
  VStack,
} from '@chakra-ui/react';
import Card from './components/Card'
import { Data } from './cart/_data';


interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const Home = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" style={{ color: 'teal.400' }}  >ELF SHOP</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1">

          </Heading>

        </Box>
      </Box>
      <Heading as="h2" marginTop="5" style={{color: 'brown'}}>
      Зарагдаж буй coffee
</Heading>

      <Wrap spacing=" 10px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
          <Flex className="container">
                        <Flex className="row justify-content-center">
                                {Data.map(({name, imageUrl, price,}, index) => {
                                  return (
                                    <Flex className="col-md-3 col-sm-6 mb-5">
                                      <Card
                                        name={name}
                                        imageUrl={imageUrl}
                                        price={price} description={undefined} 
                                        />
                                    </Flex>
                                  );
                                })}
                        </Flex>
                </Flex>
          </Box>
        </WrapItem>
      </Wrap>

<VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Бидний тухай</Heading>
        <Text as="p" fontSize="lg">

        Монголын анхны АЛТЕРНАТИВ сургууль. Амьдралд бэлэн ХҮЧИРХЭГ хүнийг бид 9-12-р ангиас нь бэлтгэнэ.
        </Text>
        <Text as="p" fontSize="lg">
        Монголын анхны АЛТЕРНАТИВ сургууль. Амьдралд бэлэн ХҮЧИРХЭГ хүнийг бид 9-12-р ангиас нь бэлтгэнэ.
        </Text>
        <Text as="p" fontSize="lg">
        Монголын анхны АЛТЕРНАТИВ сургууль. Амьдралд бэлэн ХҮЧИРХЭГ хүнийг бид 9-12-р ангиас нь бэлтгэнэ.
        </Text>
      </VStack>
    </Container>
  );
};

export default Home;