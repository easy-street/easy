import React from "react";
import NextLink from "next/link";
import { Box, Text, Container, Paragraph, Section } from "ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MarketingButton } from "@/components/marketing/MarketingButton";

export const MainHero = () => {
  return (
    <Section
      css={{
        paddingTop: "$4",
        // Starting at 850px viewport height, grow the padding top from $5 until it's $9.
        "@media (min-width: 900px) and (min-height: 850px)": {
          paddingTop: "min($9, calc($5 + 0.35 * (100vh - 850px)))",
        },
        pb: "$4",
      }}
    >
      <Container size="3">
        <Box css={{ mb: "$6" }}>
          <Text
            as="h1"
            size={{ "@initial": 8, "@bp1": 9 }}
            css={{
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "radial-gradient(circle, $hiContrast, $colors$indigo12)",
              // Use padding rather than margin, or otherwise some descenders
              // may be clipped with WebkitBackgroundClip: 'text'
              pb: "$4",
              // Same issue, letters may be clipped horizontally
              px: "$2",
              mx: "-$2",
              fontWeight: 500,
              fontSize: "min(max($8, 11.2vw), $9)",
              letterSpacing: "max(min(-0.055em, -0.66vw), -0.07em)",
              "@media (min-width: 900px) and (min-height: 850px)": {
                fontSize: "80px",
                lineHeight: "0.85",
              },
            }}
          >
            Business logic
            <br />
            with Supabase
            <br />
            and Next.js
          </Text>
          <Box css={{ maxWidth: 500, mb: "$5" }}>
            <Paragraph css={{ color: "$slate12" }} size="2" as="p">
              Work with Supabase in a familiar Next.js paradigm. Add business
              logic in services implemented with PostgREST or Prisma.
            </Paragraph>
          </Box>
          <NextLink href="https://github.com/easy-street/easy" passHref>
            <MarketingButton as="a" icon={ArrowRightIcon}>
              GitHub
            </MarketingButton>
          </NextLink>
        </Box>
      </Container>
    </Section>
  );
};
