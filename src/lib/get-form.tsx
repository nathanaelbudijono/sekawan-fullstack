import * as React from "react";
import { useAppStore } from "./store";

export default function useForm() {
  const { getForm, forms } = useAppStore();
  React.useEffect(() => {
    getForm();
  }, []);
  return forms;
}
