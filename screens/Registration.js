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
  SafeAreaView
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import GradientBackground from '../components/gradientBackground';

export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phnumber, setnumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    console.log({username, password, phnumber});
    navigation.navigate('OTP'); 
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <GradientBackground colors={['black', 'teal']}>
      style={styles.container}
    
      <KeyboardAvoidingView 
        behavior="padding" 
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25} 
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.overlay} keyboardShouldPersistTaps="handled">
          
          <Image 
            source={require('../assets/snack-icon.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>REGISTRATION</Text>
          <Text style={styles.titleBody}>Please register to login.</Text>
          
          <View style={styles.form}>
            
            <View style={styles.inputBox}>
              <Ionicons name="person-outline" size={20} color="dimgray" style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputBox}>
              <Ionicons name="lock-closed-outline" size={20} color="dimgray" style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color="dimgray" 
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputBox}>
              <Ionicons name="call-outline" size={20} color="dimgray" style={styles.icon} />
              <TextInput 
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                keyboardType="phone-pad"
                value={phnumber}
                onChangeText={setnumber}
              />
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={handleSave}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerLink} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerText}>
                Have an account? <Text style={styles.footerTextlink}>Sign In</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
    </SafeAreaView>
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
    marginBottom: 45, 
    marginTop: 10
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
    alignSelf: "left",
    marginLeft: 23
  },
    titleBody: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    letterSpacing: 3.5,
    alignSelf: "left",
    marginLeft:23
    
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
   marginRight: -1
  },
  input: {
    width:'80%',
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    opacity: 1,
  },
  registerButton: {
    backgroundColor: 'forestgreen',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  registerButtonText: {
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