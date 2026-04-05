import * as dotenv from "dotenv";

dotenv.config({ override: true });

// Use application-specific environment values from .env.
// `override: true` is required here because some systems already define `USERNAME`
// and `PASSWORD` in the OS environment, which would otherwise prevent .env values
// from being loaded for the test credentials.
export const env = {
  USERNAME: process.env.USERNAME!,
  PASSWORD: process.env.PASSWORD!,
  BASE_URL: process.env.BASE_URL!,
};
