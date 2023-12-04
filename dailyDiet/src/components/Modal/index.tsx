import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

import * as S from "./styles";
type Props = TouchableOpacityProps & {
  visible: boolean;
  onClose: any;
  onRemove: () => void
};
export function CustomAlert({ visible, onClose, onRemove }: Props) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <S.Container>
        <S.innerContainer>
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>
          <S.ContainerButton>
            <S.CancelButton  onPress={onClose}>
              <S.TextCancel>Cancelar</S.TextCancel>
            </S.CancelButton>

            <S.ConfirmButton onPress={onRemove}>
              <S.TextConfirm>Sim, excluir</S.TextConfirm>
            </S.ConfirmButton>
          </S.ContainerButton>
        </S.innerContainer>
      </S.Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
  },
});

export default CustomAlert;
