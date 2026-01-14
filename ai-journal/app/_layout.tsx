import "@/polyfill";
import "../tamagui-web.css";

import { ModalProvider } from "@/contexts/ModalContext";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalProvider, TamaguiProvider } from "tamagui";
import { tamaguiConfig } from '../tamagui.config';


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
    <ClerkProvider tokenCache={tokenCache}>
     <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <PortalProvider shouldAddRootHost>
       <ModalProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
         <Slot />
           </ThemeProvider>
       </ModalProvider>
      </PortalProvider>
      </TamaguiProvider>
    </ClerkProvider>
    </SafeAreaProvider>
  
  );
}
