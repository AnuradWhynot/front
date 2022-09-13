import React from "react";
import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Button,  Link, Image, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
        colorScheme="teal.400"
        mb={10}
        size="lg"
        textAlign='center'
        justifyContent='center'
        >
          Return to Cart items
          </Button>
          </Link>
          <Flex alignItems="center" justifyContent="center">
            <Box boxSize='sm'>
              <Link
              colorScheme="teal"
              mb={10}
              size="lg"
              textAlign='center'  
              justifyContent='center'
              >
                QPay
                </Link>
                <Image 
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"/>
                <Flex
                align="center"
                justifyContent="right"
                >
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  };
