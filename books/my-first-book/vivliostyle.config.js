/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
export default {
  title: '私の最初の本',
  author: '名無しの権兵衛',
  language: 'ja',
  size: 'A4',
  theme: '../../themes/my-book-theme',
  entry: ['manuscript/01_maegaki.md', 'manuscript/99_atogaki.md'],
  output: ['./book', './book.pdf'],
  workspaceDir: '.vivliostyle',
  toc: true,
  cover: 'cover.jpg',
};
