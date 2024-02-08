import fs from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import parse from './parsers.js';
import formatOutput from './formatters/index.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);
const getExtension = (file) => path.extname(file).slice(1);

const getContentFromFile = (file) => {
  const absolutePath = getAbsolutePath(file);
  const fileContent = fs.readFileSync(absolutePath, 'utf8');
  const extension = getExtension(file);
  return parse(fileContent, extension);
};

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const content1 = getContentFromFile(filePath1);
  const content2 = getContentFromFile(filePath2);
  const diffInfo = buildTree(content1, content2);
  const formattedTree = formatOutput(diffInfo, format);

  return formattedTree;
};

export default gendiff;
