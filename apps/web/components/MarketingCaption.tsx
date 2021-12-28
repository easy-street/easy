import { styled, Text } from "ui";

export const MarketingCaption = styled(Text, {
  display: "inline-block",
  fontWeight: 500,
  lineHeight: "20px",

  "&[href]": {
    textDecoration: "none",
  },

  defaultVariants: {
    size: 3,
    variant: "teal",
  },
});
