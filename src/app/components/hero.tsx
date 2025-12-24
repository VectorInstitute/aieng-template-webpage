'use client';

import React, { useState, useEffect, memo } from 'react';
import { Box, Container, Heading, Text, VStack, useBreakpointValue, Skeleton } from '@chakra-ui/react'

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" }) as "2xl" | "3xl" | "4xl";
  const textSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" }) as "md" | "lg" | "xl";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      bgGradient="linear(to-r, brand.magenta, brand.cobalt)"
      position="relative"
      overflow="hidden"
      minHeight={{ base: "70vh", md: "80vh" }}
      pt={{ base: "80px", md: "100px" }}
    >
      <Container maxW="1200px" h="full" position="relative" zIndex={1}>
        <VStack
          gap={6}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent="center"
          h="full"
          maxW={{ base: "100%", md: "60%", lg: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Skeleton loading={isLoading}>
            <Heading as="h1" size={headingSize} color="white" fontWeight="semibold" fontFamily="'Karbon', 'Open Sans', sans-serif">
              Where AI possibilities come to life
            </Heading>
          </Skeleton>
          <Skeleton loading={isLoading}>
            <Text fontSize={textSize} color="white" fontFamily="'Open Sans', sans-serif">
              Remarkable in progress.
            </Text>
          </Skeleton>
        </VStack>
      </Container>
      <Box
        position="absolute"
        top={{ base: "60%", md: "40%" }}
        right={{ base: "-20%", md: "-5%" }}
        width={{ base: "120%", md: "70%" }}
        height={{ base: "100%", md: "140%" }}
        bg="white"
        borderTopLeftRadius={{ base: "30%", md: "50%" }}
        transform={{ base: "rotate(-5deg)", md: "rotate(-10deg)" }}
        boxShadow="0 -4px 30px rgba(0, 0, 0, 0.1)"
        transition="all 0.3s ease-in-out"
      />
    </Box>
  )
}

export default memo(Hero);
