import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../theme";

export function Loading() {
  return (
    <View>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
