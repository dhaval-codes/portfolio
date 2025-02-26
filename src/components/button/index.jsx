import React from "react";
import { ButtonText, ButtonWrpr } from "./style";

function Button({
  label,
  LeftIcon,
  RightIcon,
  buttonType = "primary",
  onClick,
}) {
  return (
    <ButtonWrpr type={buttonType} onClick={onClick}>
      {LeftIcon && <LeftIcon />}
      <ButtonText type={buttonType}>{label}</ButtonText>
      {RightIcon && <RightIcon />}
    </ButtonWrpr>
  );
}

export default Button;
