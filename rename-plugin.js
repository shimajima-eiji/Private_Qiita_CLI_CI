const fs = require('fs');
const path = require('path');

module.exports = {
  apply(qiitaConfig) {
    qiitaConfig.hooks.afterEach.tap('RenamePlugin', async (article, outputPath) => {
      const { id, title } = article;
      const fileExtension = path.extname(outputPath);
      const newFileName = `(${id})${fileExtension}`;
      const newFilePath = path.join(path.dirname(outputPath), newFileName);

      try {
        await fs.promises.rename(outputPath, newFilePath);
        console.log(`Renamed "${title}" to "${newFileName}"`);
      } catch (err) {
        console.error(`Error renaming "${title}":`, err);
      }
    });
  }
};
