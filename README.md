### Abhängigkeiten installieren

Zuerst müssen die notwendigen Bibliotheken installiert werden:

> npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

> npm install vitest

#### vitest-setup.js

```import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import \* as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
cleanup();
});
```

#### vite.config.js

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [react()],
test: {
environment: "jsdom",
globals: true,
setupFiles: ["./vitest-setup.js"],
},
});
```
