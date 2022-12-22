import React from 'react';
import {
  Card,
  Text,
  CardHeader,
  CardBody,
  Heading,
  CardFooter,
  Flex,
  Icon,
  Box,
  Stack,
  StackDivider,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { GrLocation } from 'react-icons/gr';

const Main = () => {
  const [isLargerThan1350] = useMediaQuery('(min-width: 1350px)');

  const bagsNormal = 'black';
  const bagsDesktop = 'blue';

  return (
    <Box position="relative" padding="20px">
      <Flex position="absolute" right="24px" top="10px" zIndex="3">
        <Button backgroundColor="brand.purpleTxt" width="121px" height="24px" borderRadius="6px" color="white">
          Good Fit
        </Button>
      </Flex>

      <Card
        maxWidth="432px"
        height="100%"
        borderWidth="2.25px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 4px 4px #C8C6C6"
        borderColor="#868686"
        zIndex="2"
      >
        <CardHeader>
          <Heading
            mt="1"
            fontWeight="700"
            lineHeight="tight"
            noOfLines={1}
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            position="absolute"
          >
            Revenue Based Finance
          </Heading>
        </CardHeader>
        <Stack divider={<StackDivider borderColor="#868686" borderBottomWidth="2px !important" />} spacing="2">
          <CardBody>
            <Box>
              <Text fontWeight="600" as="h2" marginTop="7px">
                By Lendistry
              </Text>
              <Flex align="center" marginTop="9px">
                <Icon marginRight="16px" as={GrLocation} />
                <Text font fontWeight="600">
                  Location
                </Text>
              </Flex>
              <Text fontWeight="600" marginTop="14px">
                Get Funded in <span style={{ fontWeight: 'bold' }}>12 days</span>
              </Text>
            </Box>
          </CardBody>
          <CardFooter p="10px">
            <Text color="brand.purpleTxt" fontWeight="700">
              $10,000 - $1,000,000
            </Text>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        maxWidth="432px"
        height="100%"
        borderWidth="2.25px"
        borderRadius="12px"
        borderTopRadius="none"
        overflow="hidden"
        boxShadow="0px 4px 4px #C8C6C6"
        borderColor="#C8C6C6"
        marginTop="-10px"
        borderTop="none"
      >
        <CardHeader>
          <Flex direction="row" justify="space-between" paddingTop="20px">
            <Heading mt="1" fontWeight="700" lineHeight="tight" noOfLines={1} fontSize="24px">
              About the Lender
            </Heading>
            <Button
              fontWeight="700"
              backgroundColor={isLargerThan1350 ? bagsDesktop : bagsNormal}
              variant="solid"
              color="white"
              borderRadius="6px"
              width="130px"
              height="32px"
            >
              Learn More
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>
          <Box>
            <Text>
              Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns asabsqh sw whhdi dw ppwd euy4h dbdjq jeeoi
              nd.
            </Text>
          </Box>
          <Flex direction="column" gap="20px" marginTop="30px">
            <Flex backgroundColor="#ECEAF2" borderRadius="24px" p="5px 18px" color="brand.purpleTxt" fontWeight="700">
              Lender Benefit
            </Flex>
            <Flex backgroundColor="#ECEAF2" borderRadius="24px" p="5px 18px" color="brand.purpleTxt" fontWeight="700">
              Lender Benefit
            </Flex>
            <Flex backgroundColor="#ECEAF2" borderRadius="24px" p="5px 18px" color="brand.purpleTxt" fontWeight="700">
              Lender Benefit
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Main;
