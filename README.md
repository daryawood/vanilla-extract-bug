## Prerequisites

`yarn@3.0.2`

`node@14.17.5`

## Steps to reproduce

`yarn install`

`yarn workspace @roadtravel/client-react build`

## Our observations

- deleting `import { style } from '@vanilla-extract/css';` from `projects/client-react/styles/vars.css.ts` makes it work
- moving the file `projects/client-react/components/layout/cookie-bar/lib/cookie-bar.css.ts` upper in a folder structure makes it work too
