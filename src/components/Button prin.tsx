import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function Buttonprin() {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: colors.primary,
        borderRadius: 16,
        paddingVertical: 16,
    },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
});
