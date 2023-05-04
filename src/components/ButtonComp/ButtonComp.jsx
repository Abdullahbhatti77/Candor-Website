function ButtonComp(proptotype) {
  let props = new prototype(proptotype);

  return (
    <>
      <button
        className={props.className}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.name}
      </button>
    </>
  );
}
function prototype(value) {
  this.className =
    value.className || "btn submit-btn";
  this.onClick = value.onClick;
  this.type = value.type || "text";
  this.disabled = value.disabled || false;
  this.name = value.name || "SUBMIT";
  this.variant = value.variant || "Primary";
}

export default ButtonComp;
