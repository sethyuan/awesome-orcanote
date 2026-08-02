const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: node scripts/minify-svg.js <path-to-svg>");
  process.exit(1);
}

const absolutePath = path.resolve(filePath);
const safeRoot = path.resolve(process.cwd());

if (!absolutePath.startsWith(safeRoot + path.sep) && absolutePath !== safeRoot) {
  console.error("Error: File path must be within the current working directory.");
  process.exit(1);
}

if (!fs.existsSync(absolutePath)) {
  console.error(`File does not exist: ${absolutePath}`);
  process.exit(1);
}

if (path.extname(absolutePath).toLowerCase() !== ".svg") {
  console.error("Error: Please provide an SVG file.");
  process.exit(1);
}

try {
  let content = fs.readFileSync(absolutePath, "utf8");

  // Minify content:
  // 1. Remove comments <!-- ... -->
  // 2. Remove whitespace between tags
  // 3. Remove extra spaces
  const minified = content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/>\s+</g, "><")
    .replace(/\s{2,}/g, " ")
    .trim();

  // Escape for JSON (e.g., escape double quotes)
  const escaped = minified.replace(/"/g, '\\"');

  // Output to console
  console.log(escaped);

  // Copy to clipboard (macOS)
  try {
    const platform = process.platform;
    if (platform === "darwin") {
      const proc = require("child_process").spawn("pbcopy");
      proc.stdin.write(escaped);
      proc.stdin.end();
      console.log("\n(Successfully copied to clipboard)");
    } else {
      console.log("\n(Auto-copy to clipboard is only supported on macOS)");
    }
  } catch (copyError) {
    console.error("\n(Failed to copy to clipboard)");
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
