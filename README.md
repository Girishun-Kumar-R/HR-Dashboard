# 💼 HR Performance Dashboard (Advanced)

A sleek and interactive HR dashboard built with **Next.js App Router**, **Tailwind CSS**, and **Zustand**, allowing HR managers to track employee performance, manage bookmarks, and explore analytics — all with a modern, responsive interface.

---

## 👤 Author

**Girishun Kumar R**  
🔗 [LinkedIn](https://www.linkedin.com/in/girishunkumarr/)

---

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Dark/Light Mode support)
- **State Management:** Zustand (for global bookmark management)
- **Data Fetching:** REST (dummyjson.com)
- **Charts:** Chart.js via react-chartjs-2
- **Language:** JavaScript (ES6+)

---

## 🎯 Core Features

### 1. 🏠 Dashboard Homepage (`/`)

- Fetches 20 users from `https://dummyjson.com/users?limit=20`
- Displays user cards with:
  - Full name, email, age, department
  - Star-based performance rating
  - Buttons: `View`, `Bookmark`, `Promote`

### 2. 🔍 Search & Multi-Select Filter

- Real-time search by name, email, or department
- Filter users by:
  - Department (multi-select toggle)
  - Performance Rating (1–5 stars)

### 3. 👤 Dynamic User Details (`/employee/[id]`)

- Tabbed interface: `Overview`, `Projects`, `Feedback`
- Displays mock address, phone, bio, and performance history
- Dynamically styled performance badges and rating stars

### 4. 📌 Bookmark Manager (`/bookmarks`)

- Lists all bookmarked employees
- Allows:
  - Removing bookmarks
  - "Promote" or "Assign to Project" (mock UI actions)

### 5. 📊 Analytics Dashboard (`/analytics`)

- Bar chart: Average department-wise performance
- Line chart: Bookmark trends using real or mock data
- Donut chart (optional): Department distribution breakdown

---

## 🧠 Architecture & Design

- ✅ Modular folder structure
- ✅ Zustand store (`useBookmarks`, `useSearch`)
- ✅ Reusable components: `UserCard`, `RatingStars`, `Charts`, etc.
- ✅ Client-side rendering (with hydration fallback handled)
- ✅ Fully responsive and mobile-friendly layout
- ✅ Dark/light mode with Tailwind classes

---

## 🧪 Bonus Features

- 🔹 "Create User" placeholder action (for future extension)
- 🔹 Color-coded performance badges based on star ratings
- 🔹 Action buttons (`Promote`, `Assign to Project`, `Remove Bookmark`) on bookmarked employees
- 🔹 Mocked tabbed UI with dynamic content loading (`Overview`, `Projects`, `Feedback`)
- 🔹 Bookmark trends chart using either real history (Zustand store) or mocked data
- 🔹 Export chart data as image (planned for future extension)
- 🔹 Persistent dark/light mode support
- 🔹 Responsive layout for all screen sizes
- 🔹 Reusable components: `UserCard`, `RatingStars`, `Charts`, etc.
- 🔹 Modular folder structure with hooks, components, pages, and lib

---

## 📸 Screenshots

![alt text](https://github.com/Girishun-Kumar-R/HR-Dashboard/blob/9e26d60348a968289dec4b5ca6c237b88617234a/Screenshots/Home%20dashboard.png)
🏠 Home Dashboard

![alt text](https://github.com/Girishun-Kumar-R/HR-Dashboard/blob/9e26d60348a968289dec4b5ca6c237b88617234a/Screenshots/Analystics%20Dashboard.png)
📊 Analytics Dashboard

* For more, please visit Screenshots [click here](https://github.com/Girishun-Kumar-R/HR-Dashboard/tree/main/Screenshots)

## 🛠️ Local Development

```bash
# 1. Clone the repo
git clone https://github.com/Girishun-Kumar-R/HR-Dashboard
cd hr-dashboard

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
