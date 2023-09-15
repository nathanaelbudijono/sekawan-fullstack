import * as React from "react";
import Button from "@/components/buttons/button";
import Modal from "@/components/core/modal";
import Typography from "@/components/core/typography";

import { useAppStore } from "@/lib/store";

type modalProps = {
  id: number;
  status: string;
};

export default function StatusModal({ id, status }: modalProps) {
  const [open, setOpen] = React.useState(true);
  const { getKendaraan, kendaraan } = useAppStore();

  React.useEffect(() => {
    getKendaraan(id);
  }, []);

  const jenis = status === "Diterima" ? "-" : kendaraan?.rows?.kendaraan?.jenis;
  const plat = status === "Diterima" ? "-" : kendaraan?.rows?.kendaraan?.plat;
  const service =
    status === "Diterima" ? "-" : kendaraan?.rows?.kendaraan?.Service;
  const bbm = status === "Diterima" ? "-" : kendaraan?.rows?.kendaraan?.BBM;
  const driver =
    status === "Diterima" ? "-" : kendaraan?.rows?.kendaraan?.driver;
  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Modal Title">
        <Modal.Section>
          <Typography variant="h4" className="text-start">
            Ajuan Nomor {id}
          </Typography>
          <Typography variant="small" className="text-start mb-3">
            {kendaraan?.rows?.tanggal}
          </Typography>

          <span className="h-[2px] bg-primary-300 w-full"></span>
          <section className="text-start mt-3 flex gap-2 flex-col">
            <Typography variant="small">Status : {status}</Typography>
            <Typography variant="small">Kendaraan : {jenis}</Typography>
            <Typography variant="small">Plat : {plat}</Typography>
            <Typography variant="small">Service : {service}</Typography>
            <Typography variant="small">BBM : {bbm}</Typography>
            <Typography variant="small">Driver : {driver}</Typography>
          </section>
          <Typography variant="small" className="text-start mt-3">
            Keterangan : {kendaraan?.rows?.keterangan}
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <div className="flex justify-end">
            <Button
              variant="primary"
              size="base"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}
