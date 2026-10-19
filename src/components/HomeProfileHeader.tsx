
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeProfileHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                ¡Hola, Xiomaro!
            </Text>

            <View style={styles.avatar}>
                <MaterialIcons
                    name="person"
                    size={42}
                    color="#173D59"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 76,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    greeting: {
        flex: 1,
        fontSize: 29,
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#000000',
    },

    avatar: {
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: '#42B9E8',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
});
