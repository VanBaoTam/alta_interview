function SubmitButton(props: {
  text: string;
  backgroundColor?: string;
  color?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fnc?: any;
}) {
  const {
    text = "submit",
    backgroundColor = "white",
    color = "black",
    fnc,
  } = props ?? {};
  return (
    <button
      onClick={fnc}
      style={{
        backgroundColor: "#0036B4",
        padding: "16px 20px",
        cursor: "pointer",
        borderRadius: 36,
        background: backgroundColor,
        color: color,
        fontSize: "20px",
        marginTop: "16px",
        border: "1px solid white",
        boxShadow: "inset 0px 0px 10px 5px rgba(50, 143, 253, 0.6)",
      }}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
