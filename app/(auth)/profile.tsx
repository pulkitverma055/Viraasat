import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  FlatList, 
  Modal 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PROFILE_IMAGE = "https://picsum.photos/100/100";

type MenuItem = {
  id: string;
  label: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

const menuItems: MenuItem[] = [
  { id: '1', label: 'Edit Info', icon: 'user' },
  { id: '2', label: 'Favorite', icon: 'heart' },
  { id: '3', label: 'Settings', icon: 'cog' },
  { id: '4', label: 'Help', icon: 'question' },
  { id: '5', label: 'Logout', icon: 'sign-out' },
];

type BottomTab = {
  id: string;
  label: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

const bottomTabs: BottomTab[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'explore', label: 'Explore', icon: 'compass' },
  { id: 'travel', label: 'Travel', icon: 'map' },
  { id: 'profile', label: 'Profile', icon: 'user' },
];

type LogoutModalProps = {
  visible: boolean;
  onCancel: () => void;
  onLogout: () => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onCancel, onLogout }) => {
  const router = useRouter();
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={modalStyles.overlay}>
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.title}>Logout</Text>
          <Text style={modalStyles.subtitle}>Are you sure you want to log out?</Text>
          <View style={modalStyles.buttonRow}>
            <TouchableOpacity
              style={modalStyles.cancelButton}
              onPress={onCancel}
              activeOpacity={0.7}
            >
              <Text style={modalStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyles.logoutButton}
              onPress={() => { router.replace('/login'); onLogout(); }}
              activeOpacity={0.7}
            >
              <Text style={modalStyles.buttonTextRed}>Yes, Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ProfileScreen: React.FC = () => {
  const router = useRouter();
  const [logoutVisible, setLogoutVisible] = useState<boolean>(false);

  const handleLogout = () => {
    setLogoutVisible(false);
    router.replace('/login');
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.7}
      onPress={() => {
        if (item.label === "Edit Info") {
          router.push("/info");
        } else if (item.label === "Settings") {
          router.push("/settings");
        } else if (item.label === "Help") {
          router.push("/help");
        } else if (item.label === "Logout") {
          setLogoutVisible(true);
        }
      }}
    >
      <View style={styles.menuIconContainer}>
        <FontAwesome name={item.icon} size={24} color="white" />
      </View>
      <Text style={styles.menuLabel}>{item.label}</Text>
      <FontAwesome name="angle-right" size={24} color="#7a0c0c" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} 
          onPress={() => router.push("/home")}
          activeOpacity={0.7}>
          <FontAwesome name="angle-left" size={28} color="#7a0c0c" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={{ uri: PROFILE_IMAGE }}
            style={styles.profileImage}
            accessibilityLabel="Profile picture of Garima"
          />
          <TouchableOpacity style={styles.editIcon} activeOpacity={0.7}>
            <FontAwesome name="pencil" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Garima</Text>
        <Text style={styles.profilePhone}>+91 96709 89000</Text>
        <Text style={styles.profileEmail}>garima234@example.com</Text>
      </View>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.menuList}
        scrollEnabled={false}
      />

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        {bottomTabs.map((tab) => {
          const isActive = tab.id === "profile";
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabItem}
              activeOpacity={0.7}
              onPress={() => {
                if (tab.id === "home") {
                  router.push("/home");
                } else if (tab.id === "explore") {
                  router.push("/explore");
                }
              }}
            >
              <View
                style={[
                  styles.tabIconContainer,
                  isActive && styles.tabIconContainerActive,
                ]}
              >
                <FontAwesome
                  name={tab.icon}
                  size={24}
                  color={isActive ? "#3f0a0a" : "#d3b9b9"}
                />
              </View>
              <Text
                style={[
                  styles.tabLabel,
                  isActive && styles.tabLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Logout Modal */}
      <LogoutModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onLogout={handleLogout}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefbf5',
    justifyContent: 'space-between',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0e6d9',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3e4d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '500',
    color: '#7a0c0c',
    fontFamily: 'System',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#7a0c0c',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fefbf5',
  },
  profileName: {
    marginTop: 12,
    fontSize: 28,
    fontWeight: '700',
    color: '#7a0c0c',
    fontFamily: 'Courier',
  },
  profilePhone: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '600',
    color: '#7a0c0c',
    fontFamily: 'Courier',
  },
  profileEmail: {
    marginTop: 2,
    fontSize: 16,
    color: '#7a0c0c',
    fontFamily: 'Courier',
  },
  menuList: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#7a0c0c',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuLabel: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Courier',
    color: '#000000',
  },
  bottomTabBar: {
    height: 70,
    backgroundColor: '#7a0c0c',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconContainerActive: {
    backgroundColor: '#f3e4d3',
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#d3b9b9',
    fontFamily: 'Courier',
  },
  tabLabelActive: {
    color: '#f3e4d3',
    fontWeight: '700',
  },
});

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 320,
    backgroundColor: '#7a0c0c',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fefbf5',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fefbf5',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  cancelButton: {
    backgroundColor: '#d6bebc',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginRight: 12,
  },
  logoutButton: {
    backgroundColor: '#f3e4d3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: '#7a0c0c',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonTextRed: {
    color: '#7a0c0c',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ProfileScreen;
