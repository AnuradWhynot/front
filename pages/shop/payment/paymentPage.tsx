import React from "react";
import { Center, flexbox, Spinner, Flex, Container } from "@chakra-ui/react";
import { Text, Button,  Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CartProductMeta } from "../cart/cartProductMeta";

export default function PaymentPage  (){
  return (
        <Flex>
          <Flex >
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

