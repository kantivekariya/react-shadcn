import { RootState } from "@/redux/store/ConfigureStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ThemeSwitcher = () => {
  const { themeColor } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.startsWith("theme-")) {
        document.body.classList.remove(className);
      }
    });

    if (themeColor) {
      document.body.classList.add(`theme-${themeColor}`);
    }
  }, [themeColor]);

  return null;
};
