type NonNullish<T> = T extends null | undefined ? never : T;

type A = NonNullish<string>;
type B = NonNullish<string | null>;
type C = NonNullish<string | null | undefined>;
type D = NonNullish<null>;
type E = NonNullish<undefined>;

// =============================================================================

type EmailAddress = string | string[] | null | undefined;

type NonNullableEmailAddress = NonNullable<EmailAddress>;

type NonNullableEmailAddress1 = NonNullable<
  string | string[] | null | undefined
>;

type NonNullableEmailAddress2 =
  | NonNullable<string>
  | NonNullable<string[]>
  | NonNullable<null>
  | NonNullable<undefined>;

type NonNullableEmailAddress3 =
  | (string extends null | undefined ? never : string)
  | (string[] extends null | undefined ? never : string[])
  | (null extends null | undefined ? never : null)
  | (undefined extends null | undefined ? never : undefined);

type NonNullableEmailAddress4 = string | string[] | never | never;

type NonNullableEmailAddress5 = string | string[];
