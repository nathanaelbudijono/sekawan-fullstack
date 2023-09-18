import * as React from "react";
import { useAppStore } from "./store";
export default function GetKendaraan() {
  const { getKendaraan2, kendaraan2 } = useAppStore();
  React.useEffect(() => {
    getKendaraan2();
  }, []);
  return kendaraan2;
}
