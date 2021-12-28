import React from "react";
import NextLink from "next/link";
import { Box, Grid, Heading, Text, Flex, Link } from "ui";
import { RadixLogo } from "@/components/RadixLogo";
import { BoxLink } from "@/components/BoxLink";

export const Footer = () => {
  return (
    <Box as="footer" css={{ pb: "$9" }}>
      <Grid
        css={{
          rowGap: "$7",
          columnGap: "$3",
          gridTemplateColumns: "repeat(2, 1fr)",
          "@bp1": { gridTemplateColumns: "repeat(2, 1fr)" },
          "@bp2": { gridTemplateColumns: "repeat(2, 1fr)" },
          "& ul": { listStyle: "none", margin: "0", padding: "0" },
        }}
      >
        <Flex
          align="start"
          direction="column"
          css={{ gridColumn: "1 / -1", "@bp2": { gridColumn: "auto" } }}
        >
          <NextLink href="/" passHref>
            <BoxLink>
              <Heading as="h3" size="2">
                easy
              </Heading>
            </BoxLink>
          </NextLink>

          <Text
            as="h6"
            size="2"
            css={{
              lineHeight: "20px",
              color: "$gray10",
              pr: "$8",
              mt: "$2",
            }}
          >
            A project by{" "}
            <Link variant="subtle" href="https://connect.easystreet.dev/">
              @easy-street
            </Link>
            .
          </Text>
        </Flex>

        <Flex
          align="start"
          css={{
            gridColumn: "1 / -1",
            "@bp2": { gridColumn: "auto" },
          }}
          direction="column"
        >
          <Heading as="h3" css={{ mb: "$3" }} size="2">
            site credit
          </Heading>

          <Flex align="center" gap="3">
            <NextLink href="https://radix-ui.com/" passHref>
              <BoxLink>
                <RadixLogo label="Radix homepage" />
              </BoxLink>
            </NextLink>

            <Text
              as="h6"
              size="2"
              css={{
                lineHeight: "20px",
                color: "$gray10",
                pr: "$8",
                mt: "$1",
              }}
            >
              by{" "}
              <Link variant="subtle" href="https://modulz.app">
                Modulz
              </Link>
              .
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
};
