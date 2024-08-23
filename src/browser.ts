// Import a function
import { greet } from "./main";
// (window as any).greet = greet;
// Make it accessible on the window object

declare global {
  interface Window {
    greet: typeof greet;
  }
}
// In browser.ts file
window.greet = greet;
