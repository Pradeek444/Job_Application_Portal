import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Landing = lazy(() => import("./pages/home/landing"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Profile = lazy(() => import("./pages/admin/Profile"));
const LoginForm = lazy(() => import("./pages/auth/register"));
const AuthForm = lazy(() => import("./pages/auth/Authfrom"));
const UserDashboard = lazy(() => import("./pages/User/UserDashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* 👈 Renders at /app/ */}
          <Route path="/admin/dashboard" element={<Dashboard />} /> {/* 👈 Renders at /app/ */}
          <Route path="/user/dashboard" element={<UserDashboard />} /> {/* 👈 Renders at /app/ */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
