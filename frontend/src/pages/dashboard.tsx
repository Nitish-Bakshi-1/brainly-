import { useState } from "react";
import Button from "../components/Button";
import { Card } from "../components/Card";
import CreateContentModal from "../components/CreateContentModal";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import UseContent from "../hooks/UseContent";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = UseContent();
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
          {JSON.stringify(contents)}
          {contents.map(({ type, link, title }) => (
            <Card type={type} title={title} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
