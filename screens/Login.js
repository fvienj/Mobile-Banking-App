import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import GradientBackground from '../components/gradientBackground';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log({ username, password });
    navigation.navigate('OTP');
  };

  return (
    <GradientBackground colors={['black', 'teal']}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.overlay}
          keyboardShouldPersistTaps="handled">
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>LOGIN</Text>
          <Text style={styles.titleBody}> Please Sign in to continue.</Text>

          <View style={styles.form}>
            <View style={styles.inputBox}>
              <Ionicons
                name="person-outline"
                size={20}
                color="dimgray"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputBox}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="dimgray"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                  color="dimgray"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.actionButton} onPress={handleLogin}>
              <Text style={styles.actionButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.footerLink}
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.footerText}>
                No account? <Text style={styles.footerTextlink}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flexGrow: 1,
    alignItems: '',
    padding: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 1,
    letterSpacing: 2,
    alignSelf: 'left',
    marginLeft: 20,
  },
  titleBody: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    letterSpacing: 2,
    alignSelf: 'left',
    marginLeft: 14,
  },
  form: {
    backgroundColor: 'white',
    width: '100%',
    padding: 25,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    backgroundColor: 'whitesmoke',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: 'forestgreen',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  footerLink: {
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    fontSize: 14,
  },
  footerTextlink: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
