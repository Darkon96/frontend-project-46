import _ from 'lodash';

const stringify = (data, depth) => {
  const replacer = '    ';
  if (!_.isObject(data)) {
    return `${data}`;
  }

  const indentForKey = replacer.repeat(depth + 1);
  const indentForBracket = replacer.repeat(depth);
  const lines = Object.entries(data).map(
    ([key, value]) => `${indentForKey}${key}: ${stringify(value, depth + 1, replacer)}`,
  );

  return ['{', ...lines, `${indentForBracket}}`].join('\n');
};

const sign = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
};

const makeStylish = (diff) => {
  const replacer = '    ';
  const iter = (tree, depth) => tree.map((node) => {
    const indent = replacer.repeat(depth);
    const indentForSign = indent.slice(2);

    const makeLine = (value, mark) => `${indentForSign}${mark} ${node.key}: ${stringify(value, depth, replacer)}`;

    switch (node.typeOfDifference) {
      case 'added':
        return makeLine(node.value, sign.added);
      case 'deleted':
        return makeLine(node.value, sign.deleted);
      case 'notChanged':
        return makeLine(node.value, sign.unchanged);
      case 'changed':
        return [
          `${makeLine(node.value1, sign.deleted)}`,
          `${makeLine(node.value2, sign.added)}`,
        ].join('\n');
      case 'nested':
        return `${indent}${node.key}: ${['{', ...iter(node.value, depth + 1), `${indent}}`].join('\n')}`;
      default:
        throw new Error(`Type: ${node.typeOfDifference} is undefined`);
    }
  });

  const stylishDiff = iter(diff, 1);
  return ['{', ...stylishDiff, '}'].join('\n');
};

export default makeStylish;
