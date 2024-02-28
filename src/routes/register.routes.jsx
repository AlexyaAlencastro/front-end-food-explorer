import { Routes, Route } from "react-router-dom";

import { AdminRegister } from "../pages/Register";
import { NotFound } from "../pages/NotFound";

export function RegisterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminRegister />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
