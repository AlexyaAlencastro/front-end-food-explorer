import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";
import { RegisterRoutes } from "./register.routes";

export function Routes() {
  const { user, isAdmin } = useAuth();
  const [loaded, setLoaded] = useState(false);
  const [adminExists, setAdminExists] = useState(false);

  useEffect(() => {
    async function checkIfAdminExists() {
      try {
        const response = await api.get("/admin");

        if (response.data) {
          setAdminExists(true);
        } else {
          setAdminExists(false);
        }

        setLoaded(true);
      } catch (error) {
        console.error(
          "Ocorreu um erro ao verificar se existe um administrador:",
          error
        );
        toast(
          "Ocorreu um erro ao verificar se existe um administrador. Por favor, tente novamente."
        );
      }
    }

    checkIfAdminExists();
  }, []);

  if (!loaded) {
    return (
      <div className="loading">
        <div>
          <div id="circular3dG">
            <div id="circular3d_1G" className="circular3dG"></div>
            <div id="circular3d_2G" className="circular3dG"></div>
            <div id="circular3d_3G" className="circular3dG"></div>
            <div id="circular3d_4G" className="circular3dG"></div>
            <div id="circular3d_5G" className="circular3dG"></div>
            <div id="circular3d_6G" className="circular3dG"></div>
            <div id="circular3d_7G" className="circular3dG"></div>
            <div id="circular3d_8G" className="circular3dG"></div>
          </div>
        </div>
        <span>Carregando...</span>
      </div>
    );
  }

  return (
    <BrowserRouter>
        {
            adminExists ? (
                user ? (isAdmin ? <AdminRoutes /> : <UserRoutes />) : <AuthRoutes />
            ) : (
                <RegisterRoutes />
            )
        }
    </BrowserRouter>
);
}