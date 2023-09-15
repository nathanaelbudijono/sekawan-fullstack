import Typography from "@/components/core/typography";
import { AiOutlineSearch } from "react-icons/ai";

type searchProps = {
  search: string;
  setSearch: (search: string) => void;
};

export default function SearchHeader({ search, setSearch }: searchProps) {
  return (
    <main className="flex justify-between items-center max-sm:flex-col max-sm:items-start gap-2">
      <section>
        <Typography variant="h4">Riwayat Laporan</Typography>
      </section>
      <section className="flex items-center">
        <input
          placeholder="Search"
          className="bg-secondary-100 bg-opacity-50  p-1 rounded-md text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineSearch className="text-xl -translate-x-6 text-gray-500 opacity-50" />
      </section>
    </main>
  );
}
