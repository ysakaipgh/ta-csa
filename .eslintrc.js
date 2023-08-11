// eslint-disable-next-line @typescript-eslint/no-var-requires
// const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  // Next.jsで使用していたルールをベースとする
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    '@typescript-eslint',
    // 後ついでに、便利そうなプラグインの追加（後で精査する。）
    'deprecation', // 非推奨の警告用
    'eslint-comments', // ディレクティブ コメント (/*eslint-disable*/のようなやつ) 
    'import', // importの順番をルール化して、自動で整列してくれる
    'simple-import-sort', // importの順番を自動で整理してくれる
    'unicorn', // コード品質をさらに高める
    'jest', // テストコードのLintチェック
  ],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // ここから独自の設定
    "indent": ["error", 2], // 行の途中の改行は、インデントを必須とする
    "linebreak-style": ["error", "unix"], // 改行コードはLF
    "quotes": ["error", "double"], // 文字列の引用符は、ダブルクォート
    "semi": ["error", "always"], // 行末のセミコロンを必須にする
    "valid-jsdoc": "error", // コメントはJSDoc形式で記述すること
    "no-undefined": "error", // undefinedの使用を禁止
    "complexity": ["error", 15], // 循環的複雑度が規定値(デフォルト20)以内であること
    "consistent-return": "error", // returnする型は常に一致させるか全く使わないこと
    "dot-location": "error", // 改行前にドットを記述すること
    "eqeqeq": "error", // 型を含めた比較演算子を利用すること
    "no-multi-spaces": "error", // インデント以外で複数スペースを使用しないこと
    "yoda": "error", // ヨーダ記法で書かないこと
    "brace-style": "error", // プレーススタイルは One true brace style (1tbs) で記述すること
    "comma-style": "error", // 配列、オブジェクト、変数宣言においてカンマは末尾に付けること
    "eol-last": "error", // ファイルの最後には空行を入れること
    "lines-around-comment": "error", // ブロックコメントの前には空行を入れること
    "max-lines": ["error", 100], // 1ファイル規定値(デフォルト300)行以内とすること
    "max-params": ["error", 5], // 引数のパラメータ数は(デフォルト3)個以内とすること
    "multiline-ternary": "error", // 3項演算子は複数行に分けて記述すること
    "no-tabs": "error", // タブを使わないこと
    "no-trailing-spaces": "error", // 行末に不要な空白を残さないこと
    "operator-assignment": "error", // ショートハンドが使える場合はショートハンドで記載すること
    "operator-linebreak": ["error", "before"], // 式を記述する際、演算子は行頭に統一して記述すること
    "space-unary-ops": "error", // 文字列の単項演算子後には空白を入れ、記号の単項演算子の前または後ろには空白を入れないこと
    "spaced-comment": "error", // コメントの先頭には空白を入れること
  },
};

module.exports = config;
