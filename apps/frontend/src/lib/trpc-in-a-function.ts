/* eslint-disable react-hooks/rules-of-hooks */

import { trpc } from "@/trpc/server";

export async function trpcInAFunction() {
  return await trpc.user.findWithoutId.query();
}
