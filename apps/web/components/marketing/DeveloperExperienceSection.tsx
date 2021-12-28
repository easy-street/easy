import React from "react";
import {
  Box,
  Grid,
  Text,
  styled,
  Container,
  Flex,
  Heading,
  Paragraph,
  Section,
  Card,
  darkTheme,
} from "ui";
import { MarketingCaption } from "@/components/marketing/MarketingCaption";
import { CodeDemo } from "@/components/marketing/CodeDemo";

enum Highlights {
  GetOne = "1-5",
  Paginated = "7-14",
  Filtered = "15-22",
  FilterRelations = "23-29",
}

export const DeveloperExperienceSection = () => {
  const [activeHighlight, setActiveHighlight] = React.useState<Highlights>(
    Highlights.GetOne
  );

  return (
    <Section
      css={{
        overflow: "hidden",
        backgroundColor: "$sky6",
        background: `
          radial-gradient(ellipse at 100% 100%, hsl(254 100% 6% / 0.07), $violetA1, transparent),
          linear-gradient(to bottom right, $mint3, $blue4, $plum4, $indigo5)
        `,
        [`&.${darkTheme}`]: {
          background: "linear-gradient(to bottom right, $sky2, $cyan2, $cyan6)",
        },
        py: "$7",
      }}
    >
      <Container size="3">
        <Grid
          gap={{ "@initial": 5, "@bp3": 8 }}
          css={{ "@bp2": { gridTemplateColumns: "auto 1fr" } }}
        >
          <Box css={{ "@bp2": { maxWidth: 420 } }}>
            <MarketingCaption css={{ mb: "$1" }}>
              Made for Next.js
            </MarketingCaption>
            <Heading as="h2" size="3" css={{ mb: "$4" }}>
              Develop with a unified API
            </Heading>

            <Paragraph css={{ mb: "$5", maxWidth: 500 }}>
              A consistent API is exposed as a Next.js catch all API Route.
              Implement services with PostgREST or Prisma.
            </Paragraph>

            <Box
              css={{
                width: "100vw",
                pl: "$5",
                mx: "-$5",
                // Don't cut off box shadows
                py: "$1",
                overflowX: "scroll",
                overflowY: "hidden",
                WebkitOverflowScrolling: "touch",
                MsOverflowStyle: "none",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "@bp2": {
                  display: "none",
                },
              }}
            >
              <Grid
                gapX={{
                  "@initial": 3,
                  "@bp1": 5,
                }}
                gapY={3}
                flow="column"
                css={{
                  gridTemplateColumns: "repeat(4, max-content) 1px",
                  gridTemplateRows: "205px auto",
                }}
              >
                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.fetchSingle}
                    language="jsx"
                    css={{ p: "$2" }}
                  />
                </CodeWindow>
                <Box>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Get one
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch a single record by <code>id</code>
                  </Text>
                </Box>

                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.fetchPaginated}
                    language="jsx"
                    css={{ p: "$2" }}
                  />
                </CodeWindow>
                <Box>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Get page
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch a page of records
                  </Text>
                </Box>

                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.filter}
                    language="jsx"
                    css={{ p: "$2" }}
                  />
                </CodeWindow>
                <Box>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Filter
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch filtered records
                  </Text>
                </Box>

                <CodeWindow className={darkTheme}>
                  <StyledCodeDemo
                    value={code.filterRelations}
                    language="jsx"
                    css={{ p: "$2" }}
                  />
                </CodeWindow>
                <Box>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Filter on relations
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch records filtered by properties of a relation
                  </Text>
                </Box>

                <Box />
              </Grid>
            </Box>

            <Flex
              gap="1"
              direction="column"
              css={{ ml: "-$3", display: "none", "@bp2": { display: "flex" } }}
            >
              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.GetOne)}
                onClick={() => setActiveHighlight(Highlights.GetOne)}
                variant={
                  activeHighlight === Highlights.GetOne ? "active" : "ghost"
                }
              >
                <Box css={{ p: "$3" }}>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Get one
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch a single record by <code>id</code>
                  </Text>
                </Box>
              </BlendedCard>

              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.Paginated)}
                onClick={() => setActiveHighlight(Highlights.Paginated)}
                variant={
                  activeHighlight === Highlights.Paginated ? "active" : "ghost"
                }
              >
                <Box css={{ p: "$3" }}>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Get page
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch a page of records
                  </Text>
                </Box>
              </BlendedCard>

              <BlendedCard
                as="button"
                onMouseDown={() => setActiveHighlight(Highlights.Filtered)}
                onClick={() => setActiveHighlight(Highlights.Filtered)}
                variant={
                  activeHighlight === Highlights.Filtered ? "active" : "ghost"
                }
              >
                <Box css={{ p: "$3" }}>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Filter
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch filtered records
                  </Text>
                </Box>
              </BlendedCard>

              <BlendedCard
                as="button"
                onMouseDown={() =>
                  setActiveHighlight(Highlights.FilterRelations)
                }
                onClick={() => setActiveHighlight(Highlights.FilterRelations)}
                variant={
                  activeHighlight === Highlights.FilterRelations
                    ? "active"
                    : "ghost"
                }
              >
                <Box css={{ p: "$3" }}>
                  <Text
                    as="h3"
                    size="3"
                    css={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    Filter on relations
                  </Text>
                  <Text
                    as="p"
                    size="3"
                    css={{ lineHeight: 1.5, color: "$slateA11" }}
                  >
                    Fetch records filtered by properties of a relation
                  </Text>
                </Box>
              </BlendedCard>
            </Flex>
          </Box>

          <Box
            css={{
              position: "relative",
              minWidth: 480,
              display: "none",
              "@bp2": { display: "block" },
            }}
          >
            <CodeWindow
              withChrome
              className={darkTheme}
              css={{ position: "absolute", inset: 0, overflow: "hidden" }}
            >
              <StyledCodeDemo
                language="jsx"
                value={allCode}
                line={activeHighlight}
                data-invert-line-highlight="false"
                css={{
                  padding: 0,
                  height: "100%",
                  userSelect: "auto",
                  $$background: "transparent",
                  $$text: "$colors$cyan12",
                  $$outline: "none",
                  $$syntax1: "$colors$purple11",
                  // $$syntax2: '$colors$cyan11',
                  $$syntax2: "$colors$cyan11",
                  $$syntax3: "$colors$crimson11",
                  $$syntax4: "$$text",
                  $$comment: "$colors$slateA11",
                  $$removed: "$colors$crimson11",
                  $$added: "$colors$teal11",
                  $$fadedLines: "$colors$slateA8",
                }}
              />
            </CodeWindow>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};

const StyledCodeDemo = React.forwardRef<
  HTMLPreElement,
  React.ComponentProps<typeof CodeDemo>
>(({ css, ...props }, forwardedRef) => (
  <CodeDemo
    ref={forwardedRef}
    data-invert-line-highlight="false"
    css={{
      padding: 0,
      height: "100%",
      userSelect: "auto",
      $$background: "transparent",
      $$text: "$colors$cyan12",
      $$outline: "none",
      $$syntax1: "$colors$purple11",
      // $$syntax2: '$colors$cyan11',
      $$syntax2: "$colors$cyan11",
      $$syntax3: "$colors$crimson11",
      $$syntax4: "$$text",
      $$comment: "$colors$slateA11",
      $$removed: "$colors$crimson11",
      $$added: "$colors$teal11",
      $$fadedLines: "$colors$slateA8",
      ...css,
    }}
    {...props}
  />
));

const CodeWindow = styled("div", {
  $$bgColor: "$colors$sky1",
  [`&.${darkTheme}`]: {
    $$bgColor: "$colors$sky2",
  },
  [`.${darkTheme} &.${darkTheme}`]: {
    $$bgColor: "$colors$violet1",
  },

  position: "relative",
  bc: "$$bgColor",
  br: "$4",

  variants: {
    withChrome: {
      true: {
        px: "$2",
        pt: "$6",
        pb: "$2",
        boxShadow: "0 50px 100px -50px hsl(254 100% 6% / 0.7)",
        "&::before": {
          position: "absolute",
          top: 10,
          left: 10,
          width: 52,
          height: 12,
          content: '""',
          background: `
        radial-gradient(circle closest-side at 6px, $slateA7 90%, #FFFFFF00),
        radial-gradient(circle closest-side at 24px, $slateA7 90%, #FFFFFF00),
        radial-gradient(circle closest-side at 42px, $slateA7 90%, #FFFFFF00)
        `,
        },
        "&::after": {
          position: "absolute",
          top: 8,
          left: 0,
          right: 0,
          fontFamily: "$untitled",
          fontSize: "$1",
          textAlign: "center",
          color: "$slate9",
          content: '"UnifiedApi.jsx"',
        },
      },
    },
  },
});

const BlendedCard = styled(Card, {
  $$shadowColor: "$colors$skyA12",
  $$bgColor: "$colors$plum1",
  [`.${darkTheme} &`]: {
    $$shadowColor: "$colors$blackA12",
    $$bgColor: "$colors$whiteA4",
  },

  cursor: "default",
  position: "relative",
  zIndex: 1,
  willChange: "transform",
  backgroundColor: "$$bgColor",
  "&::before": {
    boxShadow: "0 0 0 1px $colors$blackA3",
  },

  // Fix a bug when hovering at card edges would cause the card to jitter because of transform
  "@hover": {
    "&:hover::after": {
      content: "",
      inset: -3,
      position: "absolute",
    },
  },

  variants: {
    variant: {
      active: {
        "&::before": {
          boxShadow: "0px 4px 16px -12px $$shadowColor",
        },
        "&:active": {
          transition: "transform 150ms cubic-bezier(0.22, 1, 0.36, 1)",
        },
        "&:focus:not(:focus-visible)": {
          boxShadow: "none",
        },
      },
      ghost: {
        "&::before": {
          boxShadow: "0px 4px 16px -12px $$shadowColor",
        },
        "@hover": {
          "&:hover": {
            backgroundColor: "$$bgColor",
          },
        },
        "&:focus:not(:focus-visible)": {
          boxShadow: "none",
        },
      },
    },
  },
});

const code = {
  fetchSingle: `// Fetch a single record by id
export const FetchSingle = ({ id }) => {
  const { data: post } = useSWR(\`/api/posts/\${id}\`);
  return (...);
};`,

  fetchPaginated: `// Fetch a page of records
export const FetchPage = ({ skip, limit }) => {
  const { data: posts } = useSWR(
    \`/api/posts?\${qs.stringify({ $skip: skip, $limit: limit })}\`
  );
  return (...);
};`,

  filter: `// Fetch filtered records
export const FetchFiltered = ({ foo }) => {
  const { data: posts } = useSWR(
    \`/api/posts?foo=\${foo}\`
  );
  return (...);
};`,

  filterRelations: `// Fetch records filtered by properties of a relation
export const FetchFilteredOnRelation = ({ email }) => {
  const { data: posts } = useSWR(
    \`/api/posts?user.email=\${email}\`
  );
  return (...);
};`,
};

const allCode = [
  code.fetchSingle,
  code.fetchPaginated,
  code.filter,
  code.filterRelations,
].join("\n\n");
