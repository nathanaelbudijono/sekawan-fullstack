import Breadcrumbs from "@/components/core/breadcrumb";
import PopoverIcon from "@/components/popover/popover-content";
import { clsx } from "clsx";

export default function Navbar() {
  return (
    <>
      <main
        className={clsx(
          "flex justify-between",
          "max-w-5xl mx-auto",
          "py-3 max-md:py-3 px-16 max-md:px-6 sticky top-0 z-50",
          "bg-primary-100",
          "dark:bg-quaternary-300 dark:bg-opacity-40"
        )}
      >
        <img
          src="/logo.png"
          alt="logo lnsw"
          className="h-[40px] max-md:h-[35px]"
        />

        <div className="flex items-center gap-[26px]">
          <PopoverIcon />
        </div>
      </main>
      <Breadcrumbs />
    </>
  );
}

const Links = [
  {
    title: "Home",
    link: "/",
  },
];
