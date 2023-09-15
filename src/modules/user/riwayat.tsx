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
  return (
    <main>
      <table className="table-auto w-full  mt-3 rounded">
        <thead>
          <tr className="bg-red-200">
            <th className="p-2 rounded-l-lg">No</th>
            <th>Pengaju</th>
            <th>Kota asal</th>
            <th>Kota tujuan</th>
            <th>Kendaraan</th>
            <th>Status</th>
            <th>Informasi</th>
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
                <td>{item?.kendaraanId}</td>
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
