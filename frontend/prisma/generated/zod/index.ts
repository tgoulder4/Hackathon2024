import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const MagicLinksScalarFieldEnumSchema = z.enum(['email','token','tokenExpiresAt']);

export const ResetTokensScalarFieldEnumSchema = z.enum(['id','userId','token','tokenExpiresAt']);

export const VerifyEmailTokensScalarFieldEnumSchema = z.enum(['id','userId','token','tokenExpiresAt']);

export const SessionScalarFieldEnumSchema = z.enum(['id','userId','expiresAt']);

export const UserScalarFieldEnumSchema = z.enum(['id','role','email','emailVerified','name','brandId']);

export const AccountsScalarFieldEnumSchema = z.enum(['id','userId','AccountType','password','salt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const RoleSchema = z.enum(['ADMIN','CLIENT']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export const AccountTypeSchema = z.enum(['email','google','github']);

export type AccountTypeType = `${z.infer<typeof AccountTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// MAGIC LINKS SCHEMA
/////////////////////////////////////////

export const MagicLinksSchema = z.object({
  email: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date(),
})

export type MagicLinks = z.infer<typeof MagicLinksSchema>

/////////////////////////////////////////
// RESET TOKENS SCHEMA
/////////////////////////////////////////

export const ResetTokensSchema = z.object({
  id: z.string(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date(),
})

export type ResetTokens = z.infer<typeof ResetTokensSchema>

/////////////////////////////////////////
// VERIFY EMAIL TOKENS SCHEMA
/////////////////////////////////////////

export const VerifyEmailTokensSchema = z.object({
  id: z.string(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date(),
})

export type VerifyEmailTokens = z.infer<typeof VerifyEmailTokensSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  expiresAt: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  name: z.string(),
  brandId: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// ACCOUNTS SCHEMA
/////////////////////////////////////////

export const AccountsSchema = z.object({
  AccountType: AccountTypeSchema,
  id: z.string(),
  userId: z.string().nullable(),
  password: z.string().nullable(),
  salt: z.string().nullable(),
})

export type Accounts = z.infer<typeof AccountsSchema>

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// MAGIC LINKS
//------------------------------------------------------

export const MagicLinksArgsSchema: z.ZodType<Prisma.MagicLinksDefaultArgs> = z.object({
  select: z.lazy(() => MagicLinksSelectSchema).optional(),
}).strict();

export const MagicLinksSelectSchema: z.ZodType<Prisma.MagicLinksSelect> = z.object({
  email: z.boolean().optional(),
  token: z.boolean().optional(),
  tokenExpiresAt: z.boolean().optional(),
}).strict()

// RESET TOKENS
//------------------------------------------------------

export const ResetTokensArgsSchema: z.ZodType<Prisma.ResetTokensDefaultArgs> = z.object({
  select: z.lazy(() => ResetTokensSelectSchema).optional(),
}).strict();

export const ResetTokensSelectSchema: z.ZodType<Prisma.ResetTokensSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  token: z.boolean().optional(),
  tokenExpiresAt: z.boolean().optional(),
}).strict()

// VERIFY EMAIL TOKENS
//------------------------------------------------------

export const VerifyEmailTokensArgsSchema: z.ZodType<Prisma.VerifyEmailTokensDefaultArgs> = z.object({
  select: z.lazy(() => VerifyEmailTokensSelectSchema).optional(),
}).strict();

export const VerifyEmailTokensSelectSchema: z.ZodType<Prisma.VerifyEmailTokensSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  token: z.boolean().optional(),
  tokenExpiresAt: z.boolean().optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  IsLoggedIntoSessions: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  name: z.boolean().optional(),
  brandId: z.boolean().optional(),
  HasAccount: z.union([z.boolean(),z.lazy(() => AccountsArgsSchema)]).optional(),
  IsLoggedIntoSessions: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ACCOUNTS
//------------------------------------------------------

export const AccountsIncludeSchema: z.ZodType<Prisma.AccountsInclude> = z.object({
}).strict()

export const AccountsArgsSchema: z.ZodType<Prisma.AccountsDefaultArgs> = z.object({
  select: z.lazy(() => AccountsSelectSchema).optional(),
  include: z.lazy(() => AccountsIncludeSchema).optional(),
}).strict();

export const AccountsSelectSchema: z.ZodType<Prisma.AccountsSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  AccountType: z.boolean().optional(),
  password: z.boolean().optional(),
  salt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const MagicLinksWhereInputSchema: z.ZodType<Prisma.MagicLinksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MagicLinksWhereInputSchema),z.lazy(() => MagicLinksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MagicLinksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MagicLinksWhereInputSchema),z.lazy(() => MagicLinksWhereInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MagicLinksOrderByWithRelationInputSchema: z.ZodType<Prisma.MagicLinksOrderByWithRelationInput> = z.object({
  email: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MagicLinksWhereUniqueInputSchema: z.ZodType<Prisma.MagicLinksWhereUniqueInput> = z.object({
  email: z.string()
})
.and(z.object({
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => MagicLinksWhereInputSchema),z.lazy(() => MagicLinksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MagicLinksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MagicLinksWhereInputSchema),z.lazy(() => MagicLinksWhereInputSchema).array() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const MagicLinksOrderByWithAggregationInputSchema: z.ZodType<Prisma.MagicLinksOrderByWithAggregationInput> = z.object({
  email: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MagicLinksCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MagicLinksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MagicLinksMinOrderByAggregateInputSchema).optional()
}).strict();

export const MagicLinksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MagicLinksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MagicLinksScalarWhereWithAggregatesInputSchema),z.lazy(() => MagicLinksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MagicLinksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MagicLinksScalarWhereWithAggregatesInputSchema),z.lazy(() => MagicLinksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ResetTokensWhereInputSchema: z.ZodType<Prisma.ResetTokensWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ResetTokensWhereInputSchema),z.lazy(() => ResetTokensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResetTokensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResetTokensWhereInputSchema),z.lazy(() => ResetTokensWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ResetTokensOrderByWithRelationInputSchema: z.ZodType<Prisma.ResetTokensOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ResetTokensWhereUniqueInputSchema: z.ZodType<Prisma.ResetTokensWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ResetTokensWhereInputSchema),z.lazy(() => ResetTokensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResetTokensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResetTokensWhereInputSchema),z.lazy(() => ResetTokensWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const ResetTokensOrderByWithAggregationInputSchema: z.ZodType<Prisma.ResetTokensOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ResetTokensCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ResetTokensMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ResetTokensMinOrderByAggregateInputSchema).optional()
}).strict();

export const ResetTokensScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ResetTokensScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ResetTokensScalarWhereWithAggregatesInputSchema),z.lazy(() => ResetTokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ResetTokensScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ResetTokensScalarWhereWithAggregatesInputSchema),z.lazy(() => ResetTokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerifyEmailTokensWhereInputSchema: z.ZodType<Prisma.VerifyEmailTokensWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerifyEmailTokensWhereInputSchema),z.lazy(() => VerifyEmailTokensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerifyEmailTokensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerifyEmailTokensWhereInputSchema),z.lazy(() => VerifyEmailTokensWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerifyEmailTokensOrderByWithRelationInputSchema: z.ZodType<Prisma.VerifyEmailTokensOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerifyEmailTokensWhereUniqueInputSchema: z.ZodType<Prisma.VerifyEmailTokensWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => VerifyEmailTokensWhereInputSchema),z.lazy(() => VerifyEmailTokensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerifyEmailTokensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerifyEmailTokensWhereInputSchema),z.lazy(() => VerifyEmailTokensWhereInputSchema).array() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerifyEmailTokensOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerifyEmailTokensOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerifyEmailTokensCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerifyEmailTokensMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerifyEmailTokensMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerifyEmailTokensScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerifyEmailTokensScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerifyEmailTokensScalarWhereWithAggregatesInputSchema),z.lazy(() => VerifyEmailTokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerifyEmailTokensScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerifyEmailTokensScalarWhereWithAggregatesInputSchema),z.lazy(() => VerifyEmailTokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tokenExpiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brandId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  HasAccount: z.union([ z.lazy(() => AccountsNullableRelationFilterSchema),z.lazy(() => AccountsWhereInputSchema) ]).optional().nullable(),
  IsLoggedIntoSessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  HasAccount: z.lazy(() => AccountsOrderByWithRelationInputSchema).optional(),
  IsLoggedIntoSessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  brandId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  HasAccount: z.union([ z.lazy(() => AccountsNullableRelationFilterSchema),z.lazy(() => AccountsWhereInputSchema) ]).optional().nullable(),
  IsLoggedIntoSessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  brandId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AccountsWhereInputSchema: z.ZodType<Prisma.AccountsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AccountType: z.union([ z.lazy(() => EnumAccountTypeFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AccountsOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  AccountType: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  salt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountsWhereUniqueInputSchema: z.ZodType<Prisma.AccountsWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsWhereInputSchema),z.lazy(() => AccountsWhereInputSchema).array() ]).optional(),
  AccountType: z.union([ z.lazy(() => EnumAccountTypeFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salt: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const AccountsOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  AccountType: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  salt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountsMinOrderByAggregateInputSchema).optional()
}).strict();

export const AccountsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AccountType: z.union([ z.lazy(() => EnumAccountTypeWithAggregatesFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional(),
  password: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  salt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MagicLinksCreateInputSchema: z.ZodType<Prisma.MagicLinksCreateInput> = z.object({
  email: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const MagicLinksUncheckedCreateInputSchema: z.ZodType<Prisma.MagicLinksUncheckedCreateInput> = z.object({
  email: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const MagicLinksUpdateInputSchema: z.ZodType<Prisma.MagicLinksUpdateInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MagicLinksUncheckedUpdateInputSchema: z.ZodType<Prisma.MagicLinksUncheckedUpdateInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MagicLinksCreateManyInputSchema: z.ZodType<Prisma.MagicLinksCreateManyInput> = z.object({
  email: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const MagicLinksUpdateManyMutationInputSchema: z.ZodType<Prisma.MagicLinksUpdateManyMutationInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MagicLinksUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MagicLinksUncheckedUpdateManyInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetTokensCreateInputSchema: z.ZodType<Prisma.ResetTokensCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const ResetTokensUncheckedCreateInputSchema: z.ZodType<Prisma.ResetTokensUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const ResetTokensUpdateInputSchema: z.ZodType<Prisma.ResetTokensUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetTokensUncheckedUpdateInputSchema: z.ZodType<Prisma.ResetTokensUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetTokensCreateManyInputSchema: z.ZodType<Prisma.ResetTokensCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const ResetTokensUpdateManyMutationInputSchema: z.ZodType<Prisma.ResetTokensUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ResetTokensUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ResetTokensUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerifyEmailTokensCreateInputSchema: z.ZodType<Prisma.VerifyEmailTokensCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const VerifyEmailTokensUncheckedCreateInputSchema: z.ZodType<Prisma.VerifyEmailTokensUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const VerifyEmailTokensUpdateInputSchema: z.ZodType<Prisma.VerifyEmailTokensUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerifyEmailTokensUncheckedUpdateInputSchema: z.ZodType<Prisma.VerifyEmailTokensUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerifyEmailTokensCreateManyInputSchema: z.ZodType<Prisma.VerifyEmailTokensCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  token: z.string(),
  tokenExpiresAt: z.coerce.date()
}).strict();

export const VerifyEmailTokensUpdateManyMutationInputSchema: z.ZodType<Prisma.VerifyEmailTokensUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerifyEmailTokensUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerifyEmailTokensUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tokenExpiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutIsLoggedIntoSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string(),
  userId: z.string(),
  expiresAt: z.coerce.date()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutIsLoggedIntoSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string(),
  userId: z.string(),
  expiresAt: z.coerce.date()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  name: z.string(),
  brandId: z.string(),
  HasAccount: z.lazy(() => AccountsCreateNestedOneWithoutUserInputSchema).optional(),
  IsLoggedIntoSessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  name: z.string(),
  brandId: z.string(),
  HasAccount: z.lazy(() => AccountsUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  IsLoggedIntoSessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HasAccount: z.lazy(() => AccountsUpdateOneWithoutUserNestedInputSchema).optional(),
  IsLoggedIntoSessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HasAccount: z.lazy(() => AccountsUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  IsLoggedIntoSessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  name: z.string(),
  brandId: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountsCreateInputSchema: z.ZodType<Prisma.AccountsCreateInput> = z.object({
  id: z.string().optional(),
  AccountType: z.lazy(() => AccountTypeSchema),
  password: z.string().optional().nullable(),
  salt: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutHasAccountInputSchema).optional()
}).strict();

export const AccountsUncheckedCreateInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  AccountType: z.lazy(() => AccountTypeSchema),
  password: z.string().optional().nullable(),
  salt: z.string().optional().nullable()
}).strict();

export const AccountsUpdateInputSchema: z.ZodType<Prisma.AccountsUpdateInput> = z.object({
  AccountType: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutHasAccountNestedInputSchema).optional()
}).strict();

export const AccountsUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AccountType: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountsCreateManyInputSchema: z.ZodType<Prisma.AccountsCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  AccountType: z.lazy(() => AccountTypeSchema),
  password: z.string().optional().nullable(),
  salt: z.string().optional().nullable()
}).strict();

export const AccountsUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountsUpdateManyMutationInput> = z.object({
  AccountType: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AccountType: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const MagicLinksCountOrderByAggregateInputSchema: z.ZodType<Prisma.MagicLinksCountOrderByAggregateInput> = z.object({
  email: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MagicLinksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MagicLinksMaxOrderByAggregateInput> = z.object({
  email: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MagicLinksMinOrderByAggregateInputSchema: z.ZodType<Prisma.MagicLinksMinOrderByAggregateInput> = z.object({
  email: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ResetTokensCountOrderByAggregateInputSchema: z.ZodType<Prisma.ResetTokensCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ResetTokensMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ResetTokensMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ResetTokensMinOrderByAggregateInputSchema: z.ZodType<Prisma.ResetTokensMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerifyEmailTokensCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerifyEmailTokensCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerifyEmailTokensMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerifyEmailTokensMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerifyEmailTokensMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerifyEmailTokensMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  tokenExpiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const AccountsNullableRelationFilterSchema: z.ZodType<Prisma.AccountsNullableRelationFilter> = z.object({
  is: z.lazy(() => AccountsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AccountsWhereInputSchema).optional().nullable()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const EnumAccountTypeFilterSchema: z.ZodType<Prisma.EnumAccountTypeFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeFilterSchema) ]).optional(),
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const AccountsCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  AccountType: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  salt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  AccountType: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  salt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountsMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  AccountType: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  salt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const EnumAccountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAccountTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserCreateNestedOneWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutIsLoggedIntoSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutIsLoggedIntoSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutIsLoggedIntoSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutIsLoggedIntoSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutIsLoggedIntoSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutIsLoggedIntoSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutIsLoggedIntoSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutIsLoggedIntoSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUpdateWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutIsLoggedIntoSessionsInputSchema) ]).optional(),
}).strict();

export const AccountsCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AccountsCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional()
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountsUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional()
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const AccountsUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountsUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AccountsUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AccountsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AccountsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AccountsUpdateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountsUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountsCreateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountsCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AccountsUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AccountsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AccountsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AccountsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountsUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AccountsUpdateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutHasAccountInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutHasAccountInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHasAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutHasAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHasAccountInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumAccountTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AccountTypeSchema).optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const UserUpdateOneWithoutHasAccountNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutHasAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHasAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutHasAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHasAccountInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutHasAccountInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutHasAccountInputSchema),z.lazy(() => UserUpdateWithoutHasAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHasAccountInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedEnumAccountTypeFilterSchema: z.ZodType<Prisma.NestedEnumAccountTypeFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedEnumAccountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAccountTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional()
}).strict();

export const UserCreateWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutIsLoggedIntoSessionsInput> = z.object({
  id: z.string().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  name: z.string(),
  brandId: z.string(),
  HasAccount: z.lazy(() => AccountsCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutIsLoggedIntoSessionsInput> = z.object({
  id: z.string().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  name: z.string(),
  brandId: z.string(),
  HasAccount: z.lazy(() => AccountsUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutIsLoggedIntoSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutIsLoggedIntoSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutIsLoggedIntoSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutIsLoggedIntoSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutIsLoggedIntoSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutIsLoggedIntoSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutIsLoggedIntoSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutIsLoggedIntoSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutIsLoggedIntoSessionsInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HasAccount: z.lazy(() => AccountsUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutIsLoggedIntoSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutIsLoggedIntoSessionsInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HasAccount: z.lazy(() => AccountsUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AccountsCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountsCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  AccountType: z.lazy(() => AccountTypeSchema),
  password: z.string().optional().nullable(),
  salt: z.string().optional().nullable()
}).strict();

export const AccountsUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountsUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  AccountType: z.lazy(() => AccountTypeSchema),
  password: z.string().optional().nullable(),
  salt: z.string().optional().nullable()
}).strict();

export const AccountsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountsCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
}).strict();

export const AccountsUpsertWithoutUserInputSchema: z.ZodType<Prisma.AccountsUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => AccountsUpdateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountsCreateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => AccountsWhereInputSchema).optional()
}).strict();

export const AccountsUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountsUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AccountsUpdateWithoutUserInputSchema),z.lazy(() => AccountsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountsUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountsUpdateWithoutUserInput> = z.object({
  AccountType: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountsUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountsUncheckedUpdateWithoutUserInput> = z.object({
  AccountType: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salt: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutHasAccountInputSchema: z.ZodType<Prisma.UserCreateWithoutHasAccountInput> = z.object({
  id: z.string().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  name: z.string(),
  brandId: z.string(),
  IsLoggedIntoSessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutHasAccountInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutHasAccountInput> = z.object({
  id: z.string().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  name: z.string(),
  brandId: z.string(),
  IsLoggedIntoSessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutHasAccountInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutHasAccountInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutHasAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutHasAccountInputSchema) ]),
}).strict();

export const UserUpsertWithoutHasAccountInputSchema: z.ZodType<Prisma.UserUpsertWithoutHasAccountInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutHasAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHasAccountInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutHasAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutHasAccountInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutHasAccountInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutHasAccountInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutHasAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHasAccountInputSchema) ]),
}).strict();

export const UserUpdateWithoutHasAccountInputSchema: z.ZodType<Prisma.UserUpdateWithoutHasAccountInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  IsLoggedIntoSessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutHasAccountInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutHasAccountInput> = z.object({
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  IsLoggedIntoSessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string(),
  expiresAt: z.coerce.date()
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const MagicLinksFindFirstArgsSchema: z.ZodType<Prisma.MagicLinksFindFirstArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  where: MagicLinksWhereInputSchema.optional(),
  orderBy: z.union([ MagicLinksOrderByWithRelationInputSchema.array(),MagicLinksOrderByWithRelationInputSchema ]).optional(),
  cursor: MagicLinksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MagicLinksScalarFieldEnumSchema,MagicLinksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MagicLinksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MagicLinksFindFirstOrThrowArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  where: MagicLinksWhereInputSchema.optional(),
  orderBy: z.union([ MagicLinksOrderByWithRelationInputSchema.array(),MagicLinksOrderByWithRelationInputSchema ]).optional(),
  cursor: MagicLinksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MagicLinksScalarFieldEnumSchema,MagicLinksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MagicLinksFindManyArgsSchema: z.ZodType<Prisma.MagicLinksFindManyArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  where: MagicLinksWhereInputSchema.optional(),
  orderBy: z.union([ MagicLinksOrderByWithRelationInputSchema.array(),MagicLinksOrderByWithRelationInputSchema ]).optional(),
  cursor: MagicLinksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MagicLinksScalarFieldEnumSchema,MagicLinksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MagicLinksAggregateArgsSchema: z.ZodType<Prisma.MagicLinksAggregateArgs> = z.object({
  where: MagicLinksWhereInputSchema.optional(),
  orderBy: z.union([ MagicLinksOrderByWithRelationInputSchema.array(),MagicLinksOrderByWithRelationInputSchema ]).optional(),
  cursor: MagicLinksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MagicLinksGroupByArgsSchema: z.ZodType<Prisma.MagicLinksGroupByArgs> = z.object({
  where: MagicLinksWhereInputSchema.optional(),
  orderBy: z.union([ MagicLinksOrderByWithAggregationInputSchema.array(),MagicLinksOrderByWithAggregationInputSchema ]).optional(),
  by: MagicLinksScalarFieldEnumSchema.array(),
  having: MagicLinksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MagicLinksFindUniqueArgsSchema: z.ZodType<Prisma.MagicLinksFindUniqueArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  where: MagicLinksWhereUniqueInputSchema,
}).strict() ;

export const MagicLinksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MagicLinksFindUniqueOrThrowArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  where: MagicLinksWhereUniqueInputSchema,
}).strict() ;

export const ResetTokensFindFirstArgsSchema: z.ZodType<Prisma.ResetTokensFindFirstArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  where: ResetTokensWhereInputSchema.optional(),
  orderBy: z.union([ ResetTokensOrderByWithRelationInputSchema.array(),ResetTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResetTokensScalarFieldEnumSchema,ResetTokensScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ResetTokensFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ResetTokensFindFirstOrThrowArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  where: ResetTokensWhereInputSchema.optional(),
  orderBy: z.union([ ResetTokensOrderByWithRelationInputSchema.array(),ResetTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResetTokensScalarFieldEnumSchema,ResetTokensScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ResetTokensFindManyArgsSchema: z.ZodType<Prisma.ResetTokensFindManyArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  where: ResetTokensWhereInputSchema.optional(),
  orderBy: z.union([ ResetTokensOrderByWithRelationInputSchema.array(),ResetTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResetTokensScalarFieldEnumSchema,ResetTokensScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ResetTokensAggregateArgsSchema: z.ZodType<Prisma.ResetTokensAggregateArgs> = z.object({
  where: ResetTokensWhereInputSchema.optional(),
  orderBy: z.union([ ResetTokensOrderByWithRelationInputSchema.array(),ResetTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: ResetTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ResetTokensGroupByArgsSchema: z.ZodType<Prisma.ResetTokensGroupByArgs> = z.object({
  where: ResetTokensWhereInputSchema.optional(),
  orderBy: z.union([ ResetTokensOrderByWithAggregationInputSchema.array(),ResetTokensOrderByWithAggregationInputSchema ]).optional(),
  by: ResetTokensScalarFieldEnumSchema.array(),
  having: ResetTokensScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ResetTokensFindUniqueArgsSchema: z.ZodType<Prisma.ResetTokensFindUniqueArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  where: ResetTokensWhereUniqueInputSchema,
}).strict() ;

export const ResetTokensFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ResetTokensFindUniqueOrThrowArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  where: ResetTokensWhereUniqueInputSchema,
}).strict() ;

export const VerifyEmailTokensFindFirstArgsSchema: z.ZodType<Prisma.VerifyEmailTokensFindFirstArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  where: VerifyEmailTokensWhereInputSchema.optional(),
  orderBy: z.union([ VerifyEmailTokensOrderByWithRelationInputSchema.array(),VerifyEmailTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: VerifyEmailTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerifyEmailTokensScalarFieldEnumSchema,VerifyEmailTokensScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerifyEmailTokensFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerifyEmailTokensFindFirstOrThrowArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  where: VerifyEmailTokensWhereInputSchema.optional(),
  orderBy: z.union([ VerifyEmailTokensOrderByWithRelationInputSchema.array(),VerifyEmailTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: VerifyEmailTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerifyEmailTokensScalarFieldEnumSchema,VerifyEmailTokensScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerifyEmailTokensFindManyArgsSchema: z.ZodType<Prisma.VerifyEmailTokensFindManyArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  where: VerifyEmailTokensWhereInputSchema.optional(),
  orderBy: z.union([ VerifyEmailTokensOrderByWithRelationInputSchema.array(),VerifyEmailTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: VerifyEmailTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerifyEmailTokensScalarFieldEnumSchema,VerifyEmailTokensScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerifyEmailTokensAggregateArgsSchema: z.ZodType<Prisma.VerifyEmailTokensAggregateArgs> = z.object({
  where: VerifyEmailTokensWhereInputSchema.optional(),
  orderBy: z.union([ VerifyEmailTokensOrderByWithRelationInputSchema.array(),VerifyEmailTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: VerifyEmailTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerifyEmailTokensGroupByArgsSchema: z.ZodType<Prisma.VerifyEmailTokensGroupByArgs> = z.object({
  where: VerifyEmailTokensWhereInputSchema.optional(),
  orderBy: z.union([ VerifyEmailTokensOrderByWithAggregationInputSchema.array(),VerifyEmailTokensOrderByWithAggregationInputSchema ]).optional(),
  by: VerifyEmailTokensScalarFieldEnumSchema.array(),
  having: VerifyEmailTokensScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerifyEmailTokensFindUniqueArgsSchema: z.ZodType<Prisma.VerifyEmailTokensFindUniqueArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  where: VerifyEmailTokensWhereUniqueInputSchema,
}).strict() ;

export const VerifyEmailTokensFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerifyEmailTokensFindUniqueOrThrowArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  where: VerifyEmailTokensWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const AccountsFindFirstArgsSchema: z.ZodType<Prisma.AccountsFindFirstArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountsScalarFieldEnumSchema,AccountsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountsFindFirstOrThrowArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountsScalarFieldEnumSchema,AccountsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountsFindManyArgsSchema: z.ZodType<Prisma.AccountsFindManyArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountsScalarFieldEnumSchema,AccountsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountsAggregateArgsSchema: z.ZodType<Prisma.AccountsAggregateArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithRelationInputSchema.array(),AccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountsGroupByArgsSchema: z.ZodType<Prisma.AccountsGroupByArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
  orderBy: z.union([ AccountsOrderByWithAggregationInputSchema.array(),AccountsOrderByWithAggregationInputSchema ]).optional(),
  by: AccountsScalarFieldEnumSchema.array(),
  having: AccountsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountsFindUniqueArgsSchema: z.ZodType<Prisma.AccountsFindUniqueArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict() ;

export const AccountsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountsFindUniqueOrThrowArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict() ;

export const MagicLinksCreateArgsSchema: z.ZodType<Prisma.MagicLinksCreateArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  data: z.union([ MagicLinksCreateInputSchema,MagicLinksUncheckedCreateInputSchema ]),
}).strict() ;

export const MagicLinksUpsertArgsSchema: z.ZodType<Prisma.MagicLinksUpsertArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  where: MagicLinksWhereUniqueInputSchema,
  create: z.union([ MagicLinksCreateInputSchema,MagicLinksUncheckedCreateInputSchema ]),
  update: z.union([ MagicLinksUpdateInputSchema,MagicLinksUncheckedUpdateInputSchema ]),
}).strict() ;

export const MagicLinksCreateManyArgsSchema: z.ZodType<Prisma.MagicLinksCreateManyArgs> = z.object({
  data: z.union([ MagicLinksCreateManyInputSchema,MagicLinksCreateManyInputSchema.array() ]),
}).strict() ;

export const MagicLinksDeleteArgsSchema: z.ZodType<Prisma.MagicLinksDeleteArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  where: MagicLinksWhereUniqueInputSchema,
}).strict() ;

export const MagicLinksUpdateArgsSchema: z.ZodType<Prisma.MagicLinksUpdateArgs> = z.object({
  select: MagicLinksSelectSchema.optional(),
  data: z.union([ MagicLinksUpdateInputSchema,MagicLinksUncheckedUpdateInputSchema ]),
  where: MagicLinksWhereUniqueInputSchema,
}).strict() ;

export const MagicLinksUpdateManyArgsSchema: z.ZodType<Prisma.MagicLinksUpdateManyArgs> = z.object({
  data: z.union([ MagicLinksUpdateManyMutationInputSchema,MagicLinksUncheckedUpdateManyInputSchema ]),
  where: MagicLinksWhereInputSchema.optional(),
}).strict() ;

export const MagicLinksDeleteManyArgsSchema: z.ZodType<Prisma.MagicLinksDeleteManyArgs> = z.object({
  where: MagicLinksWhereInputSchema.optional(),
}).strict() ;

export const ResetTokensCreateArgsSchema: z.ZodType<Prisma.ResetTokensCreateArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  data: z.union([ ResetTokensCreateInputSchema,ResetTokensUncheckedCreateInputSchema ]),
}).strict() ;

export const ResetTokensUpsertArgsSchema: z.ZodType<Prisma.ResetTokensUpsertArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  where: ResetTokensWhereUniqueInputSchema,
  create: z.union([ ResetTokensCreateInputSchema,ResetTokensUncheckedCreateInputSchema ]),
  update: z.union([ ResetTokensUpdateInputSchema,ResetTokensUncheckedUpdateInputSchema ]),
}).strict() ;

export const ResetTokensCreateManyArgsSchema: z.ZodType<Prisma.ResetTokensCreateManyArgs> = z.object({
  data: z.union([ ResetTokensCreateManyInputSchema,ResetTokensCreateManyInputSchema.array() ]),
}).strict() ;

export const ResetTokensDeleteArgsSchema: z.ZodType<Prisma.ResetTokensDeleteArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  where: ResetTokensWhereUniqueInputSchema,
}).strict() ;

export const ResetTokensUpdateArgsSchema: z.ZodType<Prisma.ResetTokensUpdateArgs> = z.object({
  select: ResetTokensSelectSchema.optional(),
  data: z.union([ ResetTokensUpdateInputSchema,ResetTokensUncheckedUpdateInputSchema ]),
  where: ResetTokensWhereUniqueInputSchema,
}).strict() ;

export const ResetTokensUpdateManyArgsSchema: z.ZodType<Prisma.ResetTokensUpdateManyArgs> = z.object({
  data: z.union([ ResetTokensUpdateManyMutationInputSchema,ResetTokensUncheckedUpdateManyInputSchema ]),
  where: ResetTokensWhereInputSchema.optional(),
}).strict() ;

export const ResetTokensDeleteManyArgsSchema: z.ZodType<Prisma.ResetTokensDeleteManyArgs> = z.object({
  where: ResetTokensWhereInputSchema.optional(),
}).strict() ;

export const VerifyEmailTokensCreateArgsSchema: z.ZodType<Prisma.VerifyEmailTokensCreateArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  data: z.union([ VerifyEmailTokensCreateInputSchema,VerifyEmailTokensUncheckedCreateInputSchema ]),
}).strict() ;

export const VerifyEmailTokensUpsertArgsSchema: z.ZodType<Prisma.VerifyEmailTokensUpsertArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  where: VerifyEmailTokensWhereUniqueInputSchema,
  create: z.union([ VerifyEmailTokensCreateInputSchema,VerifyEmailTokensUncheckedCreateInputSchema ]),
  update: z.union([ VerifyEmailTokensUpdateInputSchema,VerifyEmailTokensUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerifyEmailTokensCreateManyArgsSchema: z.ZodType<Prisma.VerifyEmailTokensCreateManyArgs> = z.object({
  data: z.union([ VerifyEmailTokensCreateManyInputSchema,VerifyEmailTokensCreateManyInputSchema.array() ]),
}).strict() ;

export const VerifyEmailTokensDeleteArgsSchema: z.ZodType<Prisma.VerifyEmailTokensDeleteArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  where: VerifyEmailTokensWhereUniqueInputSchema,
}).strict() ;

export const VerifyEmailTokensUpdateArgsSchema: z.ZodType<Prisma.VerifyEmailTokensUpdateArgs> = z.object({
  select: VerifyEmailTokensSelectSchema.optional(),
  data: z.union([ VerifyEmailTokensUpdateInputSchema,VerifyEmailTokensUncheckedUpdateInputSchema ]),
  where: VerifyEmailTokensWhereUniqueInputSchema,
}).strict() ;

export const VerifyEmailTokensUpdateManyArgsSchema: z.ZodType<Prisma.VerifyEmailTokensUpdateManyArgs> = z.object({
  data: z.union([ VerifyEmailTokensUpdateManyMutationInputSchema,VerifyEmailTokensUncheckedUpdateManyInputSchema ]),
  where: VerifyEmailTokensWhereInputSchema.optional(),
}).strict() ;

export const VerifyEmailTokensDeleteManyArgsSchema: z.ZodType<Prisma.VerifyEmailTokensDeleteManyArgs> = z.object({
  where: VerifyEmailTokensWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const AccountsCreateArgsSchema: z.ZodType<Prisma.AccountsCreateArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  data: z.union([ AccountsCreateInputSchema,AccountsUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountsUpsertArgsSchema: z.ZodType<Prisma.AccountsUpsertArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
  create: z.union([ AccountsCreateInputSchema,AccountsUncheckedCreateInputSchema ]),
  update: z.union([ AccountsUpdateInputSchema,AccountsUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountsCreateManyArgsSchema: z.ZodType<Prisma.AccountsCreateManyArgs> = z.object({
  data: z.union([ AccountsCreateManyInputSchema,AccountsCreateManyInputSchema.array() ]),
}).strict() ;

export const AccountsDeleteArgsSchema: z.ZodType<Prisma.AccountsDeleteArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  where: AccountsWhereUniqueInputSchema,
}).strict() ;

export const AccountsUpdateArgsSchema: z.ZodType<Prisma.AccountsUpdateArgs> = z.object({
  select: AccountsSelectSchema.optional(),
  include: AccountsIncludeSchema.optional(),
  data: z.union([ AccountsUpdateInputSchema,AccountsUncheckedUpdateInputSchema ]),
  where: AccountsWhereUniqueInputSchema,
}).strict() ;

export const AccountsUpdateManyArgsSchema: z.ZodType<Prisma.AccountsUpdateManyArgs> = z.object({
  data: z.union([ AccountsUpdateManyMutationInputSchema,AccountsUncheckedUpdateManyInputSchema ]),
  where: AccountsWhereInputSchema.optional(),
}).strict() ;

export const AccountsDeleteManyArgsSchema: z.ZodType<Prisma.AccountsDeleteManyArgs> = z.object({
  where: AccountsWhereInputSchema.optional(),
}).strict() ;