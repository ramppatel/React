import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import ThemeBtn from "./components/ThemeBtn";
import Card from './components/Card';


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // How to do actual change in theme

  useEffect(() => {
    const classList = document.querySelector("html").classList;
    classList.remove("light", "dark");
    classList.add(themeMode);
  }, [themeMode]);

  return (
      <ThemeContextProvider value = {{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* ThemeBtn */}
                    <ThemeBtn />
                </div>
          
                <div className="w-full max-w-sm mx-auto">
                    {/* Card */}
                    <Card />
                </div>
            </div>
        </div>
      </ThemeContextProvider>
  )
}

export default App
