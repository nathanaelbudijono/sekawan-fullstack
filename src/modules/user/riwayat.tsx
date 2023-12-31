import handlePagination from "@/lib/pagination";
import { Form } from "@/lib/slice/pengajuan-slices";
import Pagination from "./pagination";
import Status from "./status";

export default function Table({ formFilter }: { formFilter: Form["rows"] }) {
  const {
    indexOfFirstItem,
    setCurrentPage,
    indexOfLastItem,
    itemsPerPage,
    currentPage,
  } = handlePagination();
  const currentItems = formFilter?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

  return (
    <main className="overflow-auto">
      <table className="table-auto w-full mt-3">
        <thead>
          <tr className="bg-primary-100 text-typography-100">
            <th className="p-2 rounded-l-md">No</th>
            <th>Pengaju</th>
            <th>Kota asal</th>
            <th>Kota tujuan</th>
            <th>Kendaraan</th>
            <th>Status</th>
            <th className="rounded-r-md">Informasi</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item, index) => {
            return (
              <tr key={index} className="text-center">
                <td className="p-2 rounded-l-lg">{index + 1}</td>
                <td>{item?.namaPengaju}</td>
                <td>{item?.kotaAsal}</td>
                <td>{item?.kotaTujuan}</td>
                <td>{mapKendaraanIdToLabel(item?.kendaraanId)}</td>
                <td>{item?.status}</td>
                <td>
                  <Status status={item?.status} id={item?.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {formFilter?.length > itemsPerPage && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={formFilter.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </main>
  );
}
