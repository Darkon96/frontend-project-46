export default function parsing(fileContent, extension) {
  switch (extension) {
    case 'json':
      return JSON.parse(fileContent);
    default:
      throw new Error(`Invalid file extension: '${extension}'! Try supported formats.`);
  }
}
