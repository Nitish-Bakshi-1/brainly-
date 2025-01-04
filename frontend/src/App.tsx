import "./App.css";
import Button from "./components/Button";
import { PlusIcon } from "./icons/Plus";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon />}
        size="md"
        variant="primary"
        text="Share Brain"
      />
      <Button size="md" variant="secondary" text="Add Content" />
    </>
  );
}

export default App;
