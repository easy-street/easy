import React from 'react';
import { Text } from './Text';
import { VariantProps, CSS } from '../stitches.config';
declare const DEFAULT_TAG = "h1";
declare type HeadingSizeVariants = '1' | '2' | '3' | '4';
declare type HeadingVariants = {
    size?: HeadingSizeVariants;
} & Omit<VariantProps<typeof Text>, 'size'>;
declare type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> & HeadingVariants & {
    css?: CSS;
    as?: any;
};
export declare const Heading: React.ForwardRefExoticComponent<Pick<HeadingProps, "size" | "as" | "variant" | "gradient" | "key" | "css" | keyof React.HTMLAttributes<HTMLHeadingElement>> & React.RefAttributes<HTMLHeadingElement>>;
export {};
