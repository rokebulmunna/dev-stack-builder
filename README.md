# Dev Stack Builder

Dev Stack Builder is an interactive single-page application (SPA) built to help developers browse, explore, and customize their preferred software development technologies. Users can explore various frontend, backend, database, and DevOps tools and curate a personalized stack in real time.

## 🚀 Key Features

* **Interactive Stack Manager**: Effortlessly add or remove tools from your custom stack with automatic duplicate prevention and one-click stack clearing.
* **Dynamic Data Loading**: Real-time asynchronous data fetching from a structured JSON configuration using React asynchronous patterns.
* **Instant Visual Feedback**: Real-time user notifications via React-Toastify for addition, duplication warnings, and removals.

## 🛠️ Technologies Used

* **React.js** (Vite)
* **Tailwind CSS** & **DaisyUI**
* **React-Toastify**
* **JSON**

---

## 💡 React Concept Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like markup directly inside JavaScript code. It makes writing component UI templates much easier to read, write, and maintain compared to using raw `React.createElement()` functions.

### 2. What is the difference between props and state?
* **Props** are read-only inputs passed from a parent component down to a child component. A child cannot modify its own props.
* **State** is internal data managed within a component that can change over time (e.g., user interaction). When state updates, React automatically re-renders the component to show the new data.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` is a React Hook that allows components to create and manage local state variables. In this project, `useState` was used in `App.jsx` to store the list of technologies fetched from `data.json` (`technologies`), the list of selected tools (`stack`), and the initial fetching status.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` lets components perform side effects after rendering, such as fetching data, modifying DOM elements, or setting timers. In this project, `useEffect` was used to run an `async/await` fetch call to pull the technology data from `/data.json` once when the application mounts.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the unique `key` prop to track items in a rendered list across re-renders. It helps React identify which items have changed, been added, or removed, allowing it to efficiently update only the changed DOM nodes instead of re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying specific UI components or text based on certain conditions (like `if` statements or ternary operators). In this project, conditional rendering was used in `Sidebar.jsx` to display a `"Your stack is empty."` box when `stack.length === 0`, and the selected item cards when items are present.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child**: Data is passed downwards via `props`. (e.g., `<Sidebar stack={stack} />`)
* **Child to Parent**: The parent passes a callback function down as a prop. When an event happens in the child, it invokes that callback function, passing data back up to the parent. (e.g., passing `onAddToStack` function to `TechCard`).