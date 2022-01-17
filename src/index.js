import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
      {/* wrap app in a context provider so we can access some variables
      in any component, prop drilling */}
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
