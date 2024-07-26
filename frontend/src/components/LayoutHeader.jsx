import React from "react";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const LayoutHeader = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticate);
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <>
      <Flex
        mx={"2em"}
        my={"2em"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link as={RouterLink} to={"/"}>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            Posting App
          </Text>
        </Link>

        {isAuth ? (
          <>
          <Flex gap={'1em'}>
            <Link as={RouterLink} to={"/create"}>
              <Button colorScheme="blue">Create Post</Button>
            </Link>
            <Link as={RouterLink} to={`/user/${userInfo?.userId}`}>
              <Button colorScheme="blue">{userInfo?.username}</Button>
            </Link>
          </Flex>
          </>
        ) : (
          <Link as={RouterLink} to={"/auth"}>
            <Button colorScheme="blue">Login/Signup</Button>
          </Link>
        )}
      </Flex>
    </>
  );
};

export default LayoutHeader;
