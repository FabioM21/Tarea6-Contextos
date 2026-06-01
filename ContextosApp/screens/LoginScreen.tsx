import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
type Role = 'admin' | 'common';
const LoginScreen = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const { login } = useAuth();
  const handleLogin = (): void => {
    if (!selectedRole) {
      Alert.alert('Atención', 'Por favor selecciona un rol antes de ingresar.');
      return;
    }
    login(selectedRole);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Selecciona tu rol para continuar</Text>
      {}
      <View style={styles.rolesContainer}>
        {}
        <TouchableOpacity
          style={[
            styles.roleOption,
            selectedRole === 'admin' && styles.roleOptionSelected,
          ]}
          onPress={() => setSelectedRole('admin')}
          activeOpacity={0.8}
        >
          <View style={styles.radioOuter}>
            {selectedRole === 'admin' && <View style={styles.radioInner} />}
          </View>
          <View style={styles.roleTextContainer}>
            <Text style={[
              styles.roleLabel,
              selectedRole === 'admin' && styles.roleLabelSelected,
            ]}>
              Admin
            </Text>
            <Text style={styles.roleDescription}>
              Acceso a Home y Settings
            </Text>
          </View>
        </TouchableOpacity>
        {}
        <TouchableOpacity
          style={[
            styles.roleOption,
            selectedRole === 'common' && styles.roleOptionSelected,
          ]}
          onPress={() => setSelectedRole('common')}
          activeOpacity={0.8}
        >
          <View style={styles.radioOuter}>
            {selectedRole === 'common' && <View style={styles.radioInner} />}
          </View>
          <View style={styles.roleTextContainer}>
            <Text style={[
              styles.roleLabel,
              selectedRole === 'common' && styles.roleLabelSelected,
            ]}>
              Common
            </Text>
            <Text style={styles.roleDescription}>
              Acceso solo a Home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {}
      <TouchableOpacity
        style={[styles.loginButton, !selectedRole && styles.loginButtonDisabled]}
        onPress={handleLogin}
        activeOpacity={0.85}
      >
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 40,
  },
  rolesContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 40,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  roleOptionSelected: {
    borderColor: '#4F46E5',
    backgroundColor: '#EEF2FF',
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CBD5E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4F46E5',
  },
  roleTextContainer: {
    flex: 1,
  },
  roleLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    textTransform: 'capitalize',
  },
  roleLabelSelected: {
    color: '#4F46E5',
  },
  roleDescription: {
    fontSize: 13,
    color: '#A0AEC0',
    marginTop: 2,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonDisabled: {
    backgroundColor: '#A5B4FC',
    shadowOpacity: 0,
    elevation: 0,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
export default LoginScreen;
