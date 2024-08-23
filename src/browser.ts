// Import a function
// (window as any).greet = greet;
// Make it accessible on the window object

declare global {
  interface Window {
    greet: typeof greet;
  }
}
// In your browser.ts file
import { greet } from "./main";
window.greet = greet;
// try {
//   (window as unknown as { greet: typeof greet }).greet = greet;
// } catch (error) {
//   console.error("Error loading or assigning greet function:", error);
// }
