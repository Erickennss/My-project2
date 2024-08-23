// Import a function
import { greet } from "./main";

//  Make it accessible on the window object
// (window as any).greet = greet;

try {
  (window as unknown as { greet: typeof greet }).greet = greet;
} catch (error) {
  console.error("Error loading or assigning greet function:", error);
}
