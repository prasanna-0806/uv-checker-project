# ☀️ UV Checker – Know When to Glow (or Hide!)

A simple Node.js + Express web app that tells you the **UV Index** at any location based on coordinates you input. Whether you're planning a beach day or just stepping out for chai, this app tells you if you need sunscreen or can chill. 😎🧴

---

## 🔧 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [EJS](https://ejs.co/)
- [OpenUV API](https://www.openuv.io/)
- HTML + CSS  

---

## 🚀 Features

- 🌍 Enter any **latitude and longitude**
- ☀️ Fetches **live UV index** from OpenUV API
- ✅ Displays **safety suggestion** (Low / Moderate / High UV)
- 🎨 Aesthetic UI with a custom color palette and SVG wave pattern
- 📱 Fully responsive layout

---

## 🛠️ Getting Started

Here’s how to set up and run the app locally:

### 1. Clone this repo

```bash
git clone https://github.com/yourusername/uv-checker.git
cd uv-checker
```

### 2. Install dependencies

```bash
npm install
```

This installs required packages like:
- `express`
- `axios`
- `dotenv`
- `ejs`

### 3. Configure environment

Create a `.env` file in the root folder and add your OpenUV API key:

```env
OPENUV_API_KEY=your_actual_api_key_here
```

✅ The `.env` file is ignored in version control thanks to `.gitignore`.  
✅ You can refer to `.env.example` to know the format.

To get your API key, sign up at: https://www.openuv.io/

### 4. Run the server

To start the app:

```bash
node index.js
```

Or with auto-reload (if you have `nodemon` installed):

```bash
npm run dev
```

Now open your browser and go to:

```
http://localhost:3000
```

You'll see the input form for latitude & longitude, and on submit, the UV index info with color-coded suggestions.

---

## 🧪 Test Coordinates

Try these:

| Location         | Latitude  | Longitude |
|------------------|-----------|-----------|
| Vizag, India     | 17.6868   | 83.2185   |
| Dubai, UAE       | 25.276987 | 55.296249 |
| Chennai, India   | 13.0827   | 80.2707   |
| Quito, Ecuador   | -0.1807   | -78.4678  |

---

## 📁 Folder Structure

```
uv-checker/
├── public/
│   ├── styles.css
├── views/
│   └── index.ejs
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## 🔐 Security

- `.env` file is hidden via `.gitignore`
- Only `.env.example` is shared
- Never expose your real API keys publicly

---

## 👩🏻‍💻 Author

Made with ☀️ and 💻 by **Prasanna RDL**  

> Built as part of [100 Days of Code – Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) by Dr. Angela Yu.



## 📝 License

This project is open-source and for educational purposes. Feel free to fork, remix, or improve!
