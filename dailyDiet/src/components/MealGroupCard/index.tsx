import { MealCard } from "@components/MealCard";

import * as S from "./style";
import { MealItemStorageDTO } from "../../Storage/MealStorageDTO";

type MealGroupCardProps = {
  item: MealItemStorageDTO;
  onNavigateDetails: (id: string, date: string) => void;
};
export function MealGroupCard({ item, onNavigateDetails }: MealGroupCardProps) {
  const { date, content } = item;
  return (
    //
    <S.Container>
      <S.ContainerDataTitle>
        <S.DateTitle>{date.replaceAll("/", ".")}</S.DateTitle>
      </S.ContainerDataTitle>
      {content.map((meal) => (
        <MealCard
          title={meal.name}
          key={meal.id}
          hour={meal.hour}
          circleStatusType={meal.dietGroup === 'Sim' ? 'POSITIVE': 'NEGATIVE'}
          onPress={() => onNavigateDetails(meal.id, date)}
        />
      ))}

    </S.Container>
  );
}
