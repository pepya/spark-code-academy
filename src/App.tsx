import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import HomePage from "@/pages/HomePage";
import LessonsPage from "@/pages/LessonsPage";
import LessonDetailPage from "@/pages/LessonDetailPage";
import BadgesPage from "@/pages/BadgesPage";
import ParentsPage from "@/pages/ParentsPage";
import LessonScriptsPage from "@/pages/LessonScriptsPage";
import ParentResourcesPage from "@/pages/ParentResourcesPage";
import BlockFlashcardsPage from "@/pages/BlockFlashcardsPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col min-w-0">
              <header className="sticky top-0 z-50 h-14 flex items-center border-b border-border bg-card/90 backdrop-blur-md px-4 gap-3">
                <SidebarTrigger />
                <span className="font-display font-bold text-primary text-lg flex items-center gap-2">
                  <span className="text-xl">🐱</span> Scratch for Juniors
                </span>
              </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/lessons" element={<LessonsPage />} />
                  <Route path="/lessons/:id" element={<LessonDetailPage />} />
                  <Route path="/badges" element={<BadgesPage />} />
                  <Route path="/parents" element={<ParentsPage />} />
                  <Route path="/lesson-scripts" element={<LessonScriptsPage />} />
                  <Route path="/parent-resources" element={<ParentResourcesPage />} />
                  <Route path="/block-flashcards" element={<BlockFlashcardsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
