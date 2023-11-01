import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;
export const ContainerBody = styled.View`
  height: 712px;
  padding: 16px 24px;
  border-top-right-radius: 24px;
  border-top-left-radius:24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;
export const ContainerInputData = styled.View`
  flex-direction: row;
  justify-content: space-between;

  height: 48px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const ContainerSelectData = styled.View`
  flex-direction: row;
  justify-content: flex-start;


  height: 72px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 136px;
`;