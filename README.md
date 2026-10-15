# Leads Tracker – Chrome extension backed by Firebase

A small Chrome extension for saving links you want to come back to. Paste a
URL, click save, and it appears in a list that persists in a Firebase
Realtime Database and updates live in every open copy of the page. The
starting point was the localStorage version from Scrimba's JavaScript
course; this repo is the rework to a real backend, one commit per lesson so
the history reads as a changelog.

## What was built

- **Firebase connection.** Initialised the app and Realtime Database from
  the Firebase CDN modules, with the database URL read from a `.env` file
  through Vite so it never lands in the repo.
- **Writes.** Replaced `localStorage.setItem` with `push`, which appends
  each lead under an auto-generated key.
- **Live reads.** An `onValue` listener converts each snapshot from a keyed
  object to an array and re-renders the list, so the page redraws on load
  and after every change, including changes made in another tab.
- **Delete all.** Wired the double-click handler to `remove` the whole
  `leads` node and clear the list on screen. Guarded the listener with
  `snapshot.exists()` so an empty database does not throw.
- **Removed the Save Tab button.** It depended on `chrome.tabs`, which only
  exists inside an extension, so the page now also works as a plain website.
- **Popup layout.** Added a labelled input with a placeholder and sized the
  body to Chrome's extension popup width.
- **Icons.** Favicons and a web manifest, with the files Vite bundles kept
  in `images` and the ones it must copy verbatim in `public`.

## Run it locally

```
npm install
cp .env.example .env
npm run dev
```

Paste your Realtime Database URL into `.env` before starting. Vite serves
the page at http://localhost:5173.

## Built with

HTML, CSS, JavaScript, Firebase Realtime Database and Vite. No frameworks.

## Course

Built while working through Scrimba's
[Fullstack Developer Path](https://scrimba.com/fullstack-path-c0fullstack).
The starter code is Scrimba's; the Firebase integration and layout are mine.
