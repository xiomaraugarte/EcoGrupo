
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeUserSummary() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <MaterialIcons
                    name="local-fire-department"
                    size={28}
                    color="#C93624"
                />

                <Text style={styles.streak}>
                    12 semanas de racha
                </Text>
            </View>

            <View style={styles.item}>
                <MaterialIcons
                    name="recycling"
                    size={28}
                    color="#176149"
                />

                <Text style={styles.points}>
                    30 puntos
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },

    streak: {
        color: '#C93624',
        fontSize: 17,
    },

    points: {
        color: '#176149',
        fontSize: 17,
    },
});
