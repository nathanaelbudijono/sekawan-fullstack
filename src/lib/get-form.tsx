import * as React from "react";
import { useAppStore } from "./store";
import { Form } from "./slice/pengajuan-slices";

export default function useForm() {
  const [search, setSearch] = React.useState<string>("");
  const { getForm, forms } = useAppStore();
  React.useEffect(() => {
    getForm();
  }, []);
  const formFilter: Form["rows"] = forms?.rows?.filter(
    (item) =>
      item?.kotaAsal.toLowerCase().includes(search.toLowerCase()) ||
      item?.kotaTujuan.toLowerCase().includes(search.toLowerCase()) ||
      item?.namaPengaju.toLowerCase().includes(search.toLowerCase()) ||
      item?.status.toLowerCase().includes(search.toLowerCase())
  );
  return { formFilter, search, setSearch };
}
