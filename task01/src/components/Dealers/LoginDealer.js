import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { LoginUser } from "../Constant/url";

export default function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const store = { Email: email, Password: password };
  const toast = useToast();
  const handleSignIn = () => {
    fetch(LoginUser, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(store),
    })
      .then((response) => {
        if (response.status === 200) {
          // Success!
          toast({
            title: "Account LoggedIn.",
            description: "We've LoggedIn your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          var value = response.headers.get("Authorization");
          var name = response.headers.get("FirstName");

          localStorage.setItem("jwt", value);
          localStorage.setItem("firstName", name);
          history("/dealersPortal");
        } else {
          // Error!
          toast({
            title: "LoggedIn Error.",
            description: "Record Not Found.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {});
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}>
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={handleSignIn}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
