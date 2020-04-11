const client = (() => {
  return require<typeof import('../api/mock')>('../api/mock').default
})()

export default client
