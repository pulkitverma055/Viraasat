import { Stack } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index" // 👈 your Welcome screen
        options={{
          tabBarStyle: { display: 'none' }, // hides the tab bar
          href: null, // 👈 removes it from the tab list
        }}
      />

      <Stack.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />

      <Stack.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
    </Stack>
  );
}

