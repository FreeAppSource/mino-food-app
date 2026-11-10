import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { driverData } from '../../data';

const { width } = Dimensions.get('window');

export default function DiscoverScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedDriver, setSelectedDriver] = useState(driverData);

  const mapDrivers = [
    { id: 1, top: '22%', left: '28%', avatar: require('../../assets/images/52216734d3eabbb0327ac65bfcfe255de9d8cbdd.png'), name: 'Driver Tom' },
    { id: 2, top: '35%', left: '68%', avatar: require('../../assets/images/47acac8a26c9b3d3d4eedd81c1fb91c4165d2d1a.png'), name: 'Driver Lisa' },
    { id: 3, top: '50%', left: '20%', avatar: require('../../assets/images/c4fc5f90003dd3200d91c563e3061b585e6fbb3d.png'), name: 'Driver Marcus' },
    { id: 4, top: '65%', left: '72%', avatar: require('../../assets/images/1dee54f95a27527b8da624e00d826896295860ff.png'), name: 'Driver Anna' },
    { id: 5, top: '42%', left: '46%', avatar: require('../../assets/images/driver_john.png'), name: 'Mr. John Watson', isMain: true },
  ];

  const handleCall = () => {
    Alert.alert(
      'Calling Driver',
      `Connecting to ${driverData.driverName} (${driverData.phone})...`,
      [{ text: 'Dismiss' }]
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      {/* Top Bar (Sketch: Find driver / 60 Min / Free) */}
      <View style={styles.topBar}>
        <View style={styles.titleCol}>
          <Text style={[styles.screenTitle, { color: theme.text }]}>
            {driverData.title}
          </Text>
          <Text style={[styles.addressSubtitle, { color: theme.subText }]}>
            {driverData.destination}
          </Text>
        </View>

        <View style={styles.badgeRow}>
          <View style={[styles.pillBadge, { backgroundColor: colors.primary }]}>
            <Ionicons name="time" size={13} color="#FFFFFF" />
            <Text style={styles.pillText}>{driverData.deliveryTime}</Text>
          </View>
          <View style={[styles.pillBadge, { backgroundColor: colors.accentTeal }]}>
            <Ionicons name="checkmark-circle" size={13} color="#FFFFFF" />
            <Text style={styles.pillText}>{driverData.deliveryFee}</Text>
          </View>
        </View>
      </View>

      {/* Map View Container with Live Simulated Pins */}
      <View style={styles.mapContainer}>
        <View style={[styles.mapCanvas, { backgroundColor: theme.surface }]}>
          {/* Simulated Roads / City Grid */}
          <View style={styles.roadH1} />
          <View style={styles.roadH2} />
          <View style={styles.roadV1} />
          <View style={styles.roadV2} />
          <View style={styles.roadDiagonal} />

          {/* Delivery Route Path */}
          <View style={styles.routePointStart}>
            <View style={styles.pointDot} />
            <Text style={styles.pointLabel}>Restaurant</Text>
          </View>

          <View style={styles.routePointEnd}>
            <Ionicons name="location" size={24} color={colors.primary} />
            <Text style={styles.destLabel}>You</Text>
          </View>

          {/* Map Drivers Pins */}
          {mapDrivers.map((d) => (
            <TouchableOpacity
              key={d.id}
              style={[
                styles.mapPin,
                { top: d.top, left: d.left },
                d.isMain && styles.mainDriverPin,
              ]}
              onPress={() => setSelectedDriver({ ...driverData, driverName: d.name })}
              activeOpacity={0.8}
            >
              <Image source={d.avatar} style={styles.pinAvatar} />
              {d.isMain && (
                <View style={[styles.driverBadge, { backgroundColor: colors.primary }]}>
                  <Ionicons name="bicycle" size={10} color="#FFFFFF" />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* GPS Live Radar Overlay Tag */}
        <View style={[styles.radarTag, { backgroundColor: 'rgba(26, 24, 36, 0.85)' }]}>
          <View style={styles.blinkingDot} />
          <Text style={styles.radarText}>Live Driver GPS Active</Text>
        </View>
      </View>

      {/* Driver Card Bottom Sheet (Sketch: Mr. John Watson / Driver / St 3, High streetCleveland) */}
      <View
        style={[
          styles.driverSheet,
          {
            backgroundColor: theme.surface,
            borderColor: theme.cardBorder,
          },
        ]}
      >
        <View style={styles.driverInfoRow}>
          <View style={styles.avatarContainer}>
            <Image
              source={selectedDriver.avatar}
              style={styles.driverAvatar}
              resizeMode="cover"
            />
            <View style={[styles.verifiedBadge, { backgroundColor: colors.accentTeal }]}>
              <Ionicons name="checkmark" size={12} color="#FFFFFF" />
            </View>
          </View>

          <View style={styles.driverMeta}>
            <View style={styles.nameRow}>
              <Text style={[styles.driverName, { color: theme.text }]}>
                {selectedDriver.driverName}
              </Text>
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={12} color={colors.starYellow} />
                <Text style={[styles.ratingText, { color: theme.text }]}>4.9</Text>
              </View>
            </View>

            <Text style={[styles.roleText, { color: colors.primary }]}>
              {selectedDriver.role}
            </Text>

            <Text numberOfLines={1} style={[styles.destText, { color: theme.subText }]}>
              <Ionicons name="location-outline" size={13} color={theme.subText} />{' '}
              {selectedDriver.destination}
            </Text>
          </View>
        </View>

        {/* Action Buttons: Call & Chat */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.callBtn, { backgroundColor: colors.primary }]}
            onPress={handleCall}
            activeOpacity={0.85}
          >
            <Ionicons name="call" size={18} color="#FFFFFF" />
            <Text style={styles.callBtnText}>Call Driver</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.chatBtn, { backgroundColor: colors.secondarySoft }]}
            onPress={() => router.push('/(tabs)/reviews')}
            activeOpacity={0.85}
          >
            <Ionicons name="chatbubble-ellipses" size={18} color={colors.secondary} />
            <Text style={[styles.chatBtnText, { color: colors.secondary }]}>Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  titleCol: { flex: 1 },
  screenTitle: { fontSize: 22, fontWeight: '900', letterSpacing: -0.4 },
  addressSubtitle: { fontSize: 12, fontWeight: '500', marginTop: 2 },
  badgeRow: { flexDirection: 'row', gap: 6 },
  pillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  pillText: { color: '#FFFFFF', fontSize: 11, fontWeight: '800' },
  mapContainer: {
    flex: 1,
    position: 'relative',
    marginHorizontal: 16,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 16,
  },
  mapCanvas: { flex: 1, position: 'relative' },
  roadH1: { position: 'absolute', top: '30%', left: 0, right: 0, height: 16, backgroundColor: '#EDEFF2' },
  roadH2: { position: 'absolute', top: '60%', left: 0, right: 0, height: 14, backgroundColor: '#EDEFF2' },
  roadV1: { position: 'absolute', left: '35%', top: 0, bottom: 0, width: 14, backgroundColor: '#EDEFF2' },
  roadV2: { position: 'absolute', left: '70%', top: 0, bottom: 0, width: 16, backgroundColor: '#EDEFF2' },
  roadDiagonal: {
    position: 'absolute',
    width: '120%',
    height: 8,
    top: '45%',
    left: '-10%',
    backgroundColor: '#E2E6EA',
    transform: [{ rotate: '-25deg' }],
  },
  routePointStart: { position: 'absolute', top: '20%', left: '15%', alignItems: 'center' },
  pointDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.accentTeal,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  pointLabel: { fontSize: 10, fontWeight: '700', marginTop: 2, color: '#555' },
  routePointEnd: { position: 'absolute', bottom: '25%', right: '20%', alignItems: 'center' },
  destLabel: { fontSize: 11, fontWeight: '800', color: colors.primary },
  mapPin: {
    position: 'absolute',
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'visible',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  mainDriverPin: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  pinAvatar: { width: '100%', height: '100%', borderRadius: 24 },
  driverBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  radarTag: {
    position: 'absolute',
    top: 14,
    left: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  blinkingDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981' },
  radarText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  driverSheet: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 18,
    borderRadius: 24,
    borderWidth: 1,
    shadowColor: '#1A1824',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  driverInfoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatarContainer: { position: 'relative' },
  driverAvatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#E5E7EB' },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  driverMeta: { marginLeft: 14, flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  driverName: { fontSize: 17, fontWeight: '800' },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  ratingText: { fontSize: 13, fontWeight: '800' },
  roleText: { fontSize: 13, fontWeight: '700', marginTop: 2, marginBottom: 4 },
  destText: { fontSize: 12, fontWeight: '500' },
  actionRow: { flexDirection: 'row', gap: 12 },
  callBtn: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  callBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  chatBtn: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  chatBtnText: { fontSize: 15, fontWeight: '800' },
});
