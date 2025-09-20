import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { supabase } from './supabaseClient'; // Adjust path if needed

const TabLayout: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // This listener "catches" the user when they are sent back from Google
    // and navigates them to the home screen.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // User is logged in, redirect them to the home page
        router.replace('/login');
      }
    });

    // This cleans up the listener when the component is no longer on screen
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
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
};

export default TabLayout;
