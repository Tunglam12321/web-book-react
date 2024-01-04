import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
  flex: 1;
  padding: 40px 45px;
  justify-content: center;
  align-item: center;
`;

export const WrapperContainerRight = styled.div`
  width: 300px;
  background: linear-gradient(
    136deg,
    rgb(rgb(234, 245, 255)) -1%,
    rgb(236, 246, 255) 85%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-item: center;
  gap: 4px;
`;

export const WrapperTextLight = styled.span`
  color: rgb(13, 92, 182);
  font-size: 13px;
  cursor: pointer;
`;
