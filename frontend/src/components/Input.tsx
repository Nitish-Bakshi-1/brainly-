function Input({
  onChange,
  placeHolder,
}: {
  placeHolder: string;
  onChange: () => void;
}) {
  return (
    <input
      className="px-4 py-2 border rounded m-2"
      placeholder={placeHolder}
      onChange={onChange}
      type="text"
    />
  );
}

export default Input;
