
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeProductCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Mira todo lo que puedes comprar!
            </Text>

            <View style={styles.content}>
                <View style={styles.imagePlaceholder}>
                    <MaterialIcons
                        name="eco"
                        size={65}
                        color="#176149"
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.name}>
                        Pimentón
                    </Text>

                    <Text style={styles.description}>
                        Bolsa de 1kg
                    </Text>

                    <View style={styles.prices}>
                        <Text style={styles.price}>
                            35 Puntos
                        </Text>

                        <View style={styles.divider} />

                        <Text style={styles.price}>
                            Bs 14
                        </Text>
                    </View>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Ver tienda
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87BBA9',
        borderRadius: 24,
        padding: 16,
        gap: 10,
    },

    heading: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000000',
    },

    content: {
        flexDirection: 'row',
        gap: 12,
    },

    imagePlaceholder: {
        flex: 1,
        minWidth: 0,
        minHeight: 110,
        backgroundColor: '#B8D8B1',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    details: {
        flex: 1.25,
        minWidth: 0,
        justifyContent: 'space-between',
        gap: 3,
    },

    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },

    description: {
        fontSize: 12,
        color: '#000000',
    },

    prices: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
    },

    price: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000000',
    },

    divider: {
        width: 1,
        height: 28,
        backgroundColor: '#000000',
    },

    button: {
        backgroundColor: '#176149',
        borderRadius: 16,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 5,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
