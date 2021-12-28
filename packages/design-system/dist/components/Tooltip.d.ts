import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
declare type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root> & React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
};
export declare function Tooltip({ children, content, open, defaultOpen, onOpenChange, multiline, ...props }: TooltipProps): JSX.Element;
export {};
