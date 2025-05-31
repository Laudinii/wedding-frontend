import { HashRouter, Route, Routes } from "react-router-dom";
import InvitationPage from "./pages/InvitationPage";
import NoInvitationId from "./pages/NoInvitationId";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NoInvitationId />} />
          <Route path="/:id" element={<InvitationPage />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
