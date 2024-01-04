import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputForm = styled(Input)`
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: rgb(232, 240, 254);
  border-radius: 0px;
  &:focus {
    background-color: rgb(232, 240, 254);
  }
`;
