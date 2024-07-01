import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  const style = {
    ...props.style,
    paddingLeft: props.prependIcon ? "0.4rem" : "0.4rem",
    background: "#fff",
    borderRadius: "7px",
    border: "1px solid #F6F3EF",
    padding: "12px 15px" ,
    marginTop: "-.6rem",
    width: "100%",
    color: '#00000 !important',
    
    fontWeight: "300"
    
  };
  return (
    <div>
      <label
        className="d-block text-white pb-1 font-weight-bold"
        htmlFor={props.name}
        style={{fontSize:'14px'}}
      >
        {props.label}
      </label>
      <div>
        <input
          {...props}
          ref={ref}
          style={
            props.error
              ? {
                  ...style,
                  border: "1px solid #ff5b5b",
                  boxShadow: "none",
                  background: "#F7F9FC",
                }
              : {
                  ...style,
                }
          }
        />
      </div>
      {props.error && <p className="validate-error ">{props.error}</p>}
    </div>
  );
});
