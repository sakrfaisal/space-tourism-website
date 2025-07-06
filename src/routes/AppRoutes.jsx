import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy load your pages/components
const Home = React.lazy(() => import("../pages/Home.jsx"));
const Destination = React.lazy(() => import("../pages/Destination.jsx"));
const Crew = React.lazy(() => import("../pages/Crew.jsx"));
const Technology = React.lazy(() => import("../pages/Technology.jsx"));
const DestinationDetail = React.lazy(() => import("../components/DestinationDetail.jsx"));
const CrewDetail = React.lazy(() => import("../components/CrewDetail.jsx"));
const TechDetail = React.lazy(() => import("../components/TechDetail.jsx"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />}>
            <Route index element={<Navigate to="moon" replace />} />
            <Route path=":destId" element={<DestinationDetail />} />
          </Route>
          <Route path="/crew" element={<Crew />}>
            <Route index element={<Navigate to="hurley" replace />} />
            <Route path=":crewId" element={<CrewDetail />} />
          </Route>
          <Route path="/technology" element={<Technology />}>
            <Route index element={<Navigate to="launch-vehicle" replace />} />
            <Route path=":techId" element={<TechDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
