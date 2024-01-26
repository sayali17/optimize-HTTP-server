const fs = require('fs').promises;

const generateRandomText = () => {
  return Math.random().toString(36).substring(2, 15);
};

const generateRandomFile = async (fileName, fileSizeMB) => {
  const content = Array.from({ length: fileSizeMB * 1024 * 1024 }, () => generateRandomText()).join('\n');
  await fs.writeFile(`/tmp/data/${fileName}.txt`, content);
};

// Generate 30 random files of approximately 100MB each
for (let i = 1; i <= 30; i++) {
  generateRandomFile(i, 100);
}
