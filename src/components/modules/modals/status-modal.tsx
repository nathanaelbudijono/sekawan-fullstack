import Button from "@/components/buttons/button";
import Modal from "@/components/core/modal";
import Typography from "@/components/core/typography";
import { useAppStore } from "@/lib/store";
import * as React from "react";

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
          <Typography variant="h4" className="text-start">
            Ajuan no {id}
          </Typography>
          <span className="h-[2px] bg-d-100 w-full"> </span>
          <section className="text-start">
            <Typography variant="small">Status : {status}</Typography>
            <Typography variant="small">
              Kendaraan :{kendaraan?.rows?.kendaraan?.jenis}
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
