# vue-has-permissions

A Vue.js prototype function, `this.$hasPermissions()`, which accepts a String or Array and checks to see if any of the values match with a master user permissions/features list. This could be used as a means to only render components or markup dependent on whether or not a user has specific access to it.

## Usage

### Plugin Installation
```js
import VueHasPermissions from 'vue-has-permissions';

// A user's given permissions for demonstration purposes
const permissions = ['Billing', 'Create', 'RemoveUsers']

Vue.use(VueHasPermissions, {
    usersPermissions: permissions
})
```

### Use In Component
```js
<template>
  <div>
    <p v-if="$hasPermissions('Billing')">
      This will only render if the user has 
      the 'Billing' permission
    </p>
    <p v-if="$hasPermissions(['Create', 'RemoveUser'])">
      This will only render if the user has
      either the 'Create' or 'RemoveUser' permission
    </p>
  </div>
</template>
```