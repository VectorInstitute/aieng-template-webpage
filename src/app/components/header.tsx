'use client';

import React, { memo } from 'react';
import { Box, Flex, Link, Container, Image, useBreakpointValue, IconButton, useDisclosure } from '@chakra-ui/react'
import { Drawer } from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const NavLinks: React.FC = memo(() => (
  <>
    <Link asChild>
      <NextLink href="/about" style={{ color: 'white', fontWeight: 600, fontFamily: "'Open Sans', sans-serif" }}>
        About
      </NextLink>
    </Link>
  </>
));

NavLinks.displayName = 'NavLinks';

const Header: React.FC = () => {
  const { open, onOpen, onClose } = useDisclosure()
  const logoSize = useBreakpointValue({ base: "120px", md: "150px" })
  const isMobile = useBreakpointValue({ base: true, md: false })
  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }

  return (
    <Box as="header" position="absolute" top={0} left={0} right={0} zIndex={10} bg="transparent">
      <Container maxW="1200px">
        <Flex justify="space-between" align="center" py={4}>
          <Box
            width={logoSize}
            height="40px"
            position="relative"
            cursor="pointer"
            onClick={handleLogoClick}
          >
            <Image
              src={`${basePath}/images/vector-logo.png`}
              alt="Vector Institute"
              objectFit="contain"
              width="100%"
              height="100%"
            />
          </Box>
          {isMobile ? (
            <>
              <IconButton
                aria-label="Open menu"
                onClick={onOpen}
                variant="outline"
                color="white"
              >
                <HamburgerIcon />
              </IconButton>
              <Drawer.Root open={open} placement="end" onOpenChange={(e) => e.open ? onOpen() : onClose()}>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content>
                    <Drawer.Header>
                      <Drawer.Title>Menu</Drawer.Title>
                      <Drawer.CloseTrigger />
                    </Drawer.Header>
                    <Drawer.Body>
                      <Flex direction="column" gap={4}>
                        <NavLinks />
                      </Flex>
                    </Drawer.Body>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Drawer.Root>
            </>
          ) : (
            <Flex gap={6}>
              <NavLinks />
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default memo(Header);
