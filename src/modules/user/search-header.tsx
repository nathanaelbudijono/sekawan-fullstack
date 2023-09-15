import clsx from "clsx";

type searchProps = {
  search: string;
  setSearch: (search: string) => void;
};

export default function SearchHeader({ search, setSearch }: searchProps) {
  return (
    <main className="flex justify-end mb-3">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={clsx(
          "rounded-sm bg-transparent",
          "border border-black px-1"
        )}
        placeholder="Enter a keyword"
      />
    </main>
  );
}
