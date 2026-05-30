const { execSync } = require("child_process");

console.log("Running all tests sequentially...\n");

try {
  execSync("npm test", { stdio: "inherit" });
} catch (error) {
  console.log("One or more tests failed.");
}