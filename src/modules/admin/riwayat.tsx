import * as React from "react";
import { AdminForm } from "@/lib/slice/admin-slices";
import { DownloadTableExcel } from "react-export-table-to-excel";
import clsx from "clsx";

export default function Table2({
  adminforms,
}: {
  adminforms: AdminForm["rows"];
}) {
  function mapKendaraanIdToLabel(kendaraanId: number): string {
    switch (kendaraanId) {
      case 4:
        return "Box";
      case 3:
        return "Container";
      case 2:
        return "PickUp";
      case 1:
        return "Truck";
      default:
        return "unknown";
    }
  }
  const tableRef = React.useRef(null);
  return (
    <main className="overflow-auto w-full">
      <section className="absolute sm:-translate-y-10">
        <DownloadTableExcel
          filename="pengajuan table"
          sheet="users"
          currentTableRef={tableRef.current}
        >
          <button
            className={clsx(
              "px-2 py-1",
              "bg-primary-100 rounded-md shadow-sm text-typography-100",
              "hover:bg-primary-200",
              " transition-color duration-200 ease-in-out"
            )}
          >
            Export excel
          </button>
        </DownloadTableExcel>
      </section>

      <table className="table-auto w-full mt-3 opacity-0" ref={tableRef}>
        <thead>
          <tr className="bg-primary-100 text-typography-100">
            <th className="p-2 rounded-l-md">No</th>
            <th>Pengaju</th>
            <th>Kota asal</th>
            <th>Kota tujuan</th>
            <th>Kendaraan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {adminforms?.map((item, index) => {
            return (
              <tr key={index} className="text-center">
                <td className="p-2 rounded-l-lg">{index + 1}</td>
                <td>{item?.namaPengaju}</td>
                <td>{item?.kotaAsal}</td>
                <td>{item?.kotaTujuan}</td>
                <td>{mapKendaraanIdToLabel(item?.kendaraanId)}</td>
                <td>{item?.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
