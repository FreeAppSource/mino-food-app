import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { activeDish } from '../../data';

const { width } = Dimensions.get('window');

export default function IngredientsScreen() {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();

  const [activeTab, setActiveTab] = useState('Ingredients');
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      {/* Top Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.iconBtn, { backgroundColor: theme.surface }]}
          onPress={() => router.push('/discover')}
          activeOpacity={0.7}
        >
          <Ionicons name="map-outline" size={20} color={theme.text} />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Mino Food</Text>
        </View>

        <View style={styles.topRightRow}>
          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: theme.surface, marginRight: 8 }]}
            onPress={toggleTheme}
            activeOpacity={0.7}
          >
            <Ionicons name={isDark ? 'sunny' : 'moon'} size={18} color={colors.secondary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: theme.surface }]}
            onPress={() => setIsFavorite(!isFavorite)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={isFavorite ? colors.primary : theme.text}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Food Visual */}
        <View style={styles.heroContainer}>
          <Image
            source={activeDish.image}
            style={styles.heroImage}
            resizeMode="cover"
          />

          {/* Floating delivery badge (Sketch: 60 Min / Free) */}
          <View style={styles.floatingBadges}>
            <View style={styles.badgeItem}>
              <Ionicons name="time-outline" size={14} color="#FFFFFF" />
              <Text style={styles.badgeText}>{activeDish.deliveryTime}</Text>
            </View>
            <View style={[styles.badgeItem, { backgroundColor: colors.accentTeal }]}>
              <Ionicons name="bicycle-outline" size={14} color="#FFFFFF" />
              <Text style={styles.badgeText}>{activeDish.deliveryFee}</Text>
            </View>
          </View>
        </View>

        {/* Banner Headline (Sketch: All Ingredients are always fresh and natural!) */}
        <View style={[styles.bannerBox, { backgroundColor: colors.secondarySoft }]}>
          <Ionicons name="leaf" size={18} color={colors.secondary} />
          <Text style={[styles.bannerText, { color: theme.text }]}>
            {activeDish.bannerHeadline}
          </Text>
        </View>

        {/* Content Tabs (Sketch: Info, Packages, Ingredients, Photo) */}
        <View style={styles.tabsRow}>
          {activeDish.tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabBtn,
                  isActive && { borderBottomColor: colors.primary, borderBottomWidth: 3 },
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabBtnText,
                    isActive
                      ? [styles.activeTabText, { color: colors.primary }]
                      : [styles.inactiveTabText, { color: theme.subText }],
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Dish Description (Sketch: Grilled salmon and veggies make for a colorful...) */}
        <View style={styles.descContainer}>
          <Text style={[styles.descText, { color: theme.bodyText }]}>
            {activeDish.description}
          </Text>
        </View>

        {/* Nutrition & Ingredients Breakdown (Sketch Group 4 & Group 5) */}
        <View
          style={[
            styles.nutritionCard,
            {
              backgroundColor: theme.surface,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: theme.text }]}>
            Nutrition & Recipe Facts
          </Text>

          {/* Row 1: Ingredients */}
          <View style={styles.factRow}>
            <View style={styles.factLabelCol}>
              <Ionicons name="restaurant-outline" size={16} color={colors.primary} />
              <Text style={[styles.factLabel, { color: theme.text }]}>Ingredients:</Text>
            </View>
            <Text style={[styles.factValue, { color: theme.subText }]}>
              {activeDish.nutrition.ingredients}
            </Text>
          </View>

          <View style={[styles.cardDivider, { backgroundColor: theme.divider }]} />

          {/* Row 2: Calorie Portion */}
          <View style={styles.factRow}>
            <View style={styles.factLabelCol}>
              <Ionicons name="flame-outline" size={16} color={colors.secondary} />
              <Text style={[styles.factLabel, { color: theme.text }]}>Calorie Portion:</Text>
            </View>
            <Text style={[styles.factHighlight, { color: colors.primary }]}>
              {activeDish.nutrition.caloriePortion}
            </Text>
          </View>

          <View style={[styles.cardDivider, { backgroundColor: theme.divider }]} />

          {/* Row 3: Protein */}
          <View style={styles.factRow}>
            <View style={styles.factLabelCol}>
              <Ionicons name="barbell-outline" size={16} color={colors.accentTeal} />
              <Text style={[styles.factLabel, { color: theme.text }]}>Protein:</Text>
            </View>
            <Text style={[styles.factValue, { color: theme.subText }]}>
              {activeDish.nutrition.protein}
            </Text>
          </View>

          <View style={[styles.cardDivider, { backgroundColor: theme.divider }]} />

          {/* Row 4: Fat */}
          <View style={styles.factRow}>
            <View style={styles.factLabelCol}>
              <Ionicons name="water-outline" size={16} color={colors.accentSalmon} />
              <Text style={[styles.factLabel, { color: theme.text }]}>Fat:</Text>
            </View>
            <Text style={[styles.factValue, { color: theme.subText }]}>
              {activeDish.nutrition.fat}
            </Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Sticky Action Bar: Price & Order (Sketch Checkout trigger) */}
      <View
        style={[
          styles.bottomActionBar,
          {
            backgroundColor: theme.surface,
            borderTopColor: theme.cardBorder,
          },
        ]}
      >
        <View style={styles.priceContainer}>
          <View style={styles.priceRow}>
            <Text style={[styles.priceLabel, { color: theme.subText }]}>Total Price</Text>
            <Text style={[styles.originalPrice, { color: theme.subText }]}>
              ${(activeDish.originalPrice * quantity).toFixed(2)}
            </Text>
          </View>
          <Text style={[styles.currentPrice, { color: colors.primary }]} numberOfLines={1}>
            ${(activeDish.price * quantity).toFixed(2)}
          </Text>
        </View>

        {/* Quantity Controls & CTA Button */}
        <View style={styles.actionButtonsCol}>
          <View style={styles.qtyControlRow}>
            <TouchableOpacity
              style={[styles.qtyBtn, { backgroundColor: theme.inputBg }]}
              onPress={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <Ionicons name="remove" size={16} color={theme.text} />
            </TouchableOpacity>
            <Text style={[styles.qtyNum, { color: theme.text }]}>{quantity}</Text>
            <TouchableOpacity
              style={[styles.qtyBtn, { backgroundColor: theme.inputBg }]}
              onPress={() => setQuantity((q) => q + 1)}
            >
              <Ionicons name="add" size={16} color={theme.text} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.checkoutBtn, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/(tabs)/checkout')}
            activeOpacity={0.85}
          >
            <Text style={styles.checkoutBtnText}>Checkout</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  topRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  heroContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 28,
    overflow: 'hidden',
    height: 250,
    position: 'relative',
    backgroundColor: '#E5E7EB',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  floatingBadges: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    flexDirection: 'row',
    gap: 8,
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  bannerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    gap: 10,
  },
  bannerText: {
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 18,
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8ECF2',
  },
  tabBtn: {
    paddingBottom: 10,
  },
  tabBtnText: {
    fontSize: 15,
  },
  activeTabText: {
    fontWeight: '800',
  },
  inactiveTabText: {
    fontWeight: '600',
  },
  descContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  descText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  nutritionCard: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    padding: 18,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 16,
  },
  factRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  factLabelCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  factLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  factValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  factHighlight: {
    fontSize: 15,
    fontWeight: '800',
  },
  cardDivider: {
    height: 1,
    marginVertical: 8,
  },
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    elevation: 8,
  },
  priceContainer: {
    flex: 1,
    marginRight: 10,
  },
  priceLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  currentPrice: {
    fontSize: 22,
    fontWeight: '900',
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  actionButtonsCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  qtyControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyNum: {
    fontSize: 15,
    fontWeight: '800',
    minWidth: 16,
    textAlign: 'center',
  },
  checkoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: radius.full,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
  checkoutBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
});
