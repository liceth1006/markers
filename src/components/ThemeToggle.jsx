import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" 
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <label className="inline-flex items-center relative">
      <input
        className="peer hidden"
        id="toggle"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <div
        className="relative h-[40px] w-[90px] bg-gray-200 peer-checked:bg-zinc-500 rounded-full
                    after:absolute after:content-['']   after:w-[30px] after:h-[30px] 
                    after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 
                    peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] 
                     active:after:w-[35px] peer-checked:after:left-[80px] peer-checked:after:translate-x-[-85%] 
                    shadow-sm duration-300 after:duration-300 after:shadow-md"
      ></div>
      <MdLightMode className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px] sm:left-[8px]"/>
      <MdDarkMode 
       className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[8px] sm:right-[8px]"/>
    </label>
  );
}

export default ThemeToggle;
