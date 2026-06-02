import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
const SettingsScreen = () => {
  const { role, logout } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>⚙️</Text>
      </View>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.adminBadge}>
        <Text style={styles.adminBadgeText}>Área exclusiva de Administradores</Text>
      </View>
      <Text style={styles.roleText}>
        Rol activo:{' '}
        <Text style={styles.roleBadge}>{role}</Text>
      </Text>
      {}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
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
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 44,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 16,
  },
  adminBadge: {
    backgroundColor: '#EDE9FE',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#C4B5FD',
  },
  adminBadgeText: {
    color: '#6D28D9',
    fontWeight: '600',
    fontSize: 14,
  },
  roleText: {
    fontSize: 15,
    color: '#718096',
    marginBottom: 48,
  },
  roleBadge: {
    fontWeight: '700',
    color: '#4F46E5',
    textTransform: 'capitalize',
  },
  logoutButton: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  logoutText: {
    color: '#DC2626',
    fontWeight: '600',
    fontSize: 15,
  },
});
export default SettingsScreen;
