import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  // Tìm đường dẫn đến pdfjs-dist
  const pdfjsDistPath = path.dirname(
    new URL("pdfjs-dist/package.json", import.meta.url).pathname
  );
  console.log("pdfjs-dist path:", pdfjsDistPath);

  // Đường dẫn đến file worker
  const pdfWorkerPath = path.join(pdfjsDistPath, "build", "pdf.worker.mjs");
  console.log("PDF worker path:", pdfWorkerPath);

  // Kiểm tra xem file worker có tồn tại không
  if (!fs.existsSync(pdfWorkerPath)) {
    throw new Error(`PDF worker file not found at ${pdfWorkerPath}`);
  }

  // Đường dẫn đến thư mục public
  const publicDir = path.join(__dirname, "..", "public");
  console.log("Public directory:", publicDir);

  // Tạo thư mục public nếu nó không tồn tại
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Đường dẫn đến file đích
  const destPath = path.join(publicDir, "pdf.worker.mjs");
  console.log("Destination path:", destPath);

  // Copy file
  fs.copyFileSync(pdfWorkerPath, destPath);

  console.log("PDF worker file copied successfully to public directory");
} catch (error) {
  console.error("Error occurred:", error.message);
}
