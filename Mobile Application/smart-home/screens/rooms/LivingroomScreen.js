import { View, Heading, VStack, HStack, ScrollView } from "native-base";
import SwitchCard from "../../components/UI/SwitchCard";

const LivingroomScreen = (props) => {
  return (
    <View>
      <Heading size="xl" px="5" pb="3" color="pink.400">
        Livingrooms
      </Heading>

      <ScrollView mb="60" showsVerticalScrollIndicator={false}>
        <VStack space={4} alignItems="center">
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
          <SwitchCard />
        </VStack>
      </ScrollView>
    </View>
  );
};

export default LivingroomScreen;
