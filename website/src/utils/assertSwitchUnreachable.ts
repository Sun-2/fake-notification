export function assertSwitchUnreachable(arg: never): never {
  throw new Error("Didn't expect to get here");
}