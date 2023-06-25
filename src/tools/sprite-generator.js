/* eslint-disable */
const svgstore = require('svgstore');
const fs = require('fs');
const path = require('node:path');

const iconsDir = path.resolve(__dirname, '../assets/img/svg');
const outputSpriteDir = path.resolve(__dirname, '../assets/img/sprite.svg');
const outputTypesDir = path.resolve(__dirname, '../components/ui/ui-icon/types.ts');
const icons = fs.readdirSync(iconsDir);
const iconTypes = [];

const result = icons.reduce((accumulator, icon) => {
  const iconName = icon.replace('.svg', '');
  const iconPath = path.join(iconsDir, icon);
  iconTypes.push(`  ${iconName} = '${iconName}'`);

  return accumulator.add(iconName, fs.readFileSync(iconPath, 'utf8'));
}, svgstore());

const types = `export enum IconTypes {
${iconTypes.join(',\n')},
}
`;

fs.writeFileSync(outputSpriteDir, result);
fs.writeFileSync(outputTypesDir, types);
