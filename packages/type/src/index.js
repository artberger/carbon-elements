import { baseFontSize, px } from '@carbon/layout';

// Font family fallbacks for: IBM Plex Mono, IBM Plex Sans, IBM Plex Sans
// Condensed, IBM Plex Sans Hebrew, and IBM Plex Serif
export const fontFamilies = {
  mono:
    "'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
  sans: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  sansCondensed:
    "'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif",
  sansHebrew:
    "'IBM Plex Sans Hebrew', 'Helvetica Hebrew', 'Arial Hebrew', sans-serif",
  serif: "'IBM Plex Serif', 'Georgia', Times, serif",
};

export function fontFamily(name) {
  if (!fontFamilies[name]) {
    throw new Error(
      `Unable to find font family: \`${name}\`. Expected one of: ` +
        `[${Object.keys(fontFamilies).join(', ')}]`
    );
  }
  return {
    fontFamily: fontFamilies[name],
  };
}

export const fontWeights = {
  light: 300,
  regular: 400,
  semibold: 600,
};

export function fontWeight(weight) {
  if (!fontWeights[weight]) {
    throw new Error(
      `Unable to find font weight: \`${weight}\`. Expected one of: ` +
        `[${Object.keys(fontWeights).join(', ')}]`
    );
  }
  return {
    fontWeight: fontWeights[weight],
  };
}

// Reset
export function reset() {
  return {
    html: {
      fontSize: px(baseFontSize),
    },
    body: {
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.regular,
      textRendering: 'optimizeLegibility',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
  };
}

// Scale
export function getTypeSize(step) {
  if (step === 1) {
    return 12;
  }
  return getTypeSize(step - 1) + Math.floor((step - 2) / 4 + 1) * 2;
}

export const typeScale = Array.from({ length: 23 }, (_, i) =>
  getTypeSize(i + 1)
);

// Tokens
export const caption01 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(1),
  fontWeight: fontWeights.regular,
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const label01 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(1),
  fontWeight: fontWeights.regular,
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const helperText01 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(1),
  fontStyle: 'italic',
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const bodyShort01 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(2),
  fontWeight: fontWeights.regular,
  lineHeight: rem(18),
  letterSpacing: px(0.16),
};

export const bodyLong01 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(2),
  fontWeight: fontWeights.regular,
  lineHeight: rem(20),
  letterSpacing: px(0.16),
};

export const bodyShort02 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(3),
  fontWeight: fontWeights.regular,
  lineHeight: rem(22),
  letterSpacing: 0,
};

export const bodyLong02 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(3),
  fontWeight: fontWeights.regular,
  lineHeight: rem(24),
  letterSpacing: 0,
};

export const code01 = {
  fontFamily: fontFamilies.mono,
  fontSize: typeScale(1),
  fontWeight: fontWeights.regular,
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const code02 = {
  fontFamily: fontFamilies.mono,
  fontSize: typeScale(2),
  fontWeight: fontWeights.regular,
  lineHeight: rem(20),
  letterSpacing: px(0.32),
};

export const heading01 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(2),
  fontWeight: fontWeights.semibold,
  lineHeight: rem(18),
  letterSpacing: px(0.16),
};

export const heading02 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(3),
  fontWeight: fontWeights.semibold,
  lineHeight: rem(22),
  letterSpacing: 0,
};

export const heading03 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(5),
  fontWeight: fontWeights.regular,
  lineHeight: rem(26),
  letterSpacing: 0,
};

export const productiveHeading04 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(6),
  fontWeight: fontWeights.regular,
  lineHeight: rem(30),
  letterSpacing: 0,
};

export const productiveHeading05 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(8),
  fontWeight: fontWeights.regular,
  lineHeight: rem(40),
  letterSpacing: 0,
};

export const expressiveHeading04 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(5),
  fontWeight: fontWeights.regular,
  lineHeight: rem(26),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(5),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.regular,
      lineHeight: rem(26),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(6),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.regular,
      lineHeight: rem(30),
      letterSpacing: 0,
    },
    xlg: {
      fontSize: typeScale(7),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.regular,
      lineHeight: rem(36),
      letterSpacing: 0,
    },
    max: {
      fontSize: typeScale(8),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.regular,
      lineHeight: rem(40),
      letterSpacing: 0,
    },
  },
};

export const expressiveHeading05 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(7),
  fontWeight: fontWeights.light,
  lineHeight: rem(36),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(9),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(44),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(10),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(50),
      letterSpacing: 0,
    },
    xlg: {
      fontSize: typeScale(11),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(56),
      letterSpacing: 0,
    },
    max: {
      fontSize: typeScale(13),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(70),
      letterSpacing: 0,
    },
  },
};

export const quotation01 = {
  fontFamily: fontFamilies.serif,
  fontSize: typeScale(5),
  fontWeight: fontWeights.regular,
  lineHeight: rem(26),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(5),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      lineHeight: rem(26),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(6),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      lineHeight: rem(30),
      letterSpacing: 0,
    },
    xlg: {
      fontSize: typeScale(7),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      lineHeight: rem(36),
      letterSpacing: 0,
    },
    max: {
      fontSize: typeScale(8),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      lineHeight: rem(40),
      letterSpacing: 0,
    },
  },
};

export const quotation02 = {
  fontFamily: fontFamilies.serif,
  fontSize: typeScale(7),
  fontWeight: fontWeights.light,
  lineHeight: rem(36),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(9),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.light,
      lineHeight: rem(44),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(10),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.light,
      lineHeight: rem(50),
      letterSpacing: 0,
    },
    xlg: {
      fontSize: typeScale(11),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.light,
      lineHeight: rem(56),
      letterSpacing: 0,
    },
    max: {
      fontSize: typeScale(13),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.light,
      lineHeight: rem(70),
      letterSpacing: 0,
    },
  },
};

export const display01 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(10),
  fontWeight: fontWeights.light,
  lineHeight: rem(50),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(10),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(50),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(12),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(64),
      letterSpacing: 0,
    },
    xlg: {
      fontSize: typeScale(13),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(70),
      letterSpacing: 0,
    },
    max: {
      fontSize: typeScale(15),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(86),
      letterSpacing: 0,
    },
  },
};

export const display02 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(10),
  fontWeight: fontWeights.semibold,
  lineHeight: rem(50),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(10),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.semibold,
      lineHeight: rem(50),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(12),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.semibold,
      lineHeight: rem(64),
      letterSpacing: 0,
    },
    xlg: {
      fontSize: typeScale(13),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.emiBold,
      lineHeight: rem(70),
      letterSpacing: 0,
    },
    max: {
      fontSize: typeScale(15),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.semibold,
      lineHeight: rem(86),
      letterSpacing: 0,
    },
  },
};

export const display03 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(10),
  fontWeight: fontWeights.light,
  lineHeight: rem(50),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(14),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(78),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(17),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(102),
      letterSpacing: px(-0.64),
    },
    xlg: {
      fontSize: typeScale(20),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(130),
      letterSpacing: px(-0.64),
    },
    max: {
      fontSize: typeScale(23),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(164),
      letterSpacing: px(-0.96),
    },
  },
};

export const display04 = {
  fontFamily: fontFamilies.sans,
  fontSize: typeScale(10),
  fontWeight: fontWeights.semibold,
  lineHeight: rem(50),
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: typeScale(14),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.semibold,
      lineHeight: rem(78),
      letterSpacing: 0,
    },
    lg: {
      fontSize: typeScale(17),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.semibold,
      lineHeight: rem(102),
      letterSpacing: px(-0.64),
    },
    xlg: {
      fontSize: typeScale(20),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.semibold,
      lineHeight: rem(130),
      letterSpacing: px(-0.64),
    },
    max: {
      fontSize: typeScale(23),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.semibold,
      lineHeight: rem(164),
      letterSpacing: px(-0.96),
    },
  },
};

// Spacing
export const spacing = {
  margin01: rem(16),
  margin02: rem(24),
  margin03: rem(32),
  layout01: rem(48),
  layout02: rem(64),
  layout03: rem(80),
};