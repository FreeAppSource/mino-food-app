import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { checkoutData } from '../../data';

export default function CheckoutScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const [promoCode, setPromoCode] = useState('MINO40');
  const [promoApplied, setPromoApplied] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const subtotal = checkoutData.subtotal;
  const discount = promoApplied ? checkoutData.discountAmount : 0;
  const total = subtotal - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'MINO40') {
      setPromoApplied(true);
      Alert.alert('Promo Applied!', '40% discount applied to all products.');
    } else {
      Alert.alert('Invalid Code', 'Please enter MINO40 for 40% discount.');
    }
  };

  const handlePlaceOrder = () => {
    setOrderConfirmed(true);
    Alert.alert(
      'Order Confirmed! 🎉',
      `Your Mino Food order for $${total.toFixed(2)} has been placed! Our driver is on the way to ${checkoutData.address}.`,
      [
        {
          text: 'Track Driver',
          onPress: () => router.push('/(tabs)/discover'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      {/* Top Header Bar (Sketch: Checkout) */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.backBtn, { backgroundColor: theme.surface }]}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={22} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.screenTitle, { color: theme.text }]}>Checkout</Text>

        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Delivery Address Card */}
        <View
          style={[
            styles.card,
            { backgroundColor: theme.surface, borderColor: theme.cardBorder },
          ]}
        >
          <View style={styles.cardHeaderRow}>
            <View style={styles.cardIconTitleRow}>
              <Ionicons name="location" size={18} color={colors.primary} />
              <Text style={[styles.cardTitle, { color: theme.text }]}>Delivery Destination</Text>
            </View>
            <Text style={[styles.editLink, { color: colors.secondary }]}>Edit</Text>
          </View>
          <Text style={[styles.addressText, { color: theme.text }]}>{checkoutData.address}</Text>
          <Text style={[styles.phoneText, { color: theme.subText }]}>{checkoutData.phone}</Text>
        </View>

        {/* Promo Code Box (Sketch: Promo code / 40% discount on all products) */}
        <View
          style={[
            styles.card,
            { backgroundColor: theme.surface, borderColor: theme.cardBorder },
          ]}
        >
          <Text style={[styles.cardTitle, { color: theme.text, marginBottom: 10 }]}>
            Promo code
          </Text>

          <View style={[styles.promoInputRow, { backgroundColor: theme.inputBg }]}>
            <Ionicons name="pricetag-outline" size={18} color={colors.primary} style={{ marginRight: 8 }} />
            <TextInput
              value={promoCode}
              onChangeText={setPromoCode}
              placeholder="Enter Promo Code"
              placeholderTextColor={theme.subText}
              style={[styles.promoInput, { color: theme.text }]}
              autoCapitalize="characters"
            />
            <TouchableOpacity
              style={[styles.applyBtn, { backgroundColor: colors.primary }]}
              onPress={handleApplyPromo}
              activeOpacity={0.8}
            >
              <Text style={styles.applyBtnText}>Apply</Text>
            </TouchableOpacity>
          </View>

          {promoApplied && (
            <View style={[styles.promoActiveBadge, { backgroundColor: colors.secondarySoft }]}>
              <Ionicons name="sparkles" size={15} color={colors.secondary} />
              <Text style={[styles.promoActiveText, { color: colors.secondary }]}>
                {checkoutData.promoDiscountStr}
              </Text>
            </View>
          )}
        </View>

        {/* Cart Items Summary */}
        <Text style={[styles.sectionHeading, { color: theme.text }]}>Your Order Items</Text>
        <View style={styles.itemsList}>
          {checkoutData.items.map((it) => (
            <View
              key={it.id}
              style={[
                styles.itemCard,
                { backgroundColor: theme.surface, borderColor: theme.cardBorder },
              ]}
            >
              <Image source={it.image} style={styles.itemImage} resizeMode="cover" />
              <View style={styles.itemDetails}>
                <Text style={[styles.itemTitle, { color: theme.text }]}>{it.title}</Text>
                <Text style={[styles.itemSubtitle, { color: theme.subText }]}>{it.subtitle}</Text>
                <Text style={[styles.itemPrice, { color: colors.primary }]}>
                  ${it.price.toFixed(2)}
                </Text>
              </View>
              <View style={styles.itemQtyBadge}>
                <Text style={[styles.itemQtyText, { color: theme.text }]}>x{it.qty}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Payment Method Selector */}
        <Text style={[styles.sectionHeading, { color: theme.text }]}>Payment Method</Text>
        <View style={styles.paymentOptions}>
          {[
            { id: 'card', name: 'Credit Card', icon: 'card-outline' },
            { id: 'apple', name: 'Apple Pay', icon: 'logo-apple' },
            { id: 'cash', name: 'Cash on Delivery', icon: 'cash-outline' },
          ].map((pm) => {
            const isSelected = selectedPayment === pm.id;
            return (
              <TouchableOpacity
                key={pm.id}
                style={[
                  styles.paymentOptionItem,
                  {
                    backgroundColor: theme.surface,
                    borderColor: isSelected ? colors.primary : theme.cardBorder,
                  },
                ]}
                onPress={() => setSelectedPayment(pm.id)}
              >
                <Ionicons
                  name={pm.icon}
                  size={20}
                  color={isSelected ? colors.primary : theme.subText}
                />
                <Text style={[styles.paymentName, { color: theme.text }]}>{pm.name}</Text>
                <Ionicons
                  name={isSelected ? 'radio-button-on' : 'radio-button-off'}
                  size={18}
                  color={isSelected ? colors.primary : theme.subText}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Cost Summary Breakdown (Sketch: Total $33.00, $60.00) */}
        <View
          style={[
            styles.card,
            { backgroundColor: theme.surface, borderColor: theme.cardBorder, marginTop: 12 },
          ]}
        >
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.subText }]}>Subtotal</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>
              ${subtotal.toFixed(2)}
            </Text>
          </View>

          {promoApplied && (
            <View style={styles.summaryRow}>
              <Text style={[styles.summaryLabel, { color: colors.secondary }]}>
                Discount (40%)
              </Text>
              <Text style={[styles.summaryValue, { color: colors.secondary }]}>
                -${discount.toFixed(2)}
              </Text>
            </View>
          )}

          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.subText }]}>Delivery</Text>
            <Text style={[styles.summaryValue, { color: colors.accentTeal }]}>Free</Text>
          </View>

          <View style={[styles.divider, { backgroundColor: theme.divider }]} />

          <View style={styles.summaryRow}>
            <Text style={[styles.totalLabel, { color: theme.text }]}>Total</Text>
            <Text style={[styles.totalValue, { color: colors.primary }]}>
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Sticky Confirm Button (Sketch: Total $33.00) */}
      <View
        style={[
          styles.bottomBar,
          { backgroundColor: theme.surface, borderTopColor: theme.cardBorder },
        ]}
      >
        <View style={styles.bottomTotalCol}>
          <Text style={[styles.bottomTotalLabel, { color: theme.subText }]}>Total to Pay</Text>
          <Text style={[styles.bottomTotalAmount, { color: colors.primary }]}>
            ${total.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.confirmBtn, { backgroundColor: colors.primary }]}
          onPress={handlePlaceOrder}
          activeOpacity={0.85}
        >
          <Text style={styles.confirmBtnText}>Confirm & Pay</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
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
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: { fontSize: 22, fontWeight: '900', letterSpacing: -0.4 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 24 },
  card: {
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardIconTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  cardTitle: { fontSize: 16, fontWeight: '800' },
  editLink: { fontSize: 13, fontWeight: '700' },
  addressText: { fontSize: 14, fontWeight: '700', marginBottom: 2 },
  phoneText: { fontSize: 12, fontWeight: '500' },
  promoInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 48,
    borderRadius: 14,
  },
  promoInput: { flex: 1, fontSize: 14, fontWeight: '700' },
  applyBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  applyBtnText: { color: '#FFFFFF', fontSize: 13, fontWeight: '800' },
  promoActiveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  promoActiveText: { fontSize: 12, fontWeight: '800' },
  sectionHeading: { fontSize: 17, fontWeight: '800', marginBottom: 12, marginTop: 4 },
  itemsList: { gap: 10, marginBottom: 16 },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  itemImage: { width: 56, height: 56, borderRadius: 14, backgroundColor: '#E5E7EB' },
  itemDetails: { marginLeft: 12, flex: 1 },
  itemTitle: { fontSize: 14, fontWeight: '800' },
  itemSubtitle: { fontSize: 11, fontWeight: '500', marginVertical: 2 },
  itemPrice: { fontSize: 14, fontWeight: '800' },
  itemQtyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
    backgroundColor: '#EDEFF2',
  },
  itemQtyText: { fontSize: 12, fontWeight: '700' },
  paymentOptions: { gap: 8, marginBottom: 16 },
  paymentOptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1.5,
  },
  paymentName: { flex: 1, marginLeft: 12, fontSize: 14, fontWeight: '700' },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  summaryLabel: { fontSize: 13, fontWeight: '600' },
  summaryValue: { fontSize: 13, fontWeight: '700' },
  divider: { height: 1, marginVertical: 8 },
  totalLabel: { fontSize: 16, fontWeight: '800' },
  totalValue: { fontSize: 20, fontWeight: '900' },
  bottomBar: {
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
  },
  bottomTotalCol: { flex: 1 },
  bottomTotalLabel: { fontSize: 11, fontWeight: '600' },
  bottomTotalAmount: { fontSize: 24, fontWeight: '900' },
  confirmBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 26,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 4,
  },
  confirmBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
});
