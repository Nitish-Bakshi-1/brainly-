import Button from "./components/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

export default function App() {
  return (
    <div>
      <Button text="Add Content" variant="primary" startIcon={<PlusIcon />} />
      <Button
        text="Share Brain"
        variant="secondary"
        startIcon={<ShareIcon />}
      />
    </div>
  );
}
