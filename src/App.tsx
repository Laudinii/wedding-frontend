import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvitationPage from "./pages/InvitationPage";
import NoInvitationId from "./pages/NoInvitationId";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NoInvitationId />} />
          <Route path="/:id" element={<InvitationPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
