
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function HomeBottomNavigation() {
    return (
        <View style={styles.container}>
            <View style={styles.selected}>
                <MaterialIcons
                    name="home"
                    size={38}
                    color="#176149"
                />
            </View>

            <View style={styles.item}>
                <MaterialIcons
                    name="grass"
                    size={38}
                    color="#202020"
                />
            </View>

            <View style={styles.item}>
                <MaterialIcons
                    name="map"
                    size={38}
                    color="#202020"
                />
            </View>

            <View style={styles.item}>
                <MaterialIcons
                    name="person-outline"
                    size={38}
                    color="#202020"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 78,
        backgroundColor: '#A7C99A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
    },

    item: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },

    selected: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
