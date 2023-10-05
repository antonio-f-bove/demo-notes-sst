import { Bucket, StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  // create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  const bucket = new Bucket(stack, "Uploads");

  // explicitly returning the rosources allows us to reference the in other stacks
  return {
    table,
    bucket,
  };
}
