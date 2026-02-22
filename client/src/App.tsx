import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          {/* Dumangin floating badge (fixed, follows scroll) */}
          <div className="fixed bottom-4 right-4 z-[9999] select-none">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/90 px-3 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-[11px] font-semibold text-white ring-1 ring-white/10">
                D
              </div>
              <span className="text-xs font-medium tracking-wide text-white/90">Dumangin</span>
            </div>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
