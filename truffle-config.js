module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
      development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*",
          gas: 6721975,
          gasPrice: 20000000000
      }
  },
  solc: {
      optimizer: {
          enabled: true,
          runs: 200
      }
  }
};
