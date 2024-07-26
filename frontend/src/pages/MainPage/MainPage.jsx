import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const MainPage = () => {
  const navigate = useNavigate()
  return (
    <Flex h={'80vh'} justifyContent={'space-evenly'} flexWrap={'wrap'} align="center" p="2em">
      {/* <Flex
        w="100%"
        h="0"
        pb="100%"
        position="relative"
        mb="4"
      >
        <iframe
          src="https://giphy.com/embed/0IAPszdB8MMjPxNhFL"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Exciting GIF"
        ></iframe>
      </Flex> */}
      <Image draggable={"false"} src="https://i.giphy.com/0IAPszdB8MMjPxNhFL.webp" />
      <Box alignItems={'start'} display={'flex'} flexDir={'column'}>

      <Text fontSize="5xl" fontWeight={"bold"} mb="1">Posting Platform</Text>
      <Text fontSize="3 xl" mb="4">With MERN STACK</Text>
      
      <Button onClick={()=>navigate('/feeds')} _hover={{bg:"transparent", color:"#2b6cb0"}} display={'flex'} gap={3} m={0} p={0} bg={'transparent'}>Start Reading <FaArrowRightLong />
      </Button>
      </Box>

      
    </Flex>
  );
};

export default MainPage;
