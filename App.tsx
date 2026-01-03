import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native</Text>
        <Text style={styles.headerText2}>Mobile Application</Text>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <Text style={styles.mainText}>Welcome! Sweetie❤️</Text>
        <Text style={styles.subText}>Hi! Tunmun</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dev. G.K.V</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // full screen
    backgroundColor: '#f0f0f0',
  },

  // Header
  header: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
  },
headerText2: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  // Main content
  main: {
    flex: 1,                 // takes remaining space
    justifyContent: 'center', 
    alignItems: 'center',
  },
  mainText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'red',
    marginBottom: 10,
  },
  subText: {
    fontSize: 22,
    color: 'green',
  },

  // Footer
  footer: {
    paddingVertical: 15,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
