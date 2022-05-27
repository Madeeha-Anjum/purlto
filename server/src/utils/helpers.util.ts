export function getRequiredEnv(envVarKey: string): string {
  const value = process.env[envVarKey];
  if (!value) {
    throw new Error(`Could not find environment variable: ${envVarKey}`);
  }
  return value;
}
