# @osaxyz/tooltip

## インストール

`npm install @osaxyz/tooltip`

## どう動くか

ツールチップを表示したいDOMを、`ToolTip`コンポーネントの入れ子にして下さい。自動的に、`message`Propsで渡した文字列が、その要素にホバーした際にマウスに追従して現れるようになります。

## 使い方

1. `@osaxyz/tooltip`から`ToolTip`をインポートします・
2. 必要であれば、`@osaxyz/tooltip/dist/style.css`をインポートします。カスタムスタイルを適用したい場合、`.osa-tooltip_message`クラスへのアクセスが可能です。
3. `ToolTip`コンポーネントへ`message`（String）Propsを渡して下さい。

```js
import ToolTip from '@osaxyz/tooltip'
import '@osaxyz/tooltip/dist/style.css'
```

```html
<ToolTip message="Hoge">
    <YourCustomElements>
    ...
</ToolTip>
```