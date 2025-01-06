function Input({
  placeHolder,
  ref,
}: {
  placeHolder: string;
  ref: any;
  onChange: () => void;
}) {
  return (
    <input
      className="px-4 py-2 border rounded m-2"
      placeholder={placeHolder}
      type="text"
      ref={ref}
    />
  );
}

export default Input;
