import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import "./styles.css"
import reportWebVitals from "./reportWebVitals.ts"

import { Router } from "@/router"
import { ThemeProvider } from "@/context/theme-context.tsx"

const rootElement = document.getElementById("app")
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StrictMode>,
  )
}

reportWebVitals()
