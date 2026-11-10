# Mino Food App

> 👨‍💻 Developed by **[Suresh Kumar Meesala](https://github.com/SureshKumarMeesala)** · 🎨 UI design by **deeperUI** (credits below)

A complete food delivery and tracking application built with **React Native (0.88+)**, **Expo SDK 58+**, and **Expo Router** using **JavaScript and JSX (`.js`, `.jsx`)**.

Directly translated from the original Sketch design: `mino-food-deeperui.sketch` by **Deeper UI**.

---

## 🎨 Artboards & Screens (based on 5 design artboards)

| # | Artboard Name | Sketch ID | Dimensions | Code Path | Description |
|---|---|---|---|---|---|
| 1 | **Onboarding** | `68170338-8637-4F7C-8397-EE0FD93EA126` | 375 × 812 | `src/app/index.jsx` | "Enjoy the experience" hero illustration, "Don’t feel like going out? No problem...", searching places 55% progress card, skip and get started actions. |
| 2 | **Ingredients** | `7995A62B-775D-4D22-A9BB-713D05AD3B50` | 375 × 812 | `src/app/(tabs)/index.jsx` | Hero dish visual, "60 Min" / "Free" delivery badges, "All Ingredients are always fresh and natural!" banner, tabs (Info, Packages, Ingredients, Photo), nutrition facts table, and bottom order bar. |
| 3 | **Discover** | `AE9D5F80-8C93-477E-93D4-05D69EB358A2` | 375 × 812 | `src/app/(tabs)/discover.jsx` | "Find driver" live tracking screen, destination address ("St 3, High streetCleveland"), simulated vector road network with 5 driver avatars, verified badge for Mr. John Watson, and call/message actions. |
| 4 | **Reviews** | `D94DA9F2-7F79-48F2-8B2B-FC3D50FA53B6` | 375 × 812 | `src/app/(tabs)/reviews.jsx` | "Reviews" screen, overall 4.6 rating card, breakdown progress bars (Excellent, Very Good, Average, Poor, Terrible), popular foods filter chips, and verified customer reviews (Bonnie R. Miller & Amacheah Chukwudi). |
| 5 | **Checkout** | `F27FB907-011F-4F9F-B6C9-0D77E6F8FD3C` | 375 × 873 | `src/app/(tabs)/checkout.jsx` | "Checkout" cart summary, destination address, promo code voucher ("40% discount on all products"), subtotal $60.00, discount -$27.00, total $33.00, payment selector, and confirm order CTA. |

---

## 🥗 Design Tokens & Colors (Extracted from Sketch AST)

- **Primary Red**: `#BF213E`
- **Dark Primary**: `#97213E`
- **Secondary Gold**: `#F2AE2E` / `#FFBD2F`
- **Accent Teal**: `#009EA9`
- **Heading Text**: `#1A1824` / `#1A2E35`
- **Body Text**: `#444444` / `#777777`
- **Background**: `#FAFAFA` (Light) / `#141218` (Dark)
- **Dividers & Borders**: `#E1E1E1` / `#D8D8D8`

---

## 🚀 Running the App

```bash
# Start the Expo development server
npx expo start
```

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

<!-- developer:start -->

## 👨‍💻 Developer

This React Native app was developed by **Suresh Kumar Meesala**.

| | |
|---|---|
| Developer | [Suresh Kumar Meesala](https://github.com/SureshKumarMeesala) |
| GitHub | [@SureshKumarMeesala](https://github.com/SureshKumarMeesala) |
| Organization | [FreeAppSource](https://github.com/FreeAppSource) |
| Repository | <https://github.com/FreeAppSource/mino-food-app> |

<!-- developer:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Food Ordering App** design by **deeperUI**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [deeperUI](https://www.sketchappsources.com/contributor/deeperui) |
| Original design | [Food Ordering App](https://www.behance.net/deeperUI) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4671-food-delivery-ui-app-sketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/deeperui> |
| Website | <https://www.deeper.one/> |
| Original file | `mino-food-deeperui.sketch` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Food Ordering App" by deeperUI (https://www.behance.net/deeperUI), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4671-food-delivery-ui-app-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
