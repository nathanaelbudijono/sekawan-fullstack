import Breadcrumbs from "@/components/core/breadcrumb";
import UnstyledLink from "@/components/links/unstyled-link";
import PopoverIcon from "@/components/popover/popover-content";
import { clsx } from "clsx";

export default function Navbar() {
  return (
    <>
      <main
        className={clsx(
          "flex justify-between",
          "px-16 max-md:px-6 sticky top-0 z-10 py-4",
          " bg-red-200 bg-opacity-40 backdrop-blur-[2px] ",
          "dark:bg-quaternary-300 dark:bg-opacity-40"
        )}
      >
        <UnstyledLink href="/home">
          <img
            src="/logoLNSW.png"
            alt="logo lnsw"
            className="h-[40px] max-md:h-[35px]"
          />
        </UnstyledLink>
        <div className="flex items-center gap-[26px]">
          <PopoverIcon />
        </div>
      </main>
    </>
  );
}

const Links = [
  {
    title: "Home",
    link: "/",
  },
];
