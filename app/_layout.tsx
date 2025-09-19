import { Amplify } from 'aws-amplify';
import { Stack } from 'expo-router';
import React from 'react';

// This path assumes your aws-exports.js file is in the same 'app/' directory.
import config from './aws-exports.js';

// Configure Amplify at the root of your app
Amplify.configure(config);

const TabLayout: React.FC = () => {
  return (
    // The Stack navigator is now wrapped with the SiteProvider
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