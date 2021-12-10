# env

Utility library to load and require environment variables to be set

## Quickstart

```typescript
import { env } from "@chronark/env"


// this will throw an error if `HOST` is not a defined environment variable
const host = env.require("HOST")


// this will instead use the provided default value
const port = env.get("PORT", 3000) 

```