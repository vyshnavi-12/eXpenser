# 💸 eXpenser – Personal Expenses Tracker

![Next.js](https://img.shields.io/badge/Next.js-Framework-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-blueviolet)

> A modern and feature-rich personal expense tracker to record, categorize, and analyze your spending — built using **Next.js**, **Prisma**, **TailwindCSS**, and more.

---

## 🎯 Overview

**eXpenser** is a full-stack personal finance management app that allows users to add, manage, and visualize their expenses and income with ease. With user authentication, category-based tracking, and elegant UI, it provides everything needed to stay on top of your budget.

---

## ✨ Features

* 🔐 **User Authentication** – Secure sign-in/sign-up functionality
* 📊 **Dashboard View** – Displays income, expenses, and overall balance
* ➕ **Add Transactions** – Create entries for income and expenses with details
* 🔁 **Recurring Transactions** – Automatically repeat frequent expenses/income
* 🧾 **Budget Management** – Set and track your monthly budgets
* 📈 **Interactive Charts** – Visualize spending trends
* 📨 **Email Notifications** – Receive monthly reports and budget alerts
* 💡 **Modern UI** – Built with reusable components using TailwindCSS

---

## 🎯 Goals

* Help users track personal finances in a clean, easy-to-use platform
* Build a full-stack application using modern technologies
* Practice modular component design and database management with Prisma

---

## 🛠️ Tech Stack

| Category       | Technology                                        |
| -------------- | ------------------------------------------------- |
| Frontend       | React (Next.js 13+)                               |
| Styling        | Tailwind CSS                                      |
| Backend/API    | Node.js, Next.js APIs                             |
| ORM/Database   | Prisma, PostgreSQL/SQLite                         |
| Authentication | NextAuth / Custom                                 |
| Deployment     | Vercel / Render                                   |
| Other Tools    | EmailJS / Resend (emails), ShadCN UI              |

---

## 📁 Project Structure

```
personal-expenses-tracker/
├── actions/                 # Server-side functions (transactions, budget, auth)
├── app/                     # App routing (Next.js)
│   ├── (auth)/              # Auth routes (sign-in, sign-up)
│   └── (main)/              # Main pages (dashboard, overview)
├── components/              # Reusable UI components (button, table, modal)
│   └── ui/                  # Shared UI primitives
├── prisma/                  # Prisma ORM schema and migrations
├── data/                    # Static or seed data
├── emails/                  # Email templates
├── public/                  # Public assets
├── styles/                  # Global styles
├── utils/                   # Utility functions
├── .env                     # Environment configuration
├── README.md                # Project documentation
```

---

## 🎥 Watch Demo Video

📽️ **[Click here to watch the demo](https://drive.google.com/file/d/1L2kQf_xsWaIemrFaXQpkUkwkCP8o2P_u/view?usp=sharing)** – See how **eXpenser** works in action!

---

## ⚡ Quick Start

```bash
# Clone the repo
git clone https://github.com/vyshnavi-12/eXpenser

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

---

## 🔄 Deployment

The app can be deployed on platforms like **Vercel** or **Render**.
Make sure to configure the `.env` variables accordingly in the dashboard.

---

## 🧠 Learnings

* Worked with **Next.js App Router** and file-based routing
* Built dynamic forms and charts with **React & Tailwind**
* Learned **Prisma** for schema management and ORM
* Integrated email services for user communication

---

## 👩‍💻 Developed By

**Sri Vyshnavi**

* 🔗 [LinkedIn](https://www.linkedin.com/in/sri-vyshnavi-nakka-38136428b/)
* 💼 [Portfolio](https://vyshnavi-12.github.io/Portfolio/)
* 📧 [Email](mailto:srivyshnavinakka@gmail.com)

