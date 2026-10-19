
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeImpactStats() {
    return (
        <View style={styles.container}>
            <View style={[styles.card, styles.userCard]}>
                <Text style={styles.title}>
                    Tu impacto sí
                    {'\n'}cuenta
                </Text>

                <View style={styles.stat}>
                    <MaterialIcons
                        name="local-drink"
                        size={32}
                        color="#000000"
                    />

                    <View style={styles.statText}>
                        <Text style={styles.number}>24</Text>
                        <Text style={styles.description}>
                            Botellas
                            {'\n'}recicladas
                        </Text>
                    </View>
                </View>

                <View style={styles.stat}>
                    <MaterialIcons
                        name="eco"
                        size={32}
                        color="#000000"
                    />

                    <View style={styles.statText}>
                        <Text style={styles.number}>0,50 kg</Text>
                        <Text style={styles.description}>
                            de CO2 evitados
                        </Text>
                    </View>
                </View>
            </View>

            <View style={[styles.card, styles.groupCard]}>
                <Text style={styles.title}>
                    Impacto de
                    {'\n'}Ecogrupo
                </Text>

                <View style={styles.stat}>
                    <MaterialIcons
                        name="local-drink"
                        size={32}
                        color="#000000"
                    />

                    <View style={styles.statText}>
                        <Text style={styles.number}>2.012,65</Text>
                        <Text style={styles.description}>
                            Botellas
                            {'\n'}recicladas
                        </Text>
                    </View>
                </View>

                <View style={styles.stat}>
                    <MaterialIcons
                        name="eco"
                        size={32}
                        color="#000000"
                    />

                    <View style={styles.statText}>
                        <Text style={styles.number}>40,253 kg</Text>
                        <Text style={styles.description}>
                            de CO2 evitados
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 14,
    },

    card: {
        flex: 1,
        minWidth: 0,
        borderRadius: 24,
        padding: 14,
        gap: 10,
    },

    userCard: {
        backgroundColor: '#D0E8B3',
    },

    groupCard: {
        backgroundColor: '#BCCBDD',
    },

    title: {
        color: '#175B46',
        fontSize: 19,
        fontWeight: 'bold',
        lineHeight: 20,
    },

    stat: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    statText: {
        flex: 1,
    },

    number: {
        fontSize: 15,
        color: '#000000',
    },

    description: {
        fontSize: 12,
        color: '#000000',
        lineHeight: 14,
    },
});
