import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function Buttonsec() {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderColor: colors.primarySoft,
        borderWidth: 4,
        borderRadius: 16,
        paddingVertical: 12,
    },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: '#1F1F1F' },
});
