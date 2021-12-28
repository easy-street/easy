import React from "react";
import NextLink from "next/link";
import { Box, Container, Flex, Heading, Link } from "ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BoxLink } from "@/components/BoxLink";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <Box as="header">
      <Container size="4">
        <Flex align="center" justify="between" css={{ height: "$8" }}>
          <NextLink href="/" passHref>
            <BoxLink>
              <Heading as="h3" size="2">
                easy
              </Heading>
            </BoxLink>
          </NextLink>

          <Flex
            align="center"
            gap={{ "@initial": 4, "@bp2": 5 }}
            // Baseline align with the logo
            css={{ mb: -2 }}
          >
            <Box css={{ display: "contents" }}>
              <Link
                href="/docs"
                variant="subtle"
                target="_blank"
                css={{ display: "inline-flex", alignItems: "center" }}
              >
                API
                <Flex as="span">
                  <ArrowTopRightIcon />
                </Flex>
              </Link>

              <Link
                href="https://github.com/easy-street/easy"
                variant="subtle"
                target="_blank"
                css={{ display: "inline-flex", alignItems: "center" }}
              >
                GitHub
                <Flex as="span">
                  <ArrowTopRightIcon />
                </Flex>
              </Link>
            </Box>

            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
