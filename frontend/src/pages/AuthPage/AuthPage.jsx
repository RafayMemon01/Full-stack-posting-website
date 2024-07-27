import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import LoginComponent from '../../components/AuthComponents/LoginComponent';
import SignUpComponent from '../../components/AuthComponents/SignUpComponent';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isAuth = useSelector((state) => state.user.isAuthenticate);
  const navigate = useNavigate()

  if(isAuth){
    navigate('/feeds')
    return;
  }


  return (
    <Box flexDir={'column'} h={'80vh'} alignItems={'center'}  display={'flex'}>
      <Text fontSize={"24px"} fontWeight={"bold"}>
            lets connect with each other
      </Text>
      {isLogin ? <LoginComponent /> : <SignUpComponent />}
      <Box>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={2} fontFamily={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default AuthPage
