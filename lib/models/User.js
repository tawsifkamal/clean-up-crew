const BlockSchema = mongoose.Schema(
  {
    timestamp: {
      type: String,
      default: () => Date.now().toString(),
    },
    transactions: {
      type: [TransactionSchema],
      default: [],
    },
    previousHash: {
      type: String,
      default: "000000000000",
    },
    hash: {
      type: String,
      default: blockMethods.calculateHash,
    },
    nonce: {
      type: Number,
      default: 0,
    },
  },
  {
    methods: blockMethods,
  }
);

module.exports = mongoose.models.Block || mongoose.model("Block", BlockSchema);
