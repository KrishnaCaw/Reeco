import React from 'react';
import { Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { FaShoppingCart, FaUserCircle, } from 'react-icons/fa';

const Header = () => {
  return (
   <Container maxW="100%" bg="green" h="50px">
    <Grid templateColumns="auto auto auto">
     <Grid templateColumns="auto auto auto" gap={40}>
        <GridItem textAlign="center">
          <Text color="#fff" >Reeco</Text>
        </GridItem>
        <Grid templateColumns="auto auto auto">
        {["Store", "Orders", "Analytics"].map((key, index) => (
                  <GridItem key={key} textAlign="left">
                    <Text
                      color="#fff"
                    >
                      {key}
                    </Text>
                  </GridItem>
                ))}
        </Grid>
     </Grid>
     <Grid templateColumns="auto auto auto" justifyContent="flex-end" alignItems="center" gap={40} ml={400}>
       <GridItem style={{position: 'relative'}}>
         <Text m="0">
         <FaShoppingCart color="#fff" />
          </Text>
         <Text color="#fff" style={{ position: 'absolute', top: -10, right: -10}} m="0">6</Text>
       </GridItem>
       <GridItem>
         <Text color="#fff">Hello Krishna</Text>
       </GridItem>
     </Grid>
     </Grid>
   </Container>
  );
};

export default Header;
