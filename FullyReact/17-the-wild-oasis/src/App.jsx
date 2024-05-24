import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Seetings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="account" element={<Account></Account>}></Route>
            <Route path="bookings" element={<Bookings></Bookings>}></Route>
            <Route path="cabins" element={<Cabins></Cabins>}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="settings" element={<Seetings></Seetings>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route index element={<Navigate replace to="dashboard" />}></Route>
          </Route>
          {/* This is the different pages for this reason we do not include them in
          the app layout component */}
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
