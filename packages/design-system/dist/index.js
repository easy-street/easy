'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@stitches/react');
var colors = require('@radix-ui/colors');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var reactIcons = require('@radix-ui/react-icons');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var reactAspectRatio = require('@radix-ui/react-aspect-ratio');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var ContextMenuPrimitive = require('@radix-ui/react-context-menu');
var MenuPrimitive = require('@radix-ui/react-menu');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var DialogPrimitive = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var merge = require('lodash.merge');
var PopoverPrimitive = require('@radix-ui/react-popover');
var reactPortal = require('@radix-ui/react-portal');
var ProgressPrimitive = require('@radix-ui/react-progress');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var TogglePrimitive = require('@radix-ui/react-toggle');
var SliderPrimitive = require('@radix-ui/react-slider');
var SwitchPrimitive = require('@radix-ui/react-switch');
var TabsPrimitive = require('@radix-ui/react-tabs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var _a;
var styled = (_a = react.createStitches({
    theme: {
        colors: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, colors.gray), colors.mauve), colors.slate), colors.sage), colors.olive), colors.sand), colors.tomato), colors.red), colors.crimson), colors.pink), colors.plum), colors.purple), colors.violet), colors.indigo), colors.blue), colors.sky), colors.mint), colors.cyan), colors.teal), colors.green), colors.grass), colors.lime), colors.yellow), colors.amber), colors.orange), colors.brown), colors.bronze), colors.gold), colors.grayA), colors.mauveA), colors.slateA), colors.sageA), colors.oliveA), colors.sandA), colors.tomatoA), colors.redA), colors.crimsonA), colors.pinkA), colors.plumA), colors.purpleA), colors.violetA), colors.indigoA), colors.blueA), colors.skyA), colors.mintA), colors.cyanA), colors.tealA), colors.greenA), colors.grassA), colors.limeA), colors.yellowA), colors.amberA), colors.orangeA), colors.brownA), colors.bronzeA), colors.goldA), colors.whiteA), colors.blackA), { 
            // Semantic colors
            hiContrast: '$slate12', 
            // loContrast: '$slate1',
            loContrast: 'white', canvas: 'hsl(0 0% 93%)', panel: 'white', transparentPanel: 'hsl(0 0% 0% / 97%)', shadowLight: 'hsl(206 22% 7% / 35%)', shadowDark: 'hsl(206 22% 7% / 20%)' }),
        fonts: {
            untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        // space: {
        //   1: '4px',
        //   2: '8px',
        //   3: '16px',
        //   4: '20px',
        //   5: '24px',
        //   6: '32px',
        //   7: '48px',
        //   8: '64px',
        //   9: '80px',
        // },
        // sizes: {
        //   1: '4px',
        //   2: '8px',
        //   3: '16px',
        //   4: '20px',
        //   5: '24px',
        //   6: '32px',
        //   7: '48px',
        //   8: '64px',
        //   9: '80px',
        // },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
            4: '17px',
            5: '19px',
            6: '21px',
            7: '27px',
            8: '35px',
            9: '59px',
        },
        // fontSizes: {
        //   1: '11px',
        //   2: '12px',
        //   3: '15px',
        //   4: '17px',
        //   5: '20px',
        //   6: '22px',
        //   7: '28px',
        //   8: '36px',
        //   9: '60px',
        // },
        radii: {
            1: '4px',
            2: '6px',
            3: '8px',
            4: '12px',
            round: '50%',
            pill: '9999px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
    },
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
    utils: {
        p: function (value) { return ({
            padding: value,
        }); },
        pt: function (value) { return ({
            paddingTop: value,
        }); },
        pr: function (value) { return ({
            paddingRight: value,
        }); },
        pb: function (value) { return ({
            paddingBottom: value,
        }); },
        pl: function (value) { return ({
            paddingLeft: value,
        }); },
        px: function (value) { return ({
            paddingLeft: value,
            paddingRight: value,
        }); },
        py: function (value) { return ({
            paddingTop: value,
            paddingBottom: value,
        }); },
        m: function (value) { return ({
            margin: value,
        }); },
        mt: function (value) { return ({
            marginTop: value,
        }); },
        mr: function (value) { return ({
            marginRight: value,
        }); },
        mb: function (value) { return ({
            marginBottom: value,
        }); },
        ml: function (value) { return ({
            marginLeft: value,
        }); },
        mx: function (value) { return ({
            marginLeft: value,
            marginRight: value,
        }); },
        my: function (value) { return ({
            marginTop: value,
            marginBottom: value,
        }); },
        ta: function (value) { return ({ textAlign: value }); },
        fd: function (value) { return ({ flexDirection: value }); },
        fw: function (value) { return ({ flexWrap: value }); },
        ai: function (value) { return ({ alignItems: value }); },
        ac: function (value) { return ({ alignContent: value }); },
        jc: function (value) { return ({ justifyContent: value }); },
        as: function (value) { return ({ alignSelf: value }); },
        fg: function (value) { return ({ flexGrow: value }); },
        fs: function (value) { return ({ flexShrink: value }); },
        fb: function (value) { return ({ flexBasis: value }); },
        bc: function (value) { return ({
            backgroundColor: value,
        }); },
        br: function (value) { return ({
            borderRadius: value,
        }); },
        btrr: function (value) { return ({
            borderTopRightRadius: value,
        }); },
        bbrr: function (value) { return ({
            borderBottomRightRadius: value,
        }); },
        bblr: function (value) { return ({
            borderBottomLeftRadius: value,
        }); },
        btlr: function (value) { return ({
            borderTopLeftRadius: value,
        }); },
        bs: function (value) { return ({ boxShadow: value }); },
        lh: function (value) { return ({ lineHeight: value }); },
        ox: function (value) { return ({ overflowX: value }); },
        oy: function (value) { return ({ overflowY: value }); },
        pe: function (value) { return ({ pointerEvents: value }); },
        us: function (value) { return ({
            WebkitUserSelect: value,
            userSelect: value,
        }); },
        userSelect: function (value) { return ({
            WebkitUserSelect: value,
            userSelect: value,
        }); },
        size: function (value) { return ({
            width: value,
            height: value,
        }); },
        appearance: function (value) { return ({
            WebkitAppearance: value,
            appearance: value,
        }); },
        backgroundClip: function (value) { return ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }); },
    },
}), _a.styled), css = _a.css, theme = _a.theme, createTheme = _a.createTheme, getCssText = _a.getCssText, globalCss = _a.globalCss, keyframes = _a.keyframes, config = _a.config, reset = _a.reset;
var darkTheme = createTheme('dark-theme', {
    colors: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, colors.grayDark), colors.mauveDark), colors.slateDark), colors.sageDark), colors.oliveDark), colors.sandDark), colors.tomatoDark), colors.redDark), colors.crimsonDark), colors.pinkDark), colors.plumDark), colors.purpleDark), colors.violetDark), colors.indigoDark), colors.blueDark), colors.skyDark), colors.mintDark), colors.cyanDark), colors.tealDark), colors.greenDark), colors.grassDark), colors.limeDark), colors.yellowDark), colors.amberDark), colors.orangeDark), colors.brownDark), colors.bronzeDark), colors.goldDark), colors.grayDarkA), colors.mauveDarkA), colors.slateDarkA), colors.sageDarkA), colors.oliveDarkA), colors.sandDarkA), colors.tomatoDarkA), colors.redDarkA), colors.crimsonDarkA), colors.pinkDarkA), colors.plumDarkA), colors.purpleDarkA), colors.violetDarkA), colors.indigoDarkA), colors.blueDarkA), colors.skyDarkA), colors.mintDarkA), colors.cyanDarkA), colors.tealDarkA), colors.greenDarkA), colors.grassDarkA), colors.limeDarkA), colors.yellowDarkA), colors.amberDarkA), colors.orangeDarkA), colors.brownDarkA), colors.bronzeDarkA), colors.goldDarkA), { 
        // Semantic colors
        hiContrast: '$slate12', loContrast: '$slate1', canvas: 'hsl(0 0% 15%)', panel: '$slate3', transparentPanel: 'hsl(0 100% 100% / 97%)', shadowLight: 'hsl(206 22% 7% / 35%)', shadowDark: 'hsl(206 22% 7% / 20%)' }),
});

var StyledAccordion = styled(AccordionPrimitive.Root, {});
var Accordion = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledAccordion, __assign({ ref: forwardedRef }, props, (props.type === 'single' ? { collapsible: true } : {})), children));
});
var StyledItem = styled(AccordionPrimitive.Item, {
    borderTop: '1px solid $colors$slate6',
    '&:last-of-type': {
        borderBottom: '1px solid $colors$slate6',
    },
});
var StyledHeader = styled(AccordionPrimitive.Header, {
    all: 'unset',
});
var StyledTrigger = styled(AccordionPrimitive.Trigger, {
    all: 'unset',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '$2',
    color: '$hiContrast',
    width: '100%',
    '@hover': {
        '&:hover': {
            backgroundColor: '$slate2',
        },
    },
    '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
    },
    svg: {
        transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
    },
    '&[data-state="open"]': {
        svg: {
            transform: 'rotate(180deg)',
        },
    },
});
var AccordionTrigger = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledHeader, null,
        React__default['default'].createElement(StyledTrigger, __assign({}, props, { ref: forwardedRef }),
            children,
            React__default['default'].createElement(reactIcons.ChevronDownIcon, null))));
});
var StyledContent = styled(AccordionPrimitive.Content, {
    p: '$2',
});
var AccordionItem = StyledItem;
var AccordionContent = StyledContent;

var Alert = styled('div', {
    // Reset
    boxSizing: 'border-box',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    border: '1px solid',
    borderRadius: '$2',
    variants: {
        size: {
            '1': {
                p: '$3',
            },
        },
        variant: {
            loContrast: {
                backgroundColor: '$loContrast',
                borderColor: '$slate6',
            },
            gray: {
                backgroundColor: '$slate2',
                borderColor: '$slate6',
            },
            blue: {
                backgroundColor: '$blue2',
                borderColor: '$blue6',
            },
            green: {
                backgroundColor: '$green2',
                borderColor: '$green6',
            },
            red: {
                backgroundColor: '$red2',
                borderColor: '$red6',
            },
        },
    },
    defaultVariants: {
        size: '1',
        variant: 'gray',
    },
});

var overlayStyles = css({
    backgroundColor: 'rgba(0, 0, 0, .15)',
});
var Overlay = styled('div', overlayStyles);

var panelStyles = css({
    backgroundColor: '$panel',
    borderRadius: '$3',
    boxShadow: '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px',
});
var Panel = styled('div', panelStyles);

var StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});
function AlertDialog(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React__default['default'].createElement(AlertDialogPrimitive.Root, __assign({}, props), children);
}
var StyledContent$1 = styled(AlertDialogPrimitive.Content, panelStyles, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 200,
    maxHeight: '85vh',
    padding: '$4',
    marginTop: '-5vh',
    '&:focus': {
        outline: 'none',
    },
});
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogTitle = AlertDialogPrimitive.Title;
var AlertDialogDescription = AlertDialogPrimitive.Description;
var AlertDialogAction = AlertDialogPrimitive.Action;
var AlertDialogCancel = AlertDialogPrimitive.Cancel;
var AlertDialogContent = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(AlertDialogPrimitive.Portal, null,
        React__default['default'].createElement(StyledOverlay, null),
        React__default['default'].createElement(StyledContent$1, __assign({}, props, { ref: forwardedRef }), children)));
});

var Box = styled('div', {
    // Reset
    boxSizing: 'border-box',
});

var Status = styled('div', {
    borderRadius: '50%',
    flexShrink: 0,
    variants: {
        size: {
            '1': {
                width: 5,
                height: 5,
            },
            '2': {
                width: 9,
                height: 9,
            },
        },
        variant: {
            gray: {
                backgroundColor: '$slate7',
            },
            blue: {
                backgroundColor: '$blue9',
            },
            green: {
                backgroundColor: '$green9',
            },
            yellow: {
                backgroundColor: '$yellow9',
            },
            red: {
                backgroundColor: '$red9',
            },
        },
    },
    defaultVariants: {
        size: '2',
        variant: 'gray',
    },
});

var _a$1;
var StyledAvatar = styled(AvatarPrimitive.Root, {
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    position: 'relative',
    border: 'none',
    fontFamily: 'inherit',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    padding: '0',
    fontWeight: '500',
    color: '$hiContrast',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit',
        boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
    },
    variants: {
        size: {
            '1': {
                width: '$3',
                height: '$3',
            },
            '2': {
                width: '$5',
                height: '$5',
            },
            '3': {
                width: '$6',
                height: '$6',
            },
            '4': {
                width: '$7',
                height: '$7',
            },
            '5': {
                width: '$8',
                height: '$8',
            },
            '6': {
                width: '$9',
                height: '$9',
            },
        },
        variant: {
            hiContrast: {
                backgroundColor: '$hiContrast',
                color: '$loContrast',
            },
            gray: {
                backgroundColor: '$slate5',
            },
            tomato: {
                backgroundColor: '$tomato5',
            },
            red: {
                backgroundColor: '$red5',
            },
            crimson: {
                backgroundColor: '$crimson5',
            },
            pink: {
                backgroundColor: '$pink5',
            },
            plum: {
                backgroundColor: '$plum5',
            },
            purple: {
                backgroundColor: '$purple5',
            },
            violet: {
                backgroundColor: '$violet5',
            },
            indigo: {
                backgroundColor: '$indigo5',
            },
            blue: {
                backgroundColor: '$blue5',
            },
            cyan: {
                backgroundColor: '$cyan5',
            },
            teal: {
                backgroundColor: '$teal5',
            },
            green: {
                backgroundColor: '$green5',
            },
            grass: {
                backgroundColor: '$grass5',
            },
            brown: {
                backgroundColor: '$brown5',
            },
            bronze: {
                backgroundColor: '$bronze5',
            },
            gold: {
                backgroundColor: '$gold5',
            },
            sky: {
                backgroundColor: '$sky5',
            },
            mint: {
                backgroundColor: '$mint5',
            },
            lime: {
                backgroundColor: '$lime5',
            },
            yellow: {
                backgroundColor: '$yellow5',
            },
            amber: {
                backgroundColor: '$amber5',
            },
            orange: {
                backgroundColor: '$orange5',
            },
        },
        shape: {
            square: {
                borderRadius: '$2',
            },
            circle: {
                borderRadius: '50%',
            },
        },
        inactive: {
            true: {
                opacity: '.3',
            },
        },
        interactive: {
            true: {
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    backgroundColor: 'rgba(0,0,0,.08)',
                    opacity: '0',
                    pointerEvents: 'none',
                    transition: 'opacity 25ms linear',
                },
                '@hover': {
                    '&:hover': {
                        '&::after': {
                            opacity: '1',
                        },
                    },
                },
                '&[data-state="open"]': {
                    '&::after': {
                        backgroundColor: 'rgba(0,0,0,.12)',
                        opacity: '1',
                    },
                },
            },
        },
    },
    defaultVariants: {
        size: '2',
        variant: 'gray',
        shape: 'circle',
    },
});
var StyledAvatarImage = styled(AvatarPrimitive.Image, {
    display: 'flex',
    objectFit: 'cover',
    boxSizing: 'border-box',
    height: '100%',
    verticalAlign: 'middle',
    width: '100%',
});
var StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
    textTransform: 'uppercase',
    variants: {
        size: {
            '1': {
                fontSize: '10px',
                lineHeight: '15px',
            },
            '2': {
                fontSize: '$3',
            },
            '3': {
                fontSize: '$6',
            },
            '4': {
                fontSize: '$7',
            },
            '5': {
                fontSize: '$8',
            },
            '6': {
                fontSize: '$9',
            },
        },
    },
    defaultVariants: {
        size: '2',
    },
});
var AvatarNestedItem = styled('div', {
    boxShadow: '0 0 0 2px $colors$loContrast',
    borderRadius: '50%',
});
var AvatarGroup = styled('div', (_a$1 = {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    _a$1["& " + AvatarNestedItem + ":nth-child(n+2)"] = {
        marginRight: '-$1',
    },
    _a$1));
var Avatar = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var alt = _a.alt, src = _a.src, fallback = _a.fallback, size = _a.size, variant = _a.variant, shape = _a.shape, css = _a.css, status = _a.status, props = __rest(_a, ["alt", "src", "fallback", "size", "variant", "shape", "css", "status"]);
    return (React__default['default'].createElement(Box, { css: __assign(__assign({}, css), { position: 'relative', height: 'fit-content', width: 'fit-content' }) },
        React__default['default'].createElement(StyledAvatar, __assign({}, props, { ref: forwardedRef, size: size, variant: variant, shape: shape }),
            React__default['default'].createElement(StyledAvatarImage, { alt: alt, src: src }),
            React__default['default'].createElement(StyledAvatarFallback, { size: size }, fallback)),
        status && (React__default['default'].createElement(Box, { css: {
                position: 'absolute',
                bottom: '0',
                right: '0',
                boxShadow: '0 0 0 3px $colors$loContrast',
                borderRadius: '$round',
                mr: '-3px',
                mb: '-3px',
            } },
            React__default['default'].createElement(Status, { size: size && size > 2 ? '2' : '1', variant: status })))));
});

var Badge = styled('span', {
    // Reset
    alignItems: 'center',
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    justifyContent: 'center',
    lineHeight: '1',
    verticalAlign: 'middle',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&:disabled': {
        backgroundColor: '$slate3',
        pointerEvents: 'none',
        color: '$slate8',
    },
    '&::before': {
        boxSizing: 'border-box',
        content: '""',
    },
    '&::after': {
        boxSizing: 'border-box',
        content: '""',
    },
    // Custom
    backgroundColor: '$slate3',
    borderRadius: '$pill',
    color: '$slate11',
    whiteSpace: 'nowrap',
    fontVariantNumeric: 'tabular-nums',
    variants: {
        size: {
            '1': {
                height: '$4',
                px: '$1',
                fontSize: '$1',
            },
            '2': {
                height: '$5',
                px: '$2',
                fontSize: '$2',
            },
        },
        variant: {
            gray: {
                backgroundColor: '$slate3',
                color: '$slate11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
                },
            },
            red: {
                backgroundColor: '$red3',
                color: '$red11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8',
                },
            },
            crimson: {
                backgroundColor: '$crimson3',
                color: '$crimson11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$crimson8, 0 0 0 1px $colors$crimson8',
                },
            },
            pink: {
                backgroundColor: '$pink3',
                color: '$pink11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$pink8, 0 0 0 1px $colors$pink8',
                },
            },
            purple: {
                backgroundColor: '$purple3',
                color: '$purple11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$purple8, 0 0 0 1px $colors$purple8',
                },
            },
            violet: {
                backgroundColor: '$violet3',
                color: '$violet11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$violet8, 0 0 0 1px $colors$violet8',
                },
            },
            indigo: {
                backgroundColor: '$indigo3',
                color: '$indigo11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8',
                },
            },
            blue: {
                backgroundColor: '$blue3',
                color: '$blue11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                },
            },
            cyan: {
                backgroundColor: '$cyan3',
                color: '$cyan11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$cyan8, 0 0 0 1px $colors$cyan8',
                },
            },
            teal: {
                backgroundColor: '$teal3',
                color: '$teal11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
                },
            },
            green: {
                backgroundColor: '$green3',
                color: '$green11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8',
                },
            },
            lime: {
                backgroundColor: '$lime3',
                color: '$lime11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$lime8, 0 0 0 1px $colors$lime8',
                },
            },
            yellow: {
                backgroundColor: '$yellow3',
                color: '$yellow11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$yellow8, 0 0 0 1px $colors$yellow8',
                },
            },
            orange: {
                backgroundColor: '$orange3',
                color: '$orange11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$orange8, 0 0 0 1px $colors$orange8',
                },
            },
            gold: {
                backgroundColor: '$gold3',
                color: '$gold11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$gold8, 0 0 0 1px $colors$gold8',
                },
            },
            bronze: {
                backgroundColor: '$bronze3',
                color: '$bronze11',
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$bronze8, 0 0 0 1px $colors$bronze8',
                },
            },
        },
        interactive: {
            true: {},
        },
    },
    compoundVariants: [
        {
            interactive: true,
            variant: 'red',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$red4',
                    },
                },
                '&:active': {
                    backgroundColor: '$red5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$red5',
                },
            },
        },
        {
            interactive: true,
            variant: 'crimson',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$crimson4',
                    },
                },
                '&:active': {
                    backgroundColor: '$crimson5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$crimson5',
                },
            },
        },
        {
            interactive: true,
            variant: 'pink',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$pink4',
                    },
                },
                '&:active': {
                    backgroundColor: '$pink5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$pink5',
                },
            },
        },
        {
            interactive: true,
            variant: 'purple',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$purple4',
                    },
                },
                '&:active': {
                    backgroundColor: '$purple5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$purple5',
                },
            },
        },
        {
            interactive: true,
            variant: 'violet',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$violet4',
                    },
                },
                '&:active': {
                    backgroundColor: '$violet5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$violet5',
                },
            },
        },
        {
            interactive: true,
            variant: 'indigo',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$indigo4',
                    },
                },
                '&:active': {
                    backgroundColor: '$indigo5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$indigo5',
                },
            },
        },
        {
            interactive: true,
            variant: 'blue',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$blue4',
                    },
                },
                '&:active': {
                    backgroundColor: '$blue5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$blue5',
                },
            },
        },
        {
            interactive: true,
            variant: 'cyan',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$cyan4',
                    },
                },
                '&:active': {
                    backgroundColor: '$cyan5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$cyan5',
                },
            },
        },
        {
            interactive: true,
            variant: 'teal',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$teal4',
                    },
                },
                '&:active': {
                    backgroundColor: '$teal5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$teal5',
                },
            },
        },
        {
            interactive: true,
            variant: 'green',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$green4',
                    },
                },
                '&:active': {
                    backgroundColor: '$green5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$green5',
                },
            },
        },
        {
            interactive: true,
            variant: 'lime',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$lime4',
                    },
                },
                '&:active': {
                    backgroundColor: '$lime5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$lime5',
                },
            },
        },
        {
            interactive: true,
            variant: 'yellow',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$yellow4',
                    },
                },
                '&:active': {
                    backgroundColor: '$yellow5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$yellow5',
                },
            },
        },
        {
            interactive: true,
            variant: 'orange',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$orange4',
                    },
                },
                '&:active': {
                    backgroundColor: '$orange5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$orange5',
                },
            },
        },
        {
            interactive: true,
            variant: 'gold',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$gold4',
                    },
                },
                '&:active': {
                    backgroundColor: '$gold5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$gold5',
                },
            },
        },
        {
            interactive: true,
            variant: 'bronze',
            css: {
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$bronze4',
                    },
                },
                '&:active': {
                    backgroundColor: '$bronze5',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$bronze5',
                },
            },
        },
    ],
    defaultVariants: {
        size: '1',
        variant: 'gray',
    },
});

var Banner = styled('div', {
    // Reset
    boxSizing: 'border-box',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$3',
    variants: {
        size: {
            '1': {
                py: '$1',
                px: '$4',
            },
        },
        variant: {
            loContrast: {
                backgroundColor: '$loContrast',
            },
            gray: {
                backgroundColor: '$slate3',
            },
            blue: {
                backgroundColor: '$blue3',
            },
            green: {
                backgroundColor: '$green3',
            },
            red: {
                backgroundColor: '$red3',
            },
        },
        rounded: {
            true: {
                borderRadius: '$pill',
            },
        },
        border: {
            true: {
                borderRadius: '$pill',
            },
        },
    },
    compoundVariants: [
        {
            border: 'true',
            variant: 'gray',
            css: {
                borderColor: '$slate6',
            },
        },
        {
            border: 'true',
            variant: 'blue',
            css: {
                borderColor: '$blue11',
            },
        },
        {
            border: 'true',
            variant: 'loContrast',
            css: {
                borderColor: '$slate6',
            },
        },
    ],
    defaultVariants: {
        size: '1',
        variant: 'gray',
    },
});

var Button = styled('button', {
    // Reset
    all: 'unset',
    alignItems: 'center',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    // Custom reset?
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    lineHeight: '1',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    // Custom
    height: '$5',
    px: '$2',
    fontFamily: '$untitled',
    fontSize: '$2',
    fontWeight: 500,
    fontVariantNumeric: 'tabular-nums',
    '&:disabled': {
        backgroundColor: '$slate2',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$slate8',
        pointerEvents: 'none',
    },
    variants: {
        size: {
            '1': {
                borderRadius: '$1',
                height: '$5',
                px: '$2',
                fontSize: '$1',
                lineHeight: '$sizes$5',
            },
            '2': {
                borderRadius: '$2',
                height: '$6',
                px: '$3',
                fontSize: '$3',
                lineHeight: '$sizes$6',
            },
            '3': {
                borderRadius: '$2',
                height: '$7',
                px: '$4',
                fontSize: '$4',
                lineHeight: '$sizes$7',
            },
        },
        variant: {
            gray: {
                backgroundColor: '$loContrast',
                boxShadow: 'inset 0 0 0 1px $colors$slate7',
                color: '$hiContrast',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate2',
                    boxShadow: 'inset 0 0 0 1px $colors$slate8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$slate4',
                    boxShadow: 'inset 0 0 0 1px $colors$slate8',
                },
            },
            blue: {
                backgroundColor: '$blue2',
                boxShadow: 'inset 0 0 0 1px $colors$blue7',
                color: '$blue11',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$blue8',
                    },
                },
                '&:active': {
                    backgroundColor: '$blue3',
                    boxShadow: 'inset 0 0 0 1px $colors$blue8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$blue4',
                    boxShadow: 'inset 0 0 0 1px $colors$blue8',
                },
            },
            green: {
                backgroundColor: '$green2',
                boxShadow: 'inset 0 0 0 1px $colors$green7',
                color: '$green11',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$green8',
                    },
                },
                '&:active': {
                    backgroundColor: '$green3',
                    boxShadow: 'inset 0 0 0 1px $colors$green8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$green4',
                    boxShadow: 'inset 0 0 0 1px $colors$green8',
                },
            },
            red: {
                backgroundColor: '$loContrast',
                boxShadow: 'inset 0 0 0 1px $colors$slate7',
                color: '$red11',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$red3',
                    boxShadow: 'inset 0 0 0 1px $colors$red8',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$red4',
                    boxShadow: 'inset 0 0 0 1px $colors$red8',
                },
            },
            transparentWhite: {
                backgroundColor: 'hsla(0,100%,100%,.2)',
                color: 'white',
                '@hover': {
                    '&:hover': {
                        backgroundColor: 'hsla(0,100%,100%,.25)',
                    },
                },
                '&:active': {
                    backgroundColor: 'hsla(0,100%,100%,.3)',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
                },
            },
            transparentBlack: {
                backgroundColor: 'hsla(0,0%,0%,.2)',
                color: 'black',
                '@hover': {
                    '&:hover': {
                        backgroundColor: 'hsla(0,0%,0%,.25)',
                    },
                },
                '&:active': {
                    backgroundColor: 'hsla(0,0%,0%,.3)',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
                },
            },
        },
        state: {
            active: {
                backgroundColor: '$slate4',
                boxShadow: 'inset 0 0 0 1px $colors$slate8',
                color: '$slate11',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$slate5',
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate5',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
                },
            },
            waiting: {
                backgroundColor: '$slate4',
                boxShadow: 'inset 0 0 0 1px $colors$slate8',
                color: 'transparent',
                pointerEvents: 'none',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$slate5',
                        boxShadow: 'inset 0 0 0 1px $colors$slate8',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate5',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slate8',
                },
            },
        },
        ghost: {
            true: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
        },
    },
    compoundVariants: [
        {
            variant: 'gray',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                color: '$hiContrast',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$slateA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$slateA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$slateA4',
                    boxShadow: 'none',
                },
            },
        },
        {
            variant: 'blue',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$blueA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$blueA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$blueA8, 0 0 0 1px $colors$blueA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$blueA4',
                    boxShadow: 'none',
                },
            },
        },
        {
            variant: 'green',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$greenA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$greenA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$greenA8, 0 0 0 1px $colors$greenA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$greenA4',
                    boxShadow: 'none',
                },
            },
        },
        {
            variant: 'red',
            ghost: 'true',
            css: {
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$redA3',
                        boxShadow: 'none',
                    },
                },
                '&:active': {
                    backgroundColor: '$redA4',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$redA8, 0 0 0 1px $colors$redA8',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$redA4',
                    boxShadow: 'none',
                },
            },
        },
    ],
    defaultVariants: {
        size: '1',
        variant: 'gray',
    },
});

var Card = styled('div', {
    appearance: 'none',
    border: 'none',
    boxSizing: 'border-box',
    font: 'inherit',
    lineHeight: '1',
    outline: 'none',
    padding: 0,
    textAlign: 'inherit',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: '$panel',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    flexShrink: 0,
    borderRadius: '$3',
    position: 'relative',
    '&::before': {
        boxSizing: 'border-box',
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        borderRadius: '$3',
        pointerEvents: 'none',
    },
    variants: {
        variant: {
            interactive: {
                '@hover': {
                    '&:hover': {
                        '&::before': {
                            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.2)',
                        },
                    },
                },
                '&:focus': {
                    '&::before': {
                        boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                    },
                },
            },
            ghost: {
                backgroundColor: 'transparent',
                transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
                willChange: 'transform',
                '&::before': {
                    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
                    opacity: '0',
                    transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
                },
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$panel',
                        transform: 'translateY(-2px)',
                        '&::before': {
                            opacity: '1',
                        },
                    },
                },
                '&:active': {
                    transform: 'translateY(0)',
                    transition: 'none',
                    '&::before': {
                        boxShadow: '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
                        opacity: '1',
                    },
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                },
            },
            active: {
                transform: 'translateY(0)',
                transition: 'none',
                '&::before': {
                    boxShadow: '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
                    opacity: '1',
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
                },
            },
        },
    },
});

var StyledCheckbox = styled(CheckboxPrimitive.Root, {
    all: 'unset',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    alignItems: 'center',
    appearance: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    padding: '0',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    color: '$hiContrast',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    overflow: 'hidden',
    '@hover': {
        '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
    },
    '&:focus': {
        outline: 'none',
        borderColor: '$red7',
        boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9',
    },
    variants: {
        size: {
            '1': {
                width: '$3',
                height: '$3',
                borderRadius: '$1',
            },
            '2': {
                width: '$5',
                height: '$5',
                borderRadius: '$2',
            },
        },
    },
    defaultVariants: {
        size: '1',
    },
});
var StyledIndicator = styled(CheckboxPrimitive.Indicator, {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
});
var Checkbox = React__default['default'].forwardRef(function (props, forwardedRef) { return (React__default['default'].createElement(StyledCheckbox, __assign({}, props, { ref: forwardedRef }),
    React__default['default'].createElement(StyledIndicator, null,
        React__default['default'].createElement(reactIcons.CheckIcon, null)))); });

var Code = styled('code', {
    fontFamily: '$mono',
    fontSize: 'max(12px, 85%)',
    whiteSpace: 'nowrap',
    padding: '0 3px 2px 3px',
    variants: {
        variant: {
            gray: {
                backgroundColor: '$slate3',
                color: '$slate11',
            },
            violet: {
                backgroundColor: '$violet3',
                color: '$violet11',
            },
        },
    },
    defaultVariants: {
        variant: 'violet',
    },
});

var Container = styled('div', {
    // Reset
    boxSizing: 'border-box',
    flexShrink: 0,
    // Custom
    ml: 'auto',
    mr: 'auto',
    px: '$5',
    variants: {
        size: {
            '1': {
                maxWidth: '430px',
            },
            '2': {
                maxWidth: '715px',
            },
            '3': {
                maxWidth: '1145px',
            },
            '4': {
                maxWidth: 'none',
            },
        },
    },
    defaultVariants: {
        size: '4',
    },
});

var Flex = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    variants: {
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
            rowReverse: {
                flexDirection: 'row-reverse',
            },
            columnReverse: {
                flexDirection: 'column-reverse',
            }
        },
        align: {
            start: {
                alignItems: 'flex-start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'flex-end',
            },
            stretch: {
                alignItems: 'stretch',
            },
            baseline: {
                alignItems: 'baseline',
            },
        },
        justify: {
            start: {
                justifyContent: 'flex-start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'flex-end',
            },
            between: {
                justifyContent: 'space-between',
            },
        },
        wrap: {
            noWrap: {
                flexWrap: 'nowrap',
            },
            wrap: {
                flexWrap: 'wrap',
            },
            wrapReverse: {
                flexWrap: 'wrap-reverse',
            },
        },
        gap: {
            1: {
                gap: '$1',
            },
            2: {
                gap: '$2',
            },
            3: {
                gap: '$3',
            },
            4: {
                gap: '$4',
            },
            5: {
                gap: '$5',
            },
            6: {
                gap: '$6',
            },
            7: {
                gap: '$7',
            },
            8: {
                gap: '$8',
            },
            9: {
                gap: '$9',
            },
        }
    },
    defaultVariants: {
        direction: 'row',
        align: 'stretch',
        justify: 'start',
        wrap: 'noWrap',
    }
});

var baseItemCss = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: '$untitled',
    fontSize: '$1',
    fontVariantNumeric: 'tabular-nums',
    lineHeight: '1',
    cursor: 'default',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    height: '$5',
    px: '$5',
});
var itemCss = css(baseItemCss, {
    position: 'relative',
    color: '$hiContrast',
    '&:focus': {
        outline: 'none',
        backgroundColor: '$blue9',
        color: 'white',
    },
    '&[data-disabled]': {
        color: '$slate9',
    },
});
var labelCss = css(baseItemCss, {
    color: '$slate11',
});
var menuCss = css({
    boxSizing: 'border-box',
    minWidth: 120,
    py: '$1',
});
var separatorCss = css({
    height: 1,
    my: '$1',
    backgroundColor: '$slate6',
});
var Menu = styled(MenuPrimitive.Root, menuCss);
var MenuContent = styled(MenuPrimitive.Content, panelStyles);
var MenuSeparator = styled(MenuPrimitive.Separator, separatorCss);
var MenuItem = styled(MenuPrimitive.Item, itemCss);
var StyledMenuRadioItem = styled(MenuPrimitive.RadioItem, itemCss);
var MenuRadioItem = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledMenuRadioItem, __assign({}, props, { ref: forwardedRef }),
        React__default['default'].createElement(Box, { as: "span", css: { position: 'absolute', left: '$1' } },
            React__default['default'].createElement(MenuPrimitive.ItemIndicator, null,
                React__default['default'].createElement(Flex, { css: { width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center' } },
                    React__default['default'].createElement(Box, { css: {
                            width: '$1',
                            height: '$1',
                            backgroundColor: 'currentColor',
                            borderRadius: '$round',
                        } })))),
        children));
});
var StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss);
var MenuCheckboxItem = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledMenuCheckboxItem, __assign({}, props, { ref: forwardedRef }),
        React__default['default'].createElement(Box, { as: "span", css: { position: 'absolute', left: '$1' } },
            React__default['default'].createElement(MenuPrimitive.ItemIndicator, null,
                React__default['default'].createElement(reactIcons.CheckIcon, null))),
        children));
});
var MenuLabel = styled(MenuPrimitive.Label, labelCss);
var MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {});
var MenuGroup = styled(MenuPrimitive.Group, {});

var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuContent = styled(ContextMenuPrimitive.Content, menuCss, panelStyles);
var ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, separatorCss);
var ContextMenuItem = styled(ContextMenuPrimitive.Item, itemCss);
var StyledContextMenuRadioItem = styled(ContextMenuPrimitive.RadioItem, itemCss);
var ContextMenuRadioItem = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledContextMenuRadioItem, __assign({}, props, { ref: forwardedRef }),
        React__default['default'].createElement(Box, { as: "span", css: { position: 'absolute', left: '$1' } },
            React__default['default'].createElement(ContextMenuPrimitive.ItemIndicator, null,
                React__default['default'].createElement(Flex, { css: { width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center' } },
                    React__default['default'].createElement(Box, { css: {
                            width: '$1',
                            height: '$1',
                            backgroundColor: 'currentColor',
                            borderRadius: '$round',
                        } })))),
        children));
});
var StyledContextMenuCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, itemCss);
var ContextMenuCheckboxItem = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledContextMenuCheckboxItem, __assign({}, props, { ref: forwardedRef }),
        React__default['default'].createElement(Box, { as: "span", css: { position: 'absolute', left: '$1' } },
            React__default['default'].createElement(ContextMenuPrimitive.ItemIndicator, null,
                React__default['default'].createElement(reactIcons.CheckIcon, null))),
        children));
});
var ContextMenuLabel = styled(ContextMenuPrimitive.Label, labelCss);
var ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup, {});
var ContextMenuGroup = styled(ContextMenuPrimitive.Group, {});

var TextField = styled('input', {
    // Reset
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    margin: '0',
    outline: 'none',
    padding: '0',
    width: '100%',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    // Custom
    backgroundColor: '$loContrast',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$hiContrast',
    fontVariantNumeric: 'tabular-nums',
    '&:-webkit-autofill': {
        boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
    },
    '&:-webkit-autofill::first-line': {
        fontFamily: '$untitled',
        color: '$hiContrast',
    },
    '&:focus': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        '&:-webkit-autofill': {
            boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3',
        },
    },
    '&::placeholder': {
        color: '$slate9',
    },
    '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: '$slate2',
        color: '$slate8',
        cursor: 'not-allowed',
        '&::placeholder': {
            color: '$slate7',
        },
    },
    '&:read-only': {
        backgroundColor: '$slate2',
        '&:focus': {
            boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
        },
    },
    variants: {
        size: {
            '1': {
                borderRadius: '$1',
                height: '$5',
                fontSize: '$1',
                px: '$1',
                lineHeight: '$sizes$5',
                '&:-webkit-autofill::first-line': {
                    fontSize: '$1',
                },
            },
            '2': {
                borderRadius: '$2',
                height: '$6',
                fontSize: '$3',
                px: '$2',
                lineHeight: '$sizes$6',
                '&:-webkit-autofill::first-line': {
                    fontSize: '$3',
                },
            },
        },
        variant: {
            ghost: {
                boxShadow: 'none',
                backgroundColor: 'transparent',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px $colors$slateA7',
                    },
                },
                '&:focus': {
                    backgroundColor: '$loContrast',
                    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
                },
                '&:disabled': {
                    backgroundColor: 'transparent',
                },
                '&:read-only': {
                    backgroundColor: 'transparent',
                },
            },
        },
        state: {
            invalid: {
                boxShadow: 'inset 0 0 0 1px $colors$red7',
                '&:focus': {
                    boxShadow: 'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
                },
            },
            valid: {
                boxShadow: 'inset 0 0 0 1px $colors$green7',
                '&:focus': {
                    boxShadow: 'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
                },
            },
        },
        cursor: {
            default: {
                cursor: 'default',
                '&:focus': {
                    cursor: 'text',
                },
            },
            text: {
                cursor: 'text',
            },
        },
    },
    defaultVariants: {
        size: '1',
    },
});

var SelectWrapper = styled('div', {
    backgroundColor: '$loContrast',
    borderRadius: '$2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$hiContrast',
    fontFamily: '$untitled',
    fontSize: '$1',
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 400,
    height: '$5',
    flexShrink: 0,
    '&:focus-within': {
        zIndex: 1,
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    },
});
var StyledSelect = styled('select', {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 'inherit',
    color: 'inherit',
    font: 'inherit',
    outline: 'none',
    width: '100%',
    height: '100%',
    pl: '$1',
    pr: '$3',
    lineHeight: '25px',
});
var StyledCaretSortIcon = styled(reactIcons.CaretSortIcon, {
    position: 'absolute',
    pointerEvents: 'none',
    display: 'inline',
    // Use margins instead of top/left to avoid setting "position: relative" on parent,
    // which would make stacking context tricky with Select used in a control group.
    marginTop: 5,
    marginLeft: -16,
});
var Select = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var css = _a.css, props = __rest(_a, ["css"]);
    return (React__default['default'].createElement(SelectWrapper, { css: css },
        React__default['default'].createElement(StyledSelect, __assign({ ref: forwardedRef }, props)),
        React__default['default'].createElement(StyledCaretSortIcon, null)));
});
Select.toString = function () { return "." + SelectWrapper.className; };

var _a$2;
var ControlGroup = styled('div', (_a$2 = {
        display: 'flex',
        // Make sure ControlGroup and its children don't affect normal stacking order
        position: 'relative',
        zIndex: 0
    },
    _a$2["& " + Button] = {
        borderRadius: 0,
        boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
        '&:hover': {
            boxShadow: '-1px 0 $colors$slate8, inset 0 1px $colors$slate8, inset -1px 0 $colors$slate8, inset 0 -1px $colors$slate8',
        },
        '&:focus': {
            zIndex: 1,
            boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
        '&:first-child': {
            borderTopLeftRadius: '$1',
            borderBottomLeftRadius: '$1',
            boxShadow: 'inset 0 0 0 1px $colors$slate7',
            '&:hover': {
                boxShadow: 'inset 0 0 0 1px $colors$slate8',
            },
            '&:focus': {
                boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
            },
        },
        '&:last-child': {
            borderTopRightRadius: '$1',
            borderBottomRightRadius: '$1',
            boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
            '&:focus': {
                boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
            },
        },
    },
    _a$2["& " + TextField] = {
        borderRadius: 0,
        boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
        '&:focus': {
            zIndex: 1,
            boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        },
        '&:first-child': {
            borderTopLeftRadius: '$1',
            borderBottomLeftRadius: '$1',
            boxShadow: 'inset 0 0 0 1px $colors$slate7',
            '&:focus': {
                boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
            },
        },
        '&:last-child': {
            borderTopRightRadius: '$1',
            borderBottomRightRadius: '$1',
            boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
            '&:focus': {
                boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
            },
        },
    },
    _a$2["& " + Select] = {
        borderRadius: 0,
        boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
        '&:focus-within': {
            boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        },
        '&:first-child': {
            borderTopLeftRadius: '$1',
            borderBottomLeftRadius: '$1',
            boxShadow: 'inset 0 0 0 1px $colors$slate7',
            '&:focus-within': {
                boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
            },
        },
        '&:last-child': {
            borderTopRightRadius: '$1',
            borderBottomRightRadius: '$1',
            boxShadow: 'inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7',
            '&:focus-within': {
                boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
            },
        },
    },
    _a$2));

var DesignSystemProvider = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement(TooltipPrimitive.TooltipProvider, null, children));
};

var IconButton = styled('button', {
    // Reset
    alignItems: 'center',
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    color: '$hiContrast',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    backgroundColor: '$loContrast',
    border: '1px solid $slate7',
    '@hover': {
        '&:hover': {
            borderColor: '$slate8',
        },
    },
    '&:active': {
        backgroundColor: '$slate2',
    },
    '&:focus': {
        borderColor: '$slate8',
        boxShadow: '0 0 0 1px $colors$slate8',
    },
    '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: 'transparent',
        color: '$slate6',
    },
    variants: {
        size: {
            '1': {
                borderRadius: '$1',
                height: '$5',
                width: '$5',
            },
            '2': {
                borderRadius: '$2',
                height: '$6',
                width: '$6',
            },
            '3': {
                borderRadius: '$2',
                height: '$7',
                width: '$7',
            },
            '4': {
                borderRadius: '$3',
                height: '$8',
                width: '$8',
            },
        },
        variant: {
            ghost: {
                backgroundColor: 'transparent',
                borderWidth: '0',
                '@hover': {
                    '&:hover': {
                        backgroundColor: '$slateA3',
                    },
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
                },
                '&:active': {
                    backgroundColor: '$slateA4',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$slateA4',
                },
            },
            raised: {
                boxShadow: '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
                '@hover': {
                    '&:hover': {
                        boxShadow: '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
                    },
                },
                '&:focus': {
                    borderColor: '$slate8',
                    boxShadow: '0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
                },
                '&:active': {
                    backgroundColor: '$slate4',
                },
            },
        },
        state: {
            active: {
                backgroundColor: '$slate4',
                boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate4',
                },
            },
            waiting: {
                backgroundColor: '$slate4',
                boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                '@hover': {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                    },
                },
                '&:active': {
                    backgroundColor: '$slate4',
                },
            },
        },
    },
    defaultVariants: {
        size: '1',
        variant: 'ghost',
    },
});

var StyledOverlay$1 = styled(DialogPrimitive.Overlay, overlayStyles, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});
function Dialog(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React__default['default'].createElement(DialogPrimitive.Root, __assign({}, props), children);
}
var StyledContent$2 = styled(DialogPrimitive.Content, panelStyles, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 200,
    maxHeight: '85vh',
    padding: '$4',
    marginTop: '-5vh',
    // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,
    // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
    // Affects animated and non-animated dialogs alike.
    willChange: 'transform',
    '&:focus': {
        outline: 'none',
    },
});
var StyledCloseButton = styled(DialogPrimitive.Close, {
    position: 'absolute',
    top: '$2',
    right: '$2',
});
var DialogContent = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(DialogPrimitive.Portal, null,
        React__default['default'].createElement(StyledOverlay$1, null),
        React__default['default'].createElement(StyledContent$2, __assign({}, props, { ref: forwardedRef }),
            children,
            React__default['default'].createElement(StyledCloseButton, { asChild: true },
                React__default['default'].createElement(IconButton, { variant: "ghost" },
                    React__default['default'].createElement(reactIcons.Cross1Icon, null))))));
});
var DialogTrigger = DialogPrimitive.Trigger;
var DialogClose = DialogPrimitive.Close;
var DialogTitle = DialogPrimitive.Title;
var DialogDescription = DialogPrimitive.Description;

var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuContent = styled(DropdownMenuPrimitive.Content, menuCss, panelStyles);
var DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss);
var DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
var StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, itemCss);
var DropdownMenuRadioItem = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledDropdownMenuRadioItem, __assign({}, props, { ref: forwardedRef }),
        React__default['default'].createElement(Box, { as: "span", css: { position: 'absolute', left: '$1' } },
            React__default['default'].createElement(DropdownMenuPrimitive.ItemIndicator, null,
                React__default['default'].createElement(Flex, { css: { width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center' } },
                    React__default['default'].createElement(Box, { css: {
                            width: '$1',
                            height: '$1',
                            backgroundColor: 'currentColor',
                            borderRadius: '$round',
                        } })))),
        children));
});
var StyledDropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss);
var DropdownMenuCheckboxItem = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledDropdownMenuCheckboxItem, __assign({}, props, { ref: forwardedRef }),
        React__default['default'].createElement(Box, { as: "span", css: { position: 'absolute', left: '$1' } },
            React__default['default'].createElement(DropdownMenuPrimitive.ItemIndicator, null,
                React__default['default'].createElement(reactIcons.CheckIcon, null))),
        children));
});
var DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
var DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
var DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});

var Grid = styled('div', {
    boxSizing: 'border-box',
    display: 'grid',
    variants: {
        align: {
            start: {
                alignItems: 'start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'end',
            },
            stretch: {
                alignItems: 'stretch',
            },
            baseline: {
                alignItems: 'baseline',
            },
        },
        justify: {
            start: {
                justifyContent: 'start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'end',
            },
            between: {
                justifyContent: 'space-between',
            },
        },
        flow: {
            row: {
                gridAutoFlow: 'row',
            },
            column: {
                gridAutoFlow: 'column',
            },
            dense: {
                gridAutoFlow: 'dense',
            },
            rowDense: {
                gridAutoFlow: 'row dense',
            },
            columnDense: {
                gridAutoFlow: 'column dense',
            },
        },
        columns: {
            1: {
                gridTemplateColumns: 'repeat(1, 1fr)',
            },
            2: {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            3: {
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
            4: {
                gridTemplateColumns: 'repeat(4, 1fr)',
            },
        },
        gap: {
            1: {
                gap: '$1',
            },
            2: {
                gap: '$2',
            },
            3: {
                gap: '$3',
            },
            4: {
                gap: '$4',
            },
            5: {
                gap: '$5',
            },
            6: {
                gap: '$6',
            },
            7: {
                gap: '$7',
            },
            8: {
                gap: '$8',
            },
            9: {
                gap: '$9',
            },
        },
        gapX: {
            1: {
                columnGap: '$1',
            },
            2: {
                columnGap: '$2',
            },
            3: {
                columnGap: '$3',
            },
            4: {
                columnGap: '$4',
            },
            5: {
                columnGap: '$5',
            },
            6: {
                columnGap: '$6',
            },
            7: {
                columnGap: '$7',
            },
            8: {
                columnGap: '$8',
            },
            9: {
                columnGap: '$9',
            },
        },
        gapY: {
            1: {
                rowGap: '$1',
            },
            2: {
                rowGap: '$2',
            },
            3: {
                rowGap: '$3',
            },
            4: {
                rowGap: '$4',
            },
            5: {
                rowGap: '$5',
            },
            6: {
                rowGap: '$6',
            },
            7: {
                rowGap: '$7',
            },
            8: {
                rowGap: '$8',
            },
            9: {
                rowGap: '$9',
            },
        },
    },
});

var Text = styled('span', {
    // Reset
    lineHeight: '1',
    margin: '0',
    fontWeight: 400,
    fontVariantNumeric: 'tabular-nums',
    display: 'block',
    variants: {
        size: {
            '1': {
                fontSize: '$1',
            },
            '2': {
                fontSize: '$2',
            },
            '3': {
                fontSize: '$3',
            },
            '4': {
                fontSize: '$4',
            },
            '5': {
                fontSize: '$5',
                letterSpacing: '-.015em',
            },
            '6': {
                fontSize: '$6',
                letterSpacing: '-.016em',
            },
            '7': {
                fontSize: '$7',
                letterSpacing: '-.031em',
                textIndent: '-.005em',
            },
            '8': {
                fontSize: '$8',
                letterSpacing: '-.034em',
                textIndent: '-.018em',
            },
            '9': {
                fontSize: '$9',
                letterSpacing: '-.055em',
                textIndent: '-.025em',
            },
        },
        variant: {
            red: {
                color: '$red11',
            },
            crimson: {
                color: '$crimson11',
            },
            pink: {
                color: '$pink11',
            },
            purple: {
                color: '$purple11',
            },
            violet: {
                color: '$violet11',
            },
            indigo: {
                color: '$indigo11',
            },
            blue: {
                color: '$blue11',
            },
            cyan: {
                color: '$cyan11',
            },
            teal: {
                color: '$teal11',
            },
            green: {
                color: '$green11',
            },
            lime: {
                color: '$lime11',
            },
            yellow: {
                color: '$yellow11',
            },
            orange: {
                color: '$orange11',
            },
            gold: {
                color: '$gold11',
            },
            bronze: {
                color: '$bronze11',
            },
            gray: {
                color: '$slate11',
            },
            contrast: {
                color: '$hiContrast',
            },
        },
        gradient: {
            true: {
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            },
        },
    },
    compoundVariants: [
        {
            variant: 'red',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $red11, $crimson11)',
            },
        },
        {
            variant: 'crimson',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $crimson11, $pink11)',
            },
        },
        {
            variant: 'pink',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $pink11, $purple11)',
            },
        },
        {
            variant: 'purple',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $purple11, $violet11)',
            },
        },
        {
            variant: 'violet',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $violet11, $indigo11)',
            },
        },
        {
            variant: 'indigo',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $indigo11, $blue11)',
            },
        },
        {
            variant: 'blue',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $blue11, $cyan11)',
            },
        },
        {
            variant: 'cyan',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $cyan11, $teal11)',
            },
        },
        {
            variant: 'teal',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $teal11, $green11)',
            },
        },
        {
            variant: 'green',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $green11, $lime11)',
            },
        },
        {
            variant: 'lime',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $lime11, $yellow11)',
            },
        },
        {
            variant: 'yellow',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $yellow11, $orange11)',
            },
        },
        {
            variant: 'orange',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $orange11, $red11)',
            },
        },
        {
            variant: 'gold',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $gold11, $gold9)',
            },
        },
        {
            variant: 'bronze',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $bronze11, $bronze9)',
            },
        },
        {
            variant: 'gray',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $gray11, $gray12)',
            },
        },
        {
            variant: 'contrast',
            gradient: 'true',
            css: {
                background: 'linear-gradient(to right, $hiContrast, $gray12)',
            },
        },
    ],
    defaultVariants: {
        size: '3',
        variant: 'contrast',
    },
});

var DEFAULT_TAG = 'h1';
var Heading = React__default['default'].forwardRef(function (props, forwardedRef) {
    // '2' here is the default heading size variant
    var _a = props.size, size = _a === void 0 ? '1' : _a, textProps = __rest(props, ["size"]);
    // This is the mapping of Heading Variants to Text variants
    var textSize = {
        1: { '@initial': '4', '@bp2': '5' },
        2: { '@initial': '6', '@bp2': '7' },
        3: { '@initial': '7', '@bp2': '8' },
        4: { '@initial': '8', '@bp2': '9' },
    };
    // This is the mapping of Heading Variants to Text css
    var textCss = {
        1: { fontWeight: 500, lineHeight: '20px', '@bp2': { lineHeight: '23px' } },
        2: { fontWeight: 500, lineHeight: '25px', '@bp2': { lineHeight: '30px' } },
        3: { fontWeight: 500, lineHeight: '33px', '@bp2': { lineHeight: '41px' } },
        4: { fontWeight: 500, lineHeight: '35px', '@bp2': { lineHeight: '55px' } },
    };
    return (React__default['default'].createElement(Text, __assign({ as: DEFAULT_TAG }, textProps, { ref: forwardedRef, size: textSize[size], css: __assign({ fontVariantNumeric: 'proportional-nums' }, merge__default['default'](textCss[size], props.css)) })));
});

var Image = styled('img', {
    // Reset
    verticalAlign: 'middle',
    maxWidth: '100%',
});

var Kbd = styled('kbd', {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$loContrast',
    flexShrink: 0,
    color: '$hiContrast',
    userSelect: 'none',
    cursor: 'default',
    whiteSpace: 'nowrap',
    boxShadow: "\n    inset 0 0.5px rgba(255, 255, 255, 0.1),\n    inset 0 1px 5px $colors$slate2,\n    0px 0px 0px 0.5px $colors$slate8,\n    0px 2px 1px -1px $colors$slate8,\n    0 1px $colors$slate8",
    textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',
    fontFamily: 'inherit',
    fontWeight: 400,
    lineHeight: '1.5',
    mx: '2px',
    variants: {
        size: {
            '1': {
                borderRadius: '$1',
                px: '0.3em',
                height: '$3',
                minWidth: '1.6em',
                fontSize: '$1',
                lineHeight: '$spaces$3',
            },
            '2': {
                borderRadius: '$2',
                px: '0.5em',
                height: '$5',
                minWidth: '2em',
                fontSize: '$2',
                lineHeight: '$spaces$5',
            },
        },
        width: {
            shift: {
                width: '4em',
                justifyContent: 'flex-start',
            },
            command: {
                width: '3em',
                justifyContent: 'flex-end',
            },
            space: {
                width: '8em',
            },
        },
    },
    compoundVariants: [
        {
            size: '1',
            width: 'shift',
            css: {
                width: '3em',
            },
        },
        {
            size: '1',
            width: 'command',
            css: {
                width: '2.5em',
            },
        },
        {
            size: '1',
            width: 'space',
            css: {
                width: '5em',
            },
        },
    ],
    defaultVariants: {
        size: '2',
    },
});

var _a$3;
var Link = styled('a', (_a$3 = {
        alignItems: 'center',
        gap: '$1',
        flexShrink: 0,
        outline: 'none',
        textDecorationLine: 'none',
        textUnderlineOffset: '3px',
        textDecorationColor: '$slate4',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        lineHeight: 'inherit',
        '@hover': {
            '&:hover': {
                textDecorationLine: 'underline',
            },
        },
        '&:focus': {
            outlineWidth: '2px',
            outlineStyle: 'solid',
            outlineOffset: '2px',
            textDecorationLine: 'none',
        }
    },
    _a$3["& " + Text] = {
        color: 'inherit',
    },
    _a$3.variants = {
        variant: {
            blue: {
                color: '$blue11',
                textDecorationColor: '$blue4',
                '&:focus': {
                    outlineColor: '$blue8',
                },
            },
            subtle: {
                color: '$slate11',
                textDecorationColor: '$slate4',
                '&:focus': {
                    outlineColor: '$slate8',
                },
            },
            contrast: {
                color: '$hiContrast',
                textDecoration: 'underline',
                textDecorationColor: '$slate4',
                '@hover': {
                    '&:hover': {
                        textDecorationColor: '$slate7',
                    },
                },
                '&:focus': {
                    outlineColor: '$slate8',
                },
            },
        },
    },
    _a$3.defaultVariants = {
        variant: 'contrast',
    },
    _a$3));

var DEFAULT_TAG$1 = 'p';
var Paragraph = React__default['default'].forwardRef(function (props, forwardedRef) {
    // '2' here is the default Paragraph size variant
    var _a = props.size, size = _a === void 0 ? '1' : _a, textProps = __rest(props, ["size"]);
    // This is the mapping of Paragraph Variants to Text variants
    var textSize = {
        1: { '@initial': '3', '@bp2': '4' },
        2: { '@initial': '5', '@bp2': '6' },
    };
    // This is the mapping of Paragraph Variants to Text css
    var textCss = {
        1: { lineHeight: '25px', '@bp2': { lineHeight: '27px' } },
        2: { color: '$slate11', lineHeight: '27px', '@bp2': { lineHeight: '30px' } },
    };
    return (React__default['default'].createElement(Text, __assign({ as: DEFAULT_TAG$1 }, textProps, { ref: forwardedRef, size: textSize[size], css: __assign({}, merge__default['default'](textCss[size], props.css)) })));
});

function Popover(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React__default['default'].createElement(PopoverPrimitive.Root, __assign({}, props), children);
}
var StyledContent$3 = styled(PopoverPrimitive.Content, panelStyles, {
    minWidth: 200,
    minHeight: '$6',
    maxWidth: 265,
    '&:focus': {
        outline: 'none',
    },
});
var PopoverContent = React__default['default'].forwardRef(function (_a, fowardedRef) {
    var children = _a.children, hideArrow = _a.hideArrow, props = __rest(_a, ["children", "hideArrow"]);
    return (React__default['default'].createElement(StyledContent$3, __assign({ sideOffset: 0 }, props, { ref: fowardedRef }),
        children,
        !hideArrow && (React__default['default'].createElement(Box, { css: { color: '$panel' } },
            React__default['default'].createElement(PopoverPrimitive.Arrow, { width: 11, height: 5, offset: 5, style: { fill: 'currentColor' } })))));
});
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverClose = PopoverPrimitive.Close;

var indeterminateProgress = keyframes({
    '0%': {
        transform: 'scaleX(1) translateX(-100%)',
        transformOrigin: 'left',
    },
    '50%': {
        transform: 'scaleX(1) translateX(1000%)',
        transformOrigin: 'left',
    },
    '100%': {
        transform: 'scaleX(1) translateX(2000%)',
        transformOrigin: 'left',
    },
});
var StyledProgressBar = styled(ProgressPrimitive.Root, {
    boxSizing: 'border-box',
    position: 'relative',
    height: '$1',
    overflow: 'hidden',
    borderRadius: '$pill',
    '&[data-state="indeterminate"]': {
        backgroundColor: '$slate4',
        '&::after': {
            animationName: indeterminateProgress,
            animationDuration: '1500ms',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
            backgroundColor: '$slate7',
            boxSizing: 'border-box',
            borderRadius: '$pill',
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '5%',
        },
    },
    variants: {
        variant: {
            gray: {
                background: '$slate8',
            },
            blue: {
                backgroundColor: '$blue9',
            },
            gradient: {
                backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            },
        },
    },
    defaultVariants: {
        variant: 'gray',
    },
});
var ProgressBarIndicator = styled(ProgressPrimitive.Indicator, {
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '$slate4',
    transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
});
var ProgressBar = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var value = _a.value, _b = _a.max, max = _b === void 0 ? 100 : _b, props = __rest(_a, ["value", "max"]);
    var percentage = value != null ? Math.round((value / max) * 100) : null;
    return (React__default['default'].createElement(StyledProgressBar, __assign({}, props, { ref: forwardedRef, value: value, max: max }),
        React__default['default'].createElement(ProgressBarIndicator, { style: { transform: "translateX(" + percentage + "%)" } })));
});

var _a$4;
var RadioGroup = styled(RadioGroupPrimitive.Root, {
    display: 'flex',
});
var StyledIndicator$1 = styled(RadioGroupPrimitive.Indicator, {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    '&::after': {
        content: '""',
        display: 'block',
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        backgroundColor: '$blue9',
    },
});
var StyledRadio = styled(RadioGroupPrimitive.Item, {
    all: 'unset',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    alignItems: 'center',
    appearance: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    borderRadius: '50%',
    color: '$hiContrast',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    overflow: 'hidden',
    '@hover': {
        '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
    },
    '&:focus': {
        outline: 'none',
        borderColor: '$red7',
        boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9',
    },
    variants: {
        size: {
            '1': {
                width: '$3',
                height: '$3',
            },
            '2': (_a$4 = {
                    width: '$5',
                    height: '$5'
                },
                _a$4["& " + StyledIndicator$1] = {
                    '&::after': {
                        width: '$3',
                        height: '$3',
                    },
                },
                _a$4),
        },
    },
    defaultVariants: {
        size: '1',
    },
});
var Radio = React__default['default'].forwardRef(function (props, forwardedRef) { return (React__default['default'].createElement(StyledRadio, __assign({}, props, { ref: forwardedRef }),
    React__default['default'].createElement(StyledIndicator$1, null))); });

var _a$5;
var RadioCardGroup = styled(RadioGroupPrimitive.Root, {
    display: 'block',
});
var StyledRadioButton = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$round',
    width: 25,
    height: 25,
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    flexShrink: 0,
    mr: '$3',
});
var StyledRadioIndicator = styled('div', {
    borderRadius: '$round',
    width: 15,
    height: 15,
    backgroundColor: '$blue9',
    transform: 'scale(0)',
});
var StyledRadio$1 = styled(RadioGroupPrimitive.Item, {
    all: 'unset',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    display: 'flex',
    alignItems: 'center',
    borderRadius: '$2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    p: '$3',
    '@hover': {
        '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
    },
    '&[data-state="checked"]': (_a$5 = {
            boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8 !important'
        },
        _a$5["& " + StyledRadioIndicator] = {
            transform: 'scale(1)',
        },
        _a$5),
});
var RadioCard = React__default['default'].forwardRef(function (props, forwardedRef) { return (React__default['default'].createElement(StyledRadio$1, __assign({}, props, { ref: forwardedRef }),
    React__default['default'].createElement(StyledRadioButton, null,
        React__default['default'].createElement(StyledRadioIndicator, null)),
    props.children)); });

var Section = styled('section', {
    // Reset
    boxSizing: 'border-box',
    flexShrink: 0,
    '&::before': {
        boxSizing: 'border-box',
        content: '""',
    },
    '&::after': {
        boxSizing: 'border-box',
        content: '""',
    },
    variants: {
        size: {
            '1': {
                py: '$3',
            },
            '2': {
                py: '$5',
            },
            '3': {
                py: '$9',
            },
        },
    },
    defaultVariants: {
        size: '3',
    },
});

var Separator = styled(SeparatorPrimitive.Root, {
    border: 'none',
    margin: 0,
    flexShrink: 0,
    backgroundColor: '$slate6',
    cursor: 'default',
    variants: {
        size: {
            '1': {
                '&[data-orientation="horizontal"]': {
                    height: '1px',
                    width: '$3',
                },
                '&[data-orientation="vertical"]': {
                    width: '1px',
                    height: '$3',
                },
            },
            '2': {
                '&[data-orientation="horizontal"]': {
                    height: '1px',
                    width: '$7',
                },
                '&[data-orientation="vertical"]': {
                    width: '1px',
                    height: '$7',
                },
            },
        },
    },
    defaultVariants: {
        size: '1',
    },
});

var fadeIn = keyframes({
    from: { opacity: '0' },
    to: { opacity: '1' },
});
var fadeOut = keyframes({
    from: { opacity: '1' },
    to: { opacity: '0' },
});
var StyledOverlay$2 = styled(DialogPrimitive.Overlay, overlayStyles, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    '&[data-state="open"]': {
        animation: fadeIn + " 150ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    '&[data-state="closed"]': {
        animation: fadeOut + " 150ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
});
function Sheet(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(DialogPrimitive.Root, __assign({}, props),
        React__default['default'].createElement(StyledOverlay$2, null),
        children));
}
var slideIn = keyframes({
    from: { transform: '$$transformValue' },
    to: { transform: 'translate3d(0,0,0)' },
});
var slideOut = keyframes({
    from: { transform: 'translate3d(0,0,0)' },
    to: { transform: '$$transformValue' },
});
var StyledContent$4 = styled(DialogPrimitive.Content, {
    backgroundColor: '$panel',
    boxShadow: '$colors$shadowLight 0 0 38px -10px, $colors$shadowDark 0 0 35px -15px',
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: 250,
    // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
    // Affects animated and non-animated dialogs alike.
    willChange: 'transform',
    // '&:focus': {
    //   outline: 'none',
    // },
    '&[data-state="open"]': {
        animation: slideIn + " 150ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    '&[data-state="closed"]': {
        animation: slideOut + " 150ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    variants: {
        side: {
            top: {
                $$transformValue: 'translate3d(0,-100%,0)',
                width: '100%',
                height: 300,
                bottom: 'auto',
            },
            right: {
                $$transformValue: 'translate3d(100%,0,0)',
                right: 0,
            },
            bottom: {
                $$transformValue: 'translate3d(0,100%,0)',
                width: '100%',
                height: 300,
                bottom: 0,
                top: 'auto',
            },
            left: {
                $$transformValue: 'translate3d(-100%,0,0)',
                left: 0,
            },
        },
    },
    defaultVariants: {
        side: 'right',
    },
});
var StyledCloseButton$1 = styled(DialogPrimitive.Close, {
    position: 'absolute',
    top: '$2',
    right: '$2',
});
var SheetContent = React__default['default'].forwardRef(function (_a, forwardedRef) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(StyledContent$4, __assign({}, props, { ref: forwardedRef }),
        children,
        React__default['default'].createElement(StyledCloseButton$1, { asChild: true },
            React__default['default'].createElement(IconButton, { variant: "ghost" },
                React__default['default'].createElement(reactIcons.Cross1Icon, null)))));
});
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetTitle = DialogPrimitive.Title;
var SheetDescription = DialogPrimitive.Description;

var SimpleToggle = styled(TogglePrimitive.Root, {
    // Reset
    alignItems: 'center',
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    color: '$hiContrast',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    height: '$5',
    width: '$5',
    backgroundColor: 'transparent',
    '@hover': {
        '&:hover': {
            backgroundColor: '$slateA3',
        },
    },
    '&:active': {
        backgroundColor: '$slateA4',
    },
    '&:focus': {
        boxShadow: 'inset 0 0 0 1px $slateA8, 0 0 0 1px $slateA8',
        zIndex: 1,
    },
    '&[data-state="on"]': {
        backgroundColor: '$slateA5',
        '@hover': {
            '&:hover': {
                backgroundColor: '$slateA5',
            },
        },
        '&:active': {
            backgroundColor: '$slateA7',
        },
    },
    variants: {
        shape: {
            circle: {
                borderRadius: '$round',
            },
            square: {
                borderRadius: '$1',
            },
        },
    },
});

var pulse = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: '100%' },
});
var Skeleton = styled('div', {
    backgroundColor: '$slate4',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
        animationName: "" + pulse,
        animationDuration: '500ms',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        backgroundColor: '$slate6',
        borderRadius: 'inherit',
        bottom: 0,
        content: '""',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    variants: {
        variant: {
            avatar1: {
                borderRadius: '$round',
                height: '$3',
                width: '$3',
            },
            avatar2: {
                borderRadius: '$round',
                height: '$5',
                width: '$5',
            },
            avatar3: {
                borderRadius: '$round',
                height: '$6',
                width: '$6',
            },
            avatar4: {
                borderRadius: '$round',
                height: '$7',
                width: '$7',
            },
            avatar5: {
                borderRadius: '$round',
                height: '$8',
                width: '$8',
            },
            avatar6: {
                borderRadius: '$round',
                height: '$9',
                width: '$9',
            },
            text: {
                height: '$1',
            },
            title: {
                height: '$5',
            },
            heading: {
                height: '$3',
            },
            button: {
                borderRadius: '$1',
                height: '$5',
                width: '$8',
            },
        },
    },
    defaultVariants: {
        variant: 'text',
    },
});

var _a$6;
var SliderTrack = styled(SliderPrimitive.Track, {
    position: 'relative',
    flexGrow: 1,
    backgroundColor: '$slate7',
    borderRadius: '$pill',
    '&[data-orientation="horizontal"]': {
        height: 2,
    },
    '&[data-orientation="vertical"]': {
        width: 2,
        height: 100,
    },
});
var SliderRange = styled(SliderPrimitive.Range, {
    position: 'absolute',
    background: '$blue9',
    borderRadius: 'inherit',
    '&[data-orientation="horizontal"]': {
        height: '100%',
    },
    '&[data-orientation="vertical"]': {
        width: '100%',
    },
});
var SliderThumb = styled(SliderPrimitive.Thumb, {
    position: 'relative',
    display: 'block',
    width: 15,
    height: 15,
    outline: 'none',
    opacity: '0',
    backgroundColor: 'white',
    boxShadow: '0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)',
    borderRadius: '$round',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -2,
        backgroundColor: 'hsla(0,0%,0%,.035)',
        transform: 'scale(1)',
        borderRadius: '$round',
        transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)',
    },
    '&:focus': {
        '&::after': {
            transform: 'scale(2)',
        },
    },
});
var StyledSlider = styled(SliderPrimitive.Root, {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    userSelect: 'none',
    touchAction: 'none',
    height: 15,
    flexGrow: 1,
    '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        width: 15,
    },
    '@hover': {
        '&:hover': (_a$6 = {},
            _a$6["& " + SliderTrack] = {
                backgroundColor: '$slate8',
            },
            _a$6["& " + SliderThumb] = {
                opacity: '1',
            },
            _a$6),
    },
});
var Slider = React__default['default'].forwardRef(function (props, forwardedRef) {
    var hasRange = Array.isArray(props.defaultValue || props.value);
    var thumbsArray = hasRange
        ? props.defaultValue || props.value
        : [props.defaultValue || props.value];
    return (React__default['default'].createElement(StyledSlider, __assign({}, props, { ref: forwardedRef }),
        React__default['default'].createElement(SliderTrack, null,
            React__default['default'].createElement(SliderRange, null)),
        thumbsArray.map(function (_, i) { return (React__default['default'].createElement(SliderThumb, { key: i })); })));
});

var Sup = styled('sup', {
    fontFeatureSettings: '"sups"',
    fontSize: '100%',
    lineHeight: '1',
    verticalAlign: 'baseline',
});

var Sub = styled('sub', {
    fontFeatureSettings: '"subs"',
    fontSize: '100%',
    lineHeight: '1',
    verticalAlign: 'baseline',
});

var _a$7;
var StyledThumb = styled(SwitchPrimitive.Thumb, {
    position: 'absolute',
    left: 0,
    width: 13,
    height: 13,
    backgroundColor: 'white',
    borderRadius: '$round',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;',
    transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
    transform: 'translateX(1px)',
    willChange: 'transform',
    '&[data-state="checked"]': {
        transform: 'translateX(11px)',
    },
});
var StyledSwitch = styled(SwitchPrimitive.Root, {
    all: 'unset',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    // Reset
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    backgroundColor: '$slate5',
    borderRadius: '$pill',
    position: 'relative',
    '&:focus': {
        boxShadow: '0 0 0 2px $colors$slate8',
    },
    '&[data-state="checked"]': {
        backgroundColor: '$blue9',
        '&:focus': {
            boxShadow: '0 0 0 2px $colors$blue8',
        },
    },
    variants: {
        size: {
            '1': {
                width: '$5',
                height: '$3',
            },
            '2': (_a$7 = {
                    width: '$7',
                    height: '$5'
                },
                _a$7["& " + StyledThumb] = {
                    width: 21,
                    height: 21,
                    transform: 'translateX(2px)',
                    '&[data-state="checked"]': {
                        transform: 'translateX(22px)',
                    },
                },
                _a$7),
        },
    },
    defaultVariants: {
        size: '1',
    },
});
var Switch = React__default['default'].forwardRef(function (props, forwardedRef) { return (React__default['default'].createElement(StyledSwitch, __assign({}, props, { ref: forwardedRef }),
    React__default['default'].createElement(StyledThumb, null))); });

var _a$8, _b, _c;
var Caption = styled('caption', {
    textAlign: 'start',
    marginBottom: '$5',
});
var Tbody = styled('tbody', {
    width: '100%',
});
var Tfoot = styled('tfoot', {});
var Tr = styled('tr', {});
var Th = styled('th', {
    fontWeight: 'unset',
    textAlign: 'start',
    fontSize: '$2',
    py: '$2',
    borderBottom: '1px solid $gray4',
    variants: {
        align: {
            start: {
                textAlign: 'start',
            },
            center: {
                textAlign: 'center',
            },
            end: {
                textAlign: 'end',
            },
        },
        border: {
            solid: {
                borderBottom: '1px solid $gray4',
            },
            dashed: {
                borderBottom: '1px dashed $gray8',
            },
        },
    },
    defaultVariants: {
        align: 'start',
        border: 'solid',
    },
});
var Td = styled('td', {
    py: '$2',
    borderBottom: '1px solid $gray4',
    fontSize: '$2',
    variants: {
        align: {
            start: {
                textAlign: 'start',
            },
            center: {
                textAlign: 'center',
            },
            end: {
                textAlign: 'end',
            },
        },
        border: {
            solid: {
                borderBottom: '1px solid $gray4',
            },
            dashed: {
                borderBottom: '1px dashed $gray8',
            },
        },
    },
    defaultVariants: {
        align: 'start',
        border: 'solid',
    },
});
var Thead = styled('thead', (_a$8 = {},
    _a$8["& " + Th] = {
        fontSize: '$1',
        color: '$gray11',
    },
    _a$8["& " + Td] = {
        fontSize: '$1',
        color: '$gray11',
    },
    _a$8));
var Table = styled('table', {
    width: '100%',
    tableLayout: 'fixed',
    borderSpacing: 0,
    variants: {
        striped: {
            true: (_b = {},
                _b["& " + Tbody] = (_c = {},
                    _c["& " + Tr] = {
                        '&:nth-child(odd)': {
                            bc: '$gray2',
                        },
                    },
                    _c),
                _b),
        },
    },
});

var TabLink = styled('a', {
    position: 'relative',
    flexShrink: 0,
    height: '$6',
    display: 'inline-flex',
    lineHeight: 1,
    fontSize: '$1',
    px: '$3',
    userSelect: 'none',
    outline: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$slate11',
    textDecoration: 'none',
    '@hover': {
        '&:hover': {
            color: '$hiContrast',
        },
    },
    '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
    },
    variants: {
        active: {
            true: {
                color: '$hiContrast',
                cursor: 'default',
                '&::after': {
                    position: 'absolute',
                    content: '""',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: 2,
                    backgroundColor: '$blue9',
                },
            },
        },
    },
});

var Tabs = styled(TabsPrimitive.Root, {
    display: 'flex',
    '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
    },
});
var TabsTrigger = styled(TabsPrimitive.Trigger, {
    all: 'unset',
    flexShrink: 0,
    height: '$5',
    display: 'inline-flex',
    lineHeight: 1,
    fontSize: '$1',
    px: '$2',
    userSelect: 'none',
    outline: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$slate11',
    border: '1px solid transparent',
    borderTopLeftRadius: '$2',
    borderTopRightRadius: '$2',
    zIndex: '10',
    '@hover': {
        '&:hover': {
            color: '$hiContrast',
        },
    },
    '&[data-state="active"]': {
        color: '$hiContrast',
        borderColor: '$slate6',
        borderBottomColor: 'transparent',
    },
    '&[data-orientation="vertical"]': {
        justifyContent: 'flex-start',
        borderTopRightRadius: 0,
        borderBottomLeftRadius: '$2',
        borderBottomColor: 'transparent',
        '&[data-state="active"]': {
            borderBottomColor: '$slate6',
            borderRightColor: 'transparent',
        },
    },
});
var StyledTabsList = styled(TabsPrimitive.List, {
    flexShrink: 0,
    display: 'flex',
    '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
    },
    '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        boxShadow: 'inset -1px 0 0 $slate6',
    },
});
var TabsList = React__default['default'].forwardRef(function (props, forwardedRef) { return (React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement(StyledTabsList, __assign({}, props, { ref: forwardedRef })),
    React__default['default'].createElement(Separator, null))); });
var TabsContent = styled(TabsPrimitive.Content, {
    flexGrow: 1,
    '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
    },
});

var TextArea = styled('textarea', {
    // Reset
    appearance: 'none',
    borderWidth: '0',
    fontFamily: 'inherit',
    margin: '0',
    outline: 'none',
    padding: '$1',
    width: '100%',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    backgroundColor: '$loContrast',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$hiContrast',
    fontVariantNumeric: 'tabular-nums',
    position: 'relative',
    minHeight: 80,
    resize: 'vertical',
    '&:focus': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        zIndex: '1',
    },
    '&::placeholder': {
        color: '$slate9',
    },
    '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: '$slate2',
        color: '$slate8',
        cursor: 'not-allowed',
        resize: 'none',
        '&::placeholder': {
            color: '$slate7',
        },
    },
    '&:read-only': {
        backgroundColor: '$slate2',
        '&:focus': {
            boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
        },
    },
    variants: {
        size: {
            '1': {
                borderRadius: '$1',
                fontSize: '$1',
                lineHeight: '16px',
                px: '$1',
            },
            '2': {
                borderRadius: '$1',
                fontSize: '$2',
                lineHeight: '20px',
                px: '$1',
            },
            '3': {
                borderRadius: '$2',
                fontSize: '$3',
                lineHeight: '23px',
                px: '$2',
            },
        },
        state: {
            invalid: {
                boxShadow: 'inset 0 0 0 1px $colors$red7',
                '&:focus': {
                    boxShadow: 'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
                },
            },
            valid: {
                boxShadow: 'inset 0 0 0 1px $colors$green7',
                '&:focus': {
                    boxShadow: 'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
                },
            },
        },
        cursor: {
            default: {
                cursor: 'default',
                '&:focus': {
                    cursor: 'text',
                },
            },
            text: {
                cursor: 'text',
            },
        },
    },
    defaultVariants: {
        size: '1',
    },
});

var Content = styled(TooltipPrimitive.Content, {
    backgroundColor: '$transparentPanel',
    borderRadius: '$1',
    padding: '$1 $2',
    variants: {
        multiline: {
            true: {
                maxWidth: 250,
                pb: 7,
            },
        },
    },
});
function Tooltip(_a) {
    var children = _a.children, content = _a.content, open = _a.open, defaultOpen = _a.defaultOpen, onOpenChange = _a.onOpenChange, multiline = _a.multiline, props = __rest(_a, ["children", "content", "open", "defaultOpen", "onOpenChange", "multiline"]);
    return (React__default['default'].createElement(TooltipPrimitive.Root, { open: open, defaultOpen: defaultOpen, onOpenChange: onOpenChange },
        React__default['default'].createElement(TooltipPrimitive.Trigger, { asChild: true }, children),
        React__default['default'].createElement(Content, __assign({ side: "top", align: "center", sideOffset: 5 }, props, { multiline: multiline }),
            React__default['default'].createElement(Text, { size: "1", as: "p", css: {
                    color: '$loContrast',
                    lineHeight: multiline ? '20px' : undefined,
                } }, content),
            React__default['default'].createElement(Box, { css: { color: '$transparentExtreme' } },
                React__default['default'].createElement(TooltipPrimitive.Arrow, { offset: 5, width: 11, height: 5, style: {
                        fill: 'currentColor',
                    } })))));
}

var TreeItem = styled('div', {
    // Reset
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    lineHeight: '1',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    '&:disabled': {
        pointerEvents: 'none',
    },
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    // Custom
    height: '29px',
    px: '$2',
    fontSize: '$1',
    color: '$hiContrast',
    variants: {
        variant: {
            gray: {
                backgroundColor: '$slate3',
                '&:hover': {
                    backgroundColor: '$slate4',
                },
                '&:active': {
                    backgroundColor: '$slate5',
                },
            },
            red: {
                backgroundColor: '$red3',
                '&:hover': {
                    backgroundColor: '$red4',
                },
                '&:active': {
                    backgroundColor: '$red5',
                },
            },
            crimson: {
                backgroundColor: '$crimson3',
                '&:hover': {
                    backgroundColor: '$crimson4',
                },
                '&:active': {
                    backgroundColor: '$crimson5',
                },
            },
            pink: {
                backgroundColor: '$pink3',
                '&:hover': {
                    backgroundColor: '$pink4',
                },
                '&:active': {
                    backgroundColor: '$pink5',
                },
            },
            purple: {
                backgroundColor: '$purple3',
                '&:hover': {
                    backgroundColor: '$purple4',
                },
                '&:active': {
                    backgroundColor: '$purple5',
                },
            },
            violet: {
                backgroundColor: '$violet3',
                '&:hover': {
                    backgroundColor: '$violet4',
                },
                '&:active': {
                    backgroundColor: '$violet5',
                },
            },
            indigo: {
                backgroundColor: '$indigo3',
                '&:hover': {
                    backgroundColor: '$indigo4',
                },
                '&:active': {
                    backgroundColor: '$indigo5',
                },
            },
            blue: {
                backgroundColor: '$blue3',
                '&:hover': {
                    backgroundColor: '$blue4',
                },
                '&:active': {
                    backgroundColor: '$blue5',
                },
            },
            cyan: {
                backgroundColor: '$cyan3',
                '&:hover': {
                    backgroundColor: '$cyan4',
                },
                '&:active': {
                    backgroundColor: '$cyan5',
                },
            },
            teal: {
                backgroundColor: '$teal3',
                '&:hover': {
                    backgroundColor: '$teal4',
                },
                '&:active': {
                    backgroundColor: '$teal5',
                },
            },
            green: {
                backgroundColor: '$green3',
                '&:hover': {
                    backgroundColor: '$green4',
                },
                '&:active': {
                    backgroundColor: '$green5',
                },
            },
            lime: {
                backgroundColor: '$lime3',
                '&:hover': {
                    backgroundColor: '$lime4',
                },
                '&:active': {
                    backgroundColor: '$lime5',
                },
            },
            yellow: {
                backgroundColor: '$yellow3',
                '&:hover': {
                    backgroundColor: '$yellow4',
                },
                '&:active': {
                    backgroundColor: '$yellow5',
                },
            },
            amber: {
                backgroundColor: '$amber3',
                '&:hover': {
                    backgroundColor: '$amber4',
                },
                '&:active': {
                    backgroundColor: '$amber5',
                },
            },
            orange: {
                backgroundColor: '$orange3',
                '&:hover': {
                    backgroundColor: '$orange4',
                },
                '&:active': {
                    backgroundColor: '$orange5',
                },
            },
            gold: {
                backgroundColor: '$gold3',
                '&:hover': {
                    backgroundColor: '$gold4',
                },
                '&:active': {
                    backgroundColor: '$gold5',
                },
            },
            brown: {
                backgroundColor: '$brown3',
                '&:hover': {
                    backgroundColor: '$brown4',
                },
                '&:active': {
                    backgroundColor: '$brown5',
                },
            },
            bronze: {
                backgroundColor: '$bronze3',
                '&:hover': {
                    backgroundColor: '$bronze4',
                },
                '&:active': {
                    backgroundColor: '$bronze5',
                },
            },
        },
    },
});

var StyledVerifiedBadge = styled('div', Flex, {
    alignItems: 'center',
    backgroundColor: '$blue9',
    borderRadius: '$round',
    color: 'white',
    flexShrink: 0,
    justifyContent: 'center',
    width: '$3',
    height: '$3',
});
var VerifiedBadge = React__default['default'].forwardRef(function (props, forwardedRef) { return (React__default['default'].createElement(StyledVerifiedBadge, __assign({}, props, { ref: forwardedRef }),
    React__default['default'].createElement(reactIcons.CheckIcon, null))); });

Object.defineProperty(exports, 'AspectRatio', {
    enumerable: true,
    get: function () {
        return reactAspectRatio.AspectRatio;
    }
});
Object.defineProperty(exports, 'Portal', {
    enumerable: true,
    get: function () {
        return reactPortal.Portal;
    }
});
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.AvatarNestedItem = AvatarNestedItem;
exports.Badge = Badge;
exports.Banner = Banner;
exports.Box = Box;
exports.Button = Button;
exports.Caption = Caption;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Code = Code;
exports.Container = Container;
exports.ContextMenu = ContextMenu;
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
exports.ContextMenuContent = ContextMenuContent;
exports.ContextMenuGroup = ContextMenuGroup;
exports.ContextMenuItem = ContextMenuItem;
exports.ContextMenuLabel = ContextMenuLabel;
exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
exports.ContextMenuRadioItem = ContextMenuRadioItem;
exports.ContextMenuSeparator = ContextMenuSeparator;
exports.ContextMenuTrigger = ContextMenuTrigger;
exports.ControlGroup = ControlGroup;
exports.DesignSystemProvider = DesignSystemProvider;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Flex = Flex;
exports.Grid = Grid;
exports.Heading = Heading;
exports.IconButton = IconButton;
exports.Image = Image;
exports.Kbd = Kbd;
exports.Link = Link;
exports.Menu = Menu;
exports.MenuCheckboxItem = MenuCheckboxItem;
exports.MenuGroup = MenuGroup;
exports.MenuItem = MenuItem;
exports.MenuLabel = MenuLabel;
exports.MenuRadioGroup = MenuRadioGroup;
exports.MenuRadioItem = MenuRadioItem;
exports.MenuSeparator = MenuSeparator;
exports.Overlay = Overlay;
exports.Panel = Panel;
exports.Paragraph = Paragraph;
exports.Popover = Popover;
exports.PopoverClose = PopoverClose;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.ProgressBar = ProgressBar;
exports.Radio = Radio;
exports.RadioCard = RadioCard;
exports.RadioCardGroup = RadioCardGroup;
exports.RadioGroup = RadioGroup;
exports.Section = Section;
exports.Select = Select;
exports.Separator = Separator;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.SimpleToggle = SimpleToggle;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Status = Status;
exports.Sub = Sub;
exports.Sup = Sup;
exports.Switch = Switch;
exports.TabLink = TabLink;
exports.Table = Table;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Tbody = Tbody;
exports.Td = Td;
exports.Text = Text;
exports.TextArea = TextArea;
exports.TextField = TextField;
exports.Tfoot = Tfoot;
exports.Th = Th;
exports.Thead = Thead;
exports.Tooltip = Tooltip;
exports.Tr = Tr;
exports.TreeItem = TreeItem;
exports.VerifiedBadge = VerifiedBadge;
exports.config = config;
exports.createTheme = createTheme;
exports.css = css;
exports.darkTheme = darkTheme;
exports.getCssText = getCssText;
exports.globalCss = globalCss;
exports.keyframes = keyframes;
exports.styled = styled;
exports.theme = theme;
