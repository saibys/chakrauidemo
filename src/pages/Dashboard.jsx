import { Heading, Text, Container } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Container>
      <Heading my="30px" p="10px">
        Chakra UI
      </Heading>
      <Text ml="20px">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        repellendus officiis labore nulla suscipit similique nisi ea
        consequuntur impedit! Repellendus, aperiam est dolor consequatur sunt
        earum dolores totam odit placeat?
      </Text>
      <Text marginLeft="20px" color="red.300" fontWeight="bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        repellendus officiis labore nulla suscipit similique nisi ea
        consequuntur impedit! Repellendus, aperiam est dolor consequatur sunt
        earum dolores totam odit placeat?
      </Text>
    </Container>
  );
}
