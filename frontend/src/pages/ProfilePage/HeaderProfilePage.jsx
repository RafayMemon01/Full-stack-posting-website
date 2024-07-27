import { Avatar, Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const HeaderProfilePage = ({ userInfo }) => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box display={"flex"} alignItems={"center"} gap={10}>
        <Avatar
          draggable={false}
          size={"xl"}
          borderRadius={"full"}
          src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg"
        />
        <Box display={"flex"} flexDir={"column"}>
          <Text fontWeight={"bold"} fontSize={"22px"}>
            {userInfo.username}
          </Text>
          <Text fontSize={"16px"}>Hello This is John Doe Bio</Text>
          <Button>Follow</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderProfilePage;
