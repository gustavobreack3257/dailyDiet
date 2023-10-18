import * as S from "./styles";
type Props = {
  title: string;
};
export function Header({ title }: Props) {
  return (
    <S.Container>
      <S.ContainerIcon>
        <S.Icon />
      </S.ContainerIcon>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
      </S.ContainerTitle>
    </S.Container>
  );
}
