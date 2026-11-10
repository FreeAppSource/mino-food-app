import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import { appInfo } from '../data';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Top Header with Skip Button (Sketch: Group 2 > Skip) */}
      <View style={styles.topHeader}>
        <View style={styles.brandBadge}>
          <Ionicons name="fast-food" size={20} color={colors.primary} />
          <Text style={[styles.brandName, { color: theme.text }]}>Mino</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.replace('/(tabs)')}
          style={styles.skipBtn}
          activeOpacity={0.7}
        >
          <Text style={[styles.skipText, { color: colors.secondary }]}>Skip</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.secondary} />
        </TouchableOpacity>
      </View>

      {/* Hero Illustration */}
      <View style={styles.heroWrapper}>
        <View style={styles.heroCircle}>
          {/* Phone + store illustration (Sketch: Onboarding > Group 14), drawn in code */}
          <Ionicons name="sparkles" size={18} color={colors.secondary} style={styles.sparkleLeft} />
          <Ionicons name="sparkles" size={14} color={colors.secondary} style={styles.sparkleRight} />
          <View style={[styles.phone, { borderColor: colors.primary, backgroundColor: theme.card }]}>
            <View style={[styles.phoneNotch, { backgroundColor: colors.primary }]} />
            <View style={[styles.storeTile, { backgroundColor: colors.secondary }]}>
              <Ionicons name="storefront" size={34} color="#FFFFFF" />
            </View>
            <View style={[styles.storeBox, { backgroundColor: colors.primaryDark }]}>
              <View style={[styles.storeBoxLid, { backgroundColor: colors.primary }]} />
            </View>
          </View>
          <View style={styles.plant}>
            <Ionicons name="leaf" size={44} color={colors.accentTeal} style={{ transform: [{ rotate: '-20deg' }] }} />
            <View style={[styles.pot, { backgroundColor: colors.primary }]} />
          </View>
        </View>

        {/* Searching Places Floating Card (Sketch: Group 14 > 55% / Searching Places) */}
        <View
          style={[
            styles.searchingCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <View style={[styles.pulseIconBox, { backgroundColor: colors.secondarySoft }]}>
            <Ionicons name="navigate" size={18} color={colors.secondary} />
          </View>
          <View style={styles.searchingMeta}>
            <Text style={[styles.searchingLabel, { color: theme.text }]}>
              {appInfo.progressSearching}
            </Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { backgroundColor: colors.secondary }]} />
            </View>
          </View>
          <Text style={[styles.percentText, { color: colors.secondary }]}>
            {appInfo.progressPercent}
          </Text>
        </View>
      </View>

      {/* Bottom Content (Sketch: Enjoy the experience / Don't feel like going out...) */}
      <View style={styles.bottomSection}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.text }]}>
            {appInfo.onboardingTitle}
          </Text>
          <Text style={[styles.description, { color: theme.subText }]}>
            {appInfo.onboardingDesc}
          </Text>
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          style={[styles.primaryBtn, { backgroundColor: colors.primary }]}
          onPress={() => router.replace('/(tabs)')}
          activeOpacity={0.85}
        >
          <Text style={styles.btnText}>Explore Mino Food</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  brandBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  brandName: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  skipBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  skipText: {
    fontSize: 15,
    fontWeight: '700',
  },
  heroWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  heroCircle: {
    width: width * 0.78,
    height: width * 0.78,
    borderRadius: (width * 0.78) / 2,
    backgroundColor: 'rgba(191, 33, 62, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  phone: {
    width: width * 0.36,
    height: width * 0.58,
    borderRadius: 22,
    borderWidth: 6,
    alignItems: 'center',
    paddingTop: 30,
    shadowColor: '#BF213E',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },
  phoneNotch: {
    position: 'absolute',
    top: 0,
    width: 46,
    height: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  storeTile: {
    width: 64,
    height: 64,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeBox: {
    marginTop: 12,
    width: 70,
    height: 34,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: 'center',
  },
  storeBoxLid: {
    width: 84,
    height: 10,
    borderRadius: 3,
    marginTop: -6,
  },
  sparkleLeft: { position: 'absolute', top: '22%', left: '26%' },
  sparkleRight: { position: 'absolute', top: '16%', right: '28%' },
  plant: {
    position: 'absolute',
    right: '8%',
    bottom: '24%',
    alignItems: 'center',
  },
  pot: {
    width: 30,
    height: 26,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: -6,
  },
  searchingCard: {
    position: 'absolute',
    bottom: -15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    width: width * 0.82,
    shadowColor: '#1A1824',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 6,
  },
  pulseIconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchingMeta: {
    marginLeft: 12,
    flex: 1,
  },
  searchingLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  progressTrack: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E5E7EB',
    width: '90%',
    overflow: 'hidden',
  },
  progressFill: {
    width: '55%',
    height: '100%',
    borderRadius: 2,
  },
  percentText: {
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 8,
  },
  bottomSection: {
    paddingHorizontal: 28,
    paddingBottom: 32,
  },
  textContainer: {
    marginBottom: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -0.6,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  primaryBtn: {
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 5,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
