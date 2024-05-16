import { Storage, createContext } from "alem";

export type ThemeContextProps = {
  theme: "light" | "dark";
  themeStyles: {
    light: string;
    dark: string;
  };
  setTheme: (theme: "light" | "dark") => void;
};

const themeStorageKey = "theme:key";

const ThemeContext = () => {
  const { setDefaultData, updateData, getSelf } = createContext<ThemeContextProps>("theme-context");

  setDefaultData({
    theme: "light",
    themeStyles: {
      light: "bg-[#ffffff] fixed -z-10 w-full h-full top-0 left-0",
      dark: "bg-[#171717] fixed -z-10 w-full h-full top-0 left-0",
    },

    setTheme: (theme) => {
      Storage.set(themeStorageKey, theme);

      updateData({
        theme,
      });
    },
  });

  // Load previous selected theme
  const previousTheme = Storage.get(themeStorageKey);
  if (previousTheme) {
    const self = getSelf();
    self.setTheme(previousTheme);
  }

  return getSelf();
};

export default ThemeContext;

// NOTE: You can use this but you need to put it one layer up
// const ThemeProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
//   ThemeContext();

//   return <>{children}</>;
// };

// export default ThemeProvider;
