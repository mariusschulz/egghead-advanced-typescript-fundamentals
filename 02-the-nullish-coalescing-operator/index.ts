type SerializationOptions = {
  formatting?: {
    indent?: number;
  };
};

function serializeJSON(value: any, options?: SerializationOptions) {
  const indent = options?.formatting?.indent ?? 2;
  return JSON.stringify(value, null, indent);
}

const user = {
  name: "Marius Schulz",
  twitter: "mariusschulz",
};

const json = serializeJSON(user, {
  formatting: {
    indent: 4,
  },
});

console.log(json);
