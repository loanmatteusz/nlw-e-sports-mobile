import { FlatList, Image, View } from "react-native";

import { Heading } from "../../components/Heading";
import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { GameCard } from "../../components/GameCard";

import { GAMES } from '../../utils/games';

export default function Home() {

  return (
    <View>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
