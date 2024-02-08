import makePlain from './plain.js';
import makeStylish from './stylish.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(data);
    case 'plain':
      return makePlain(data);
    case 'json':
      return JSON.stringify(data, null);
    default:
      throw new Error(
        `Invalid file format type: '.${format}'! Try supported file formats.`,
      );
  }
};
