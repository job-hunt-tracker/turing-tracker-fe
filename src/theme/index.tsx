import {
  ThemeProvider as MuiThemeProvider,
  type PaletteMode,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {
  atom,
  selectorFamily,
  useRecoilCallback,
  useRecoilValue,
} from "recoil";
import { components } from "./components";
import palettes from "./palettes";
import * as typography from "./typography";

export const ThemeName = atom<PaletteMode>({
  key: "ThemeName",
  effects: [
    (ctx) => {
      const storageKey = "theme";

      if (ctx.trigger === "get") {
        const name: PaletteMode =
          localStorage?.getItem(storageKey) === "dark"
            ? "dark"
            : localStorage?.getItem(storageKey) === "light"
            ? "light"
            : matchMedia?.("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        ctx.setSelf(name);
      }

      ctx.onSet((value) => {
        localStorage?.setItem(storageKey, value);
      });
    },
  ],
});

export const Theme = selectorFamily({
  key: "Theme",
  dangerouslyAllowMutability: true,
  get(name: PaletteMode) {
    return function () {
      const { palette } = createTheme({ palette: palettes[name] });
      return createTheme(
        {
          palette,
          typography: typography.options,
          components: components(palette),
        },
        {
          typography: typography.overrides,
        },
      );
    };
  },
});

/**
 * Returns a customized Material UI theme.
 *
 * @param name - The name of the requested theme. Defaults to the
 *               auto-detected or user selected value.
 */
export function useTheme(name?: PaletteMode) {
  const selected = useRecoilValue(ThemeName);
  return useRecoilValue(Theme(name ?? selected));
}

/**
 * Switches between "light" and "dark" themes.
 */
export function useToggleTheme(name?: PaletteMode) {
  return useRecoilCallback(
    (ctx) => () => {
      ctx.set(
        ThemeName,
        name ?? ((prev) => (prev === "dark" ? "light" : "dark")),
      );
    },
    [],
  );
}

/**
 * This component makes the `theme` available down the React tree.
 */
export function ThemeProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <MuiThemeProvider theme={useTheme()} {...props} />;
}