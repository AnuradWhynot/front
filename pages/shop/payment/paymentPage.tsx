import React from "react";
import { Center, flexbox, Spinner, Flex, Container, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Text, Button,  Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CartProductMeta } from "../cart/CartProductMeta";

export default function PaymentPage  (){
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
          <Flex 
          flexDirection="column"
          bg={formBackground}
          p={12}
          borderRadius={8}
          boxShadow="lg">
            <Flex className="payment-row">
            </Flex>
            <Link href="/shop/cart/Cart">
              <Button
                rightIcon={<ExternalLinkIcon />}
                colorScheme="teal"
                mb={10}
                size="lg"
              >
                Return to Cart items
              </Button>
            </Link>

<Flex>
<Link fontSize="sm" textDecor="underline">
QPay here
</Link>
<Flex
align="center"
justifyContent="right"
></Flex>
</Flex>
            </Flex>
            </Flex>
            
  );
};

