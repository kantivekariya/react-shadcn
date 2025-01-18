import { Footer } from "@/layout/footer";
import { Navbar } from "@/layout/navbar";
import { Sidebar } from "@/layout/sidebar";
import { cn } from "@/lib/utils";
import { selectGetOpenState } from "@/redux/features/sidebar/sidebar.slice";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const getOpenState = useSelector(selectGetOpenState);

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          !getOpenState ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Navbar title={""} />
        <div className="container pt-8 pb-8 px-4 sm:px-8">
          <Outlet />
        </div>
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          !getOpenState ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
