import { useState } from "react";
import Button from "./components/Button";
import { Card } from "./components/Card";
import CreateContentModal from "./components/CreateContentModal";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="">
        <Sidebar />
      </div>
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(!modalOpen);
          }}
        />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            text="Add Content"
            variant="primary"
            startIcon={<PlusIcon />}
          />
          <Button
            text="Share Brain"
            variant="secondary"
            startIcon={<ShareIcon />}
          />
        </div>
        <div className="flex">
          <Card
            type="youtube"
            title="u2b"
            link="https://www.youtube.com/watch?v=Oo3qsxihXqY"
          />
          <Card
            type="twitter"
            title="twitter"
            link="https://x.com/haneena07/status/1875923446502445257"
          />
        </div>
      </div>
    </div>
  );
}
