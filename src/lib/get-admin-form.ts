import * as React from "react";
import { useAppStore } from "./store";

export default function useAdminForm() {
  const { adminforms, getAdminForm } = useAppStore();
  React.useEffect(() => {
    getAdminForm();
  }, []);

  return { adminforms };
}
