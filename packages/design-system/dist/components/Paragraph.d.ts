import React from 'react';
import { Text } from './Text';
import { VariantProps, CSS } from '../stitches.config';
declare const DEFAULT_TAG = "p";
declare type ParagraphSizeVariants = '1' | '2';
declare type ParagraphVariants = {
    size?: ParagraphSizeVariants;
} & Omit<VariantProps<typeof Text>, 'size'>;
declare type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> & ParagraphVariants & {
    css?: CSS;
    as?: any;
};
export declare const Paragraph: React.ForwardRefExoticComponent<Pick<ParagraphProps, "size" | "as" | "variant" | "gradient" | "key" | "css" | keyof React.HTMLAttributes<HTMLParagraphElement>> & React.RefAttributes<HTMLParagraphElement>>;
export {};
