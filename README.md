# 🔢 Pagination Component

A **fully customizable and reusable pagination component** built with **React** and **TypeScript**.

This component can be used in **any React project** (e.g., Vite, CRA, etc.) and is also **compatible with Next.js** (App Router or Pages Router).

## ✨ Features

- ✅ Easy to use with minimal setup
- 🧩 Custom render functions for page buttons, ellipsis, prev/next
- 🎨 Style customization with class names
- ⏭️ Smart ellipsis rendering for large data sets
- 🔁 Fully controlled component
- 📦 Lightweight and dependency-free

## 🚀 Installation

Install the package via npm or yarn:

```bash
npm install react-paginate-js
```

## 🧪 Basic Usage

```tsx
import Pagination from "./Pagination";

function MyComponent() {
  const [page, setPage] = useState(0);

  return (
    <Pagination currentPage={page} total={100} onChange={(p) => setPage(p)} />
  );
}
```

## ⚠️ Next.js Users

If you're using Next.js with the App Router, don’t forget to add the following directive at the top of the component file:

```tsx
"use client";
```

## ⚙️ Props

| Prop name                 | Type                                     | Default       | Description                                                             |
| ------------------------- | ---------------------------------------- | ------------- | ----------------------------------------------------------------------- |
| `currentPage`             | `number`                                 | `0`           | The current active page (0-based index).                                |
| `total`                   | `number`                                 | `0`           | Total number of items.                                                  |
| `onChange`                | `(value: number) => void`                | —             | Callback when a new page is selected.                                   |
| `pageSize`                | `number`                                 | `10`          | Number of items per page.                                               |
| `maxVisiblePages`         | `number`                                 | `5`           | Max number of visible page buttons (excluding first/last and ellipsis). |
| `className`               | `string`                                 | `""`          | Class for the pagination container.                                     |
| `buttonClassName`         | `string`                                 | `""`          | Class for all page buttons.                                             |
| `activeButtonClassName`   | `string`                                 | `""`          | Class for the active page button.                                       |
| `disabledButtonClassName` | `string`                                 | `""`          | Class for disabled buttons.                                             |
| `renderPageButton`        | `(page, isActive, onClick) => ReactNode` | Built-in      | Custom render function for each page.                                   |
| `renderEllipsis`          | `() => ReactNode`                        | `...` span    | Custom ellipsis rendering.                                              |
| `renderPrevButton`        | `(disabled, onClick) => ReactNode`       | `&lt;` button | Custom "Previous" button.                                               |
| `renderNextButton`        | `(disabled, onClick) => ReactNode`       | `&gt;` button | Custom "Next" button.                                                   |

## 💡 Fully Customized Example Using Next.js & Tailwind

```tsx
"use client";

import { useState } from "react";
import Pagination from "react-paginate-js";

export default function ExamplePage() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Pagination
        currentPage={page}
        total={50}
        pageSize={5}
        maxVisiblePages={5}
        onChange={(page) => setPage(page)}
        className="flex items-center justify-center gap-2 mt-4"
        buttonClassName="px-3 py-1 border rounded text-gray-700 hover:bg-gray-100"
        activeButtonClassName="bg-blue-500 text-white font-bold"
        disabledButtonClassName="text-gray-400 cursor-not-allowed"
        renderPrevButton={(disabled, onClick) => (
          <button
            disabled={disabled}
            onClick={onClick}
            className={`px-3 py-1 border rounded ${
              disabled ? "text-gray-400" : "hover:bg-gray-100"
            }`}
          >
            Previous
          </button>
        )}
        renderNextButton={(disabled, onClick) => (
          <button
            disabled={disabled}
            onClick={onClick}
            className={`px-3 py-1 border rounded ${
              disabled ? "text-gray-400" : "hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        )}
        renderPageButton={(page, isActive, onClick) => (
          <button
            onClick={onClick}
            className={`px-3 py-1 border rounded ${
              isActive
                ? "bg-blue-500 text-white font-semibold border border-blue-500"
                : "hover:bg-gray-100"
            }`}
          >
            {page + 1}
          </button>
        )}
        renderEllipsis={() => <span className="px-2 text-gray-500">...</span>}
      />
    </div>
  );
}
```
