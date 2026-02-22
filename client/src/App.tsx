import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

import DumanginLogo from "@/assets/DumanginADM_Logo_Principal.png";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />

          {/* Dumangin Badge */}
          <div className="fixed bottom-4 right-4 z-[9999]">
            <a
              href="https://www.dumanginadm.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                h-8 px-3
                rounded-full
                bg-slate-200/70
                backdrop-blur-md
                shadow-lg
                border border-slate-300/60
                transition-all duration-300
                hover:opacity-100
                opacity-95
              "
            >
              <img
                src={DumanginLogo}
                alt="Dumangin"
                className="w-5 h-5 object-contain"
              />
              <span className="text-sm font-medium tracking-wide text-[#1e2a44]">
                Dumangin
              </span>
            </a>
          </div>

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
