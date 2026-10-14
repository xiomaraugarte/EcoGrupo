import Header from "@/components/Header";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttonprin from "../components/Button prin";
import ButtonG from "../components/ButtonG";
import Buttonsec from '../components/Buttonsec';
import RegisterForm from "../components/RegisterForm";
import { colors } from '../constants/colors';

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <RegisterForm />
        <Buttonprin />
        <Buttonsec />
        <ButtonG />
        {/* COMPONENTS: add each one right above this line */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: 20, gap: 16 },
});
