export default {
  install (Vue, options) {
    Vue.prototype.$hasPermissions = function (properties) {
      const { usersPermissions } = options
      const permissionsToCheck = typeof properties === 'string' ? [properties] : properties
      return permissionsToCheck.some(permission => usersPermissions.indexOf(permission) !== -1)
    }
  }
}
