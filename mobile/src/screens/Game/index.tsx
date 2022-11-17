import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { Entypo } from "@expo/vector-icons";
import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";

export function Game() {
    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.right} />
                </View>
                <Heading
                    title={game.title}
                    subtitle="Log in and start to play!"
                />
            </SafeAreaView>
        </Background>
    );
}
