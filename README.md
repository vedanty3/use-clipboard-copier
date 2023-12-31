## ****useClipBoardCopier 🪝****

A React hook which helps you copy text to your clipboard 📋

### Installation

```bash
npm install use-clipboard-copier
```

### Usage

```typescript
import React from "react";
import { useClipBoardCopier } from "use-clipboard-copier";

const hasCopiedTimer = 10000; // 10 seconds

const App: React.FC = () => {
  const { isCopied, clipBoardRef, copyToClipBoard } =
    useClipBoardCopier(hasCopiedTimer);

  const handleCopyClick = () => {
    copyToClipBoard();
  };

  return (
    <div>
      <input ref={clipBoardRef} placeholder="type something..." />
      <button onClick={handleCopyClick}>Copy to Clipboard</button>
      {isCopied ? <p>Copied</p> : <p>Copy</p>}
    </div>
  );
};

export default App;
```

> *Note: This hook works with all `HTML ELEMENTS` including `INPUT ELEMENT` as well.*

###### *Example: [CodeSandbox](https://codesandbox.io/p/sandbox/use-clipboard-copier-9zfqlg)*

###### *Checkout `use-clipboard-copier` on [npm](https://www.npmjs.com/package/use-clipboard-copier)*

###### *Contributors*

<div style="text-align: center; background-color: #f8f9fa; padding: 20px; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); display: inline-block;">
  <a href="https://github.com/uuvedant4/use-clipboard-copier/graphs/contributors" style="text-decoration: none;">
    <img src="https://contrib.rocks/image?repo=uuvedant4/use-clipboard-copier" style="width: 150px; height: auto; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
  </a>
</div>
