function Input({
  placeHolder,
  reference,
}: {
  placeHolder: string;
  reference?: any;
  onChange: () => void;
}) {
  return (
    <input
      className="px-4 py-2 border rounded m-2"
      placeholder={placeHolder}
      type={"text"}
      ref={reference}
    />
  );
}

export default Input;
