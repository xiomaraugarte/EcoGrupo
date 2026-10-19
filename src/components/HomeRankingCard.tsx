
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeRankingCard() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Sigue subiendo en el ranking!
                </Text>

                <Text style={styles.description}>
                    Te falta 1 semana para llegar
                    {'\n'}al puesto #2.
                </Text>

                <View style={styles.progressBackground}>
                    <View style={styles.progress} />
                </View>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Ver ranking
                    </Text>
                </View>
            </View>

            <View style={styles.trophy}>
                <MaterialIcons
                    name="emoji-events"
                    size={88}
                    color="#FFB52E"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 194,
        backgroundColor: '#B6DE8D',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },

    content: {
        flex: 1,
        gap: 6,
    },

    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#174F40',
    },

    description: {
        fontSize: 12,
        color: '#17251E',
    },

    progressBackground: {
        height: 27,
        backgroundColor: '#438400',
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 2,
    },

    progress: {
        width: '85%',
        height: '100%',
        backgroundColor: '#14523D',
        borderRadius: 20,
    },

    button: {
        alignSelf: 'center',
        backgroundColor: '#176149',
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 7,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    trophy: {
        width: 88,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
