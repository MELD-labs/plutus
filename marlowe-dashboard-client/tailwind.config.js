'use strict';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#6288d1",
      gray: {
        light: "f8f8f8",
        dark: "#d0d0d4",
        darker: "#d0d0d4",
        darkest: "#a0a0a0"
      },
    },
    spacing: {
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem"
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }]
    },
  },
  variants: {
    extend: {},
    backgroundColor: ["responsive", "dark", "hover", "focus"],
  },
  plugins: [],
  corePlugins: {
    container: false,
    space: false,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false,
    accessibility: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundImage: false,
    gradientColorStops: false,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: false,
    borderOpacity: false,
    borderRadius: false,
    borderStyle: false,
    borderWidth: false,
    boxSizing: false,
    cursor: false,
    display: false,
    flexDirection: false,
    flexWrap: false,
    placeItems: false,
    placeContent: false,
    placeSelf: false,
    alignItems: false,
    alignContent: false,
    alignSelf: false,
    justifyItems: false,
    justifyContent: false,
    justifySelf: false,
    flex: false,
    flexGrow: false,
    flexShrink: false,
    order: false,
    float: false,
    clear: false,
    fontFamily: false,
    fontWeight: false,
    height: false,
    lineHeight: false,
    listStylePosition: false,
    listStyleType: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    objectFit: false,
    objectPosition: false,
    opacity: false,
    outline: false,
    overflow: false,
    overscrollBehavior: false,
    placeholderColor: false,
    placeholderOpacity: false,
    pointerEvents: false,
    position: false,
    inset: false,
    resize: false,
    boxShadow: false,
    ringWidth: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringColor: false,
    ringOpacity: false,
    fill: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textAlign: false,
    textOpacity: false,
    textOverflow: false,
    fontStyle: false,
    textTransform: false,
    textDecoration: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    letterSpacing: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    wordBreak: false,
    width: false,
    zIndex: false,
    gap: false,
    gridAutoFlow: false,
    gridTemplateColumns: false,
    gridAutoColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridAutoRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    transform: false,
    transformOrigin: false,
    scale: false,
    rotate: false,
    translate: false,
    skew: false,
    transitionProperty: false,
    transitionTimingFunction: false,
    transitionDuration: false,
    transitionDelay: false,
    animation: false
  }
};