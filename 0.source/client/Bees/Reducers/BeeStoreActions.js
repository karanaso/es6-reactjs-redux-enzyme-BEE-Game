export const BeeStoreActions = {
  initializeEnvironment : ( bees ) => {
    return {
      type : 'initializeEnvironment',
      bees
    };
  },
  shootABee : ( beeId ) => {
    return {
      type : 'shootABee',
      beeId
    };
  }
};
