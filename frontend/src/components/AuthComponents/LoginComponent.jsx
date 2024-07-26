import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <Box display={"flex"} flexDir={"column"} gap={2} my={10}>
            <Text fontSize={'24px'} fontWeight={'bold'}>Login</Text>
          <Input
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            size={"lg"}
            required
            type="email"
            placeholder="Email"
          />
          <InputGroup>
            <Input
              size={"lg"}
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              minLength={6}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <InputRightElement h="full">
              <Button
                variant={"ghost"}
                size={"sm"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Box display={"flex"} justifyContent={"end"}>
            <Button colorScheme="blue" type="submit">
              Login
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default LoginComponent;
