import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ThemeManager,
  ThemeWBC as defaultTheme,
  bootstrapUnifiedTheme,
} from '@wdpui/react-gel';

/**
 * Wraps the component in a theme WITHOUT loading the global styles.
 * Should be used for most tests so global style changes don't break your snapshots.
 *
 * @param component - JSX Markup
 * @param theme - Theme Function from React GEL/GEL X
 */
export const withTheme = (component, theme = defaultTheme) => (
  <ThemeProvider theme={() => bootstrapUnifiedTheme(theme)}>
    {component}
  </ThemeProvider>
);

/**
 * Wraps the component in a ThemeManager which will apply the theme but also load the global styles
 * only use this if you know why, by default use the withTheme function.
 *
 * @param component - JSX Markup
 * @param theme = Theme Function from React GEL/GEL X
 */
export const withThemeManager = (component, theme = defaultTheme) => (
  <ThemeManager theme={theme}>{component}</ThemeManager>
);
