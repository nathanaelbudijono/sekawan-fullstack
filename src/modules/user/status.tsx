import * as React from "react";
import IconButton from "@/components/buttons/icon-button";
import StatusModal from "@/components/modules/modals/status-modal";

import { BsInfo } from "react-icons/bs";

interface StatusProps {
  status: string;
  id: number;
}
export default function Status({ status, id }: StatusProps) {
  const [showModal, setShowModal] = React.useState(false);
  function Clicked() {
    setShowModal(true);
  }
  return (
    <main>
      <IconButton variant="primary" icon={BsInfo} onClick={Clicked}>
        Open Modal
      </IconButton>
      {showModal && <StatusModal id={id} status={status} />}
    </main>
  );
}
