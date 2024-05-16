import { useContext } from "alem";
import { ThemeContextProps } from "../contexts/ThemeProvider";

const useTheme = () => useContext<ThemeContextProps>("theme-context");
export default useTheme;
