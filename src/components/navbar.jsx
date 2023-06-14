import { UnlockIcon } from "@chakra-ui/icons";
import {
  Heading,
  Button,
  Text,
  Box,
  Flex,
  HStack,
  Spacer,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Logged out.",
      description: "Successfully logged out",
      duration: 10000,
      isClosable: true,
      position: "top",
      status: "success",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>RAMAN@POOCHO.CO</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
    // <Flex bg="green.200" justify="space-around" wrap="wrap" gap="2">
    //   <Box w="150px" h='50px' bg="red" >1</Box>
    //   <Box w="150px" h='50px' bg="orange" flexGrow="0.5" >2</Box>
    //   <Box w="150px" h='50px' bg="blue" flexGrow="1">3</Box>
    //   <Box w="150px" h='50px' bg="yellow" flexGrow="2" >4</Box>

    // </Flex>
  );
}
