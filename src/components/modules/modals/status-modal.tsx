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
  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Modal Title">
        <Modal.Section>
          <section className="flex justify-between items-center">
            <Typography variant="h4" className="text-start">
              Ajuan Nomor {id}
            </Typography>
            <Typography variant="small" className="text-start">
              {kendaraan?.rows?.tanggal.substring(0, 10)}
            </Typography>
          </section>

          <span className="h-[2px] bg-primary-300 w-full"></span>
          <section className="text-start mt-3 flex gap-2 flex-col">
            <Typography variant="small">Status : {status}</Typography>
            <Typography variant="small">
              Kendaraan : {kendaraan?.rows?.kendaraan?.jenis}
            </Typography>
            <Typography variant="small">
              Plat : {kendaraan?.rows?.kendaraan?.plat}
            </Typography>
            <Typography variant="small">
              Service : {kendaraan?.rows?.kendaraan?.Service}
            </Typography>
            <Typography variant="small">
              BBM : {kendaraan?.rows?.kendaraan?.BBM}
            </Typography>
            <Typography variant="small">
              Driver : {kendaraan?.rows?.kendaraan?.driver}
            </Typography>
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
