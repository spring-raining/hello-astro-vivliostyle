/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
export default {
  title: '私の最初の本',
  author: '名無しの権兵衛',
  language: 'ja',
  size: 'A4',
  theme: [
    '../../themes/my-book-theme/node_modules/@vivliostyle/theme-base',
    '../../themes/my-book-theme',
  ],
  entry: ['manuscript/01_maegaki.md', 'manuscript/99_atogaki.md'],
  output: ['./book.pdf'],
  workspaceDir: '.vivliostyle',
  toc: true,
  cover: 'cover.jpg',
  copyAsset: {
    includes: ['node_modules/www/dist'],
    excludes: ['node_modules/www/dist/article'],
  },
};
