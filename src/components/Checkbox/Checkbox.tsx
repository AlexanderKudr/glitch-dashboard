import "./Checkbox.scss";
export const Checkbox = ({ text }: { text: string }) => {
  return (
    <>
      <div className="check">
        <label className="container">
          <input type="checkbox" />
          <div className="checkmark"></div>
          <p>{text}</p>
        </label>
      </div>
    </>
  );
};
