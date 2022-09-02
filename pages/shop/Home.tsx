import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import CoffeeData from './coffee.data/data'
import Card from './Card'

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
      <Heading as="h1" style={{ color: 'purple' }}  >ELF SHOP</Heading>
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
      <Divider marginTop="5" />
      <Wrap spacing=" 10px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
          <div className="container">
                        <div className="row justify-content-center">
                                {CoffeeData.map(({name, src, price,}, index) => {
                                    return (
                                    <div className="col-md-3 col-sm-6 mb-5">
                                        <Card 
                                                name={name}
                                                src={src}
                                                price={price} description={undefined}                                        />
                                    </div>
                                    )
                                })}
                        </div>
                </div>



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