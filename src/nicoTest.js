import nicoJS from 'nicojs';

const create = (el) => {
  return new nicoJS({
    app: el, // スクリーンになる要素
    width: 800,                           // スクリーン幅
    height: 800,                          // スクリーン高さ
    font: 50,                             // フォントサイズ
    color: '#fff',                        // フォントカラー
    speed: 3                              // 流れるスピード
  });
};

export default {
  create,
};
