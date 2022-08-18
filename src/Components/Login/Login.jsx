import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import axios from 'axios';
 import { loginSuccess } from '../../Redux/Login/action';
  export default function LoginCard() {
    const [user,setUser] = useState({
        password:"",
        username:"",
    })
  const [error,setError] = useState("")
    const createUser = (e) => {
        setError("");
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
         axios.post("https://masai-api-mocker.herokuapp.com/auth/login",user)
         .then((res) => {
            if(!res.data.error)
            {
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("login",true);
                dispatch(loginSuccess(res.data.token));
            }
            
         })
         .catch(err => setError("Invalid username or password"));
    }
    const dispatch = useDispatch();
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={user.password} onChange={createUser}/>
              </FormControl>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text" name="username" value={user.username} onChange={createUser}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}>
                  Sign in
                </Button>
                <Stack pt={0}>
              <Text align={"center"} color={"red.200"}>
                {error}
              </Text>
            </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }