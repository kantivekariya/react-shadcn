import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/layout";
import Dashboard from "@/pages/dashboard/dashboard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/ConfigureStore";
import { useEffect } from "react";
import NotFoundPage from "@/pages/NotFoundPage/not-found-page";
import FileManager from "@/pages/file-manager/file-manager";
import Chat from "@/pages/chat/chat";
import Mail from "@/pages/mail/mail";

const MainRoutes = () => {
  const { mode } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(mode);
  }, [mode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mail" element={<Mail />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
