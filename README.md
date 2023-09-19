# vue3-external-component

Loads a component from a remote url

## Install

```bash
yarn add vue3-external-component
```

Or:

```bash
npm install vue3-external-component
```

## Example

```vue
<script>
import { loadComponent } from 'vue3-external-component'

export default {
  data() {
    return {

    }
  },
  components: {
    'test-comp': loadComponent('http://localhost/TestComp.vue')
  },
}
</script>

<template>
  <div>
    <test-comp msg="123">Hello</test-comp>
  </div>
</template>
```
