
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { colors } from '../../constants/colors';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.primary,

                tabBarStyle: {
                    height: 100,
                    backgroundColor: '#AFC99F',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    paddingTop: 14,
                    paddingBottom: 14,
                },

                tabBarItemStyle: {
                    height: 72,
                    marginTop: 5,
                    marginHorizontal: 39,
                    borderRadius: 24,
                    overflow: 'hidden',
                },

                tabBarActiveBackgroundColor: '#FFFFFF',

                tabBarIconStyle: {
                    width: 64,
                    height: 64,
                    marginTop: 0,
                },
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{ href: null }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Menú',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="home"
                            size={48}
                            color={colors.primary}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="shopping_cart"
                options={{
                    title: 'Potted Plant',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="yard"
                            size={48}
                            color={colors.primary}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="map"
                options={{
                    title: 'Map',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="map"
                            size={48}
                            color={colors.primary}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="person"
                            size={48}
                            color={colors.primary}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
