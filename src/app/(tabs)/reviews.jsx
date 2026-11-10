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
import { colors, radius, useTheme } from '../../theme';
import { reviewsData } from '../../data';

export default function ReviewsScreen() {
  const { theme } = useTheme();
  const [selectedTag, setSelectedTag] = useState('Popular Foods');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      {/* Top Header Bar (Sketch: Reviews / 60 Min / Free) */}
      <View style={styles.topBar}>
        <Text style={[styles.screenTitle, { color: theme.text }]}>Reviews</Text>

        <View style={styles.badgeRow}>
          <View style={[styles.pillBadge, { backgroundColor: colors.primary }]}>
            <Ionicons name="time" size={13} color="#FFFFFF" />
            <Text style={styles.pillText}>{reviewsData.deliveryTime}</Text>
          </View>
          <View style={[styles.pillBadge, { backgroundColor: colors.accentTeal }]}>
            <Ionicons name="checkmark-circle" size={13} color="#FFFFFF" />
            <Text style={styles.pillText}>{reviewsData.deliveryFee}</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Rating Score Card (Sketch: 4.6 / Out of 5.0) */}
        <View
          style={[
            styles.scoreCard,
            {
              backgroundColor: theme.surface,
              borderColor: theme.cardBorder,
            },
          ]}
        >
          <View style={styles.scoreLeft}>
            <Text style={[styles.scoreValue, { color: theme.text }]}>
              {reviewsData.overallRating}
            </Text>
            <View style={styles.starRow}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Ionicons
                  key={s}
                  name={s <= 4 ? 'star' : 'star-half'}
                  size={16}
                  color={colors.starYellow}
                />
              ))}
            </View>
            <Text style={[styles.maxScoreText, { color: theme.subText }]}>
              {reviewsData.maxRating}
            </Text>
          </View>

          <View style={styles.breakdownCol}>
            {reviewsData.breakdown.map((item) => (
              <View key={item.label} style={styles.breakdownRow}>
                <Text style={[styles.breakdownLabel, { color: theme.text }]}>
                  {item.label}
                </Text>
                <View style={[styles.breakdownTrack, { backgroundColor: theme.cardBorder }]}>
                  <View
                    style={[
                      styles.breakdownFill,
                      {
                        width: `${item.percentage}%`,
                        backgroundColor:
                          item.label === 'Excellent'
                            ? colors.accentTeal
                            : item.label === 'Very Good'
                            ? colors.secondary
                            : item.label === 'Average'
                            ? colors.accentSalmon
                            : colors.primary,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Popular Tags Row (Sketch: Popular Foods) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagsContainer}
        >
          {reviewsData.popularTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <TouchableOpacity
                key={tag}
                style={[
                  styles.tagPill,
                  {
                    backgroundColor: isSelected ? colors.primary : theme.surface,
                    borderColor: isSelected ? colors.primary : theme.cardBorder,
                  },
                ]}
                onPress={() => setSelectedTag(tag)}
              >
                <Text
                  style={[
                    styles.tagText,
                    { color: isSelected ? '#FFFFFF' : theme.text },
                  ]}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Customer Reviews List (Sketch: Bonnie R. Miller & Amacheah Chukwudi) */}
        <Text style={[styles.sectionHeading, { color: theme.text }]}>
          Verified Customer Feedback
        </Text>

        <View style={styles.reviewsList}>
          {reviewsData.reviewsList.map((rev) => (
            <View
              key={rev.id}
              style={[
                styles.reviewCard,
                {
                  backgroundColor: theme.surface,
                  borderColor: theme.cardBorder,
                },
              ]}
            >
              <View style={styles.revHeader}>
                <View style={styles.revUserRow}>
                  {rev.avatar ? (
                    <Image source={rev.avatar} style={styles.revAvatar} />
                  ) : (
                    <View style={[styles.revAvatarFallback, { backgroundColor: colors.secondarySoft }]}>
                      <Text style={[styles.revAvatarText, { color: colors.secondary }]}>
                        {rev.name.charAt(0)}
                      </Text>
                    </View>
                  )}
                  <View style={styles.revNameCol}>
                    <Text style={[styles.revName, { color: theme.text }]}>
                      {rev.name}
                    </Text>
                    <Text style={[styles.revDate, { color: theme.subText }]}>
                      {rev.date}
                    </Text>
                  </View>
                </View>

                <View style={styles.revStars}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Ionicons
                      key={s}
                      name={s <= rev.rating ? 'star' : 'star-outline'}
                      size={14}
                      color={colors.starYellow}
                    />
                  ))}
                </View>
              </View>

              <Text style={[styles.revComment, { color: theme.bodyText }]}>
                {rev.comment}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
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
  screenTitle: { fontSize: 24, fontWeight: '900', letterSpacing: -0.5 },
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 24 },
  scoreCard: {
    flexDirection: 'row',
    padding: 18,
    borderRadius: 22,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#1A1824',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  scoreLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 18,
    borderRightWidth: 1,
    borderRightColor: '#E8ECF2',
  },
  scoreValue: { fontSize: 36, fontWeight: '900', lineHeight: 42 },
  starRow: { flexDirection: 'row', gap: 2, marginVertical: 4 },
  maxScoreText: { fontSize: 11, fontWeight: '600' },
  breakdownCol: { flex: 1, paddingLeft: 16, justifyContent: 'center', gap: 6 },
  breakdownRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  breakdownLabel: { fontSize: 11, fontWeight: '700', width: 62 },
  breakdownTrack: { flex: 1, height: 6, borderRadius: 3, overflow: 'hidden', marginLeft: 8 },
  breakdownFill: { height: '100%', borderRadius: 3 },
  tagsContainer: { gap: 8, marginBottom: 20 },
  tagPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.full,
    borderWidth: 1,
  },
  tagText: { fontSize: 13, fontWeight: '700' },
  sectionHeading: { fontSize: 18, fontWeight: '800', marginBottom: 14 },
  reviewsList: { gap: 12 },
  reviewCard: {
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
  },
  revHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  revUserRow: { flexDirection: 'row', alignItems: 'center' },
  revAvatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#E5E7EB' },
  revAvatarFallback: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  revAvatarText: { fontSize: 16, fontWeight: '800' },
  revNameCol: { marginLeft: 12 },
  revName: { fontSize: 15, fontWeight: '800' },
  revDate: { fontSize: 12, fontWeight: '500', marginTop: 2 },
  revStars: { flexDirection: 'row', gap: 2 },
  revComment: { fontSize: 13, lineHeight: 20, fontWeight: '400' },
});
