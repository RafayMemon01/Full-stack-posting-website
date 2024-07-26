import { Box, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { register } from "../../features/user/userSlice";

const SignUpComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (inputs.password !== inputs.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Dispatch the action to set isAuthenticate to true
    dispatch(register({ email: inputs.email, username: inputs.username }));

    console.log(inputs); // Optionally log inputs
  };

  return (
    <form onSubmit={handleSignUp}>
      <Box display={"flex"} flexDir={"column"} gap={2} my={10}>
        <Text fontSize={"24px"} fontWeight={"bold"}>
          Register
        </Text>

        <Input
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          size={"lg"}
          required
          type="email"
          placeholder="Email"
        />
        <Input
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          size={"lg"}
          required
          type="text"
          placeholder="Username"
        />
        <InputGroup>
          <Input
            size={"lg"}
            required
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            minLength={6}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
        <InputGroup>
          <Input
            size={"lg"}
            required
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            minLength={6}
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
          <InputRightElement h="full">
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box display={"flex"} justifyContent={"end"}>
          <Button colorScheme="blue" type="submit">
            Sign Up
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default SignUpComponent;
