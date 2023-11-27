import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
//import { LoginUser } from "../Constant/url";
import { data } from "../Constant/user";

export default function Login() {
  const history = useNavigate();

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [userrole, setUserRole] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleSignIn = () => {
    const arrData = data.find(
      (data) => data.name === name && data.password === password
    );
    console.log(arrData);
    if (arrData) {
      if (arrData.role === "admin") {
        toast({
          title: "Account LoggedIn.",
          description: "We've LoggedIn your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        localStorage.clear();
        localStorage.setItem("name", arrData.name);
        history("/admin");
      } else if (arrData.role === "manager") {
        toast({
          title: "Account LoggedIn.",
          description: "We've LoggedIn your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        localStorage.clear();
        localStorage.setItem("name", arrData.name);
        history("/manager");
      } else {
        toast({
          title: "Account LoggedIn.",
          description: "We've LoggedIn your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        localStorage.clear();
        localStorage.setItem("name", arrData.name);
        history("/user");
      }
    }
  };

  /*   const handleSignIn = () => {
    setIsLoading(true);
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
          setIsLoading(false);
          // Success!
          toast({
            title: "Account LoggedIn.",
            description: "We've LoggedIn your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
         const jwt = response.headers.get("Authorization");
          const name = response.headers.get("FirstName");
          const userId = response.headers.get("UserId");
          localStorage.setItem("jwt", jwt);
          localStorage.setItem("firstName", name);
          localStorage.setItem("userId", userId); 
          history("/");
        } else {
          // Error!
          setIsLoading(false);
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
  }; */

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>

          <FormControl id="email">
            <FormLabel>User Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            {isLoading ? (
              <Spinner
                size="lg"
                color="red.400"
                alignSelf={"center"}
                colorScheme="teal"
                thickness="4px"
              />
            ) : (
              <Button onClick={handleSignIn}>Sign in</Button>
            )}
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
