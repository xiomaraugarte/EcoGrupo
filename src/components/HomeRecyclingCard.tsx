
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeRecyclingCard() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <MaterialIcons
                    name="recycling"
                    size={70}
                    color="#FFFFFF"
                />

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        ¿Tienes algo para reciclar?
                    </Text>

                    <Text style={styles.description}>
                        Registra tu reciclaje y sigue
                        {'\n'}sumando puntos
                    </Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Registrar
                    </Text>
                </View>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        ¿Cuántos puntos
                        {'\n'}puedo ganar?
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#195B47',
        borderRadius: 24,
        padding: 20,
        gap: 14,
    },

    top: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    textContainer: {
        flex: 1,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 'bold',
    },

    description: {
        color: '#FFFFFF',
        fontSize: 14,
    },

    buttons: {
        flexDirection: 'row',
        gap: 10,
    },

    button: {
        flex: 1,
        minHeight: 48,
        backgroundColor: '#2D466B',
        borderRadius: 16,
        paddingHorizontal: 6,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
