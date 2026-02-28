import * as fs from 'fs';
import * as path from 'path';

export type EnvName = 'local' | 'staging' | 'production';

export interface EnvConfigFile {
  env: EnvName;
  urls: Record<EnvName, string>;
}

/**
 * Reads env.config.json from the project root and returns its content.
 * Throws a clear error if the file is missing or malformed.
 */
function readEnvConfigFile(): EnvConfigFile {
  // Adjust relative path if your env.config.json is not in project root:
  // here we assume: <project-root>/env.config.json
  const configPath = path.resolve(__dirname, '../../env.config.json');

  if (!fs.existsSync(configPath)) {
    throw new Error(
      `env.config.json not found at: ${configPath}. ` +
      `Please ensure the file exists in the project root.`
    );
  }

  const raw = fs.readFileSync(configPath, 'utf-8');
  let json: EnvConfigFile;

  try {
    json = JSON.parse(raw) as EnvConfigFile;
  } catch (e) {
    throw new Error(
      `Failed to parse env.config.json. Make sure it contains valid JSON. Original error: ${(e as Error).message}`
    );
  }

  if (!json.env || !json.urls) {
    throw new Error(
      'env.config.json is malformed. Expected properties: "env" and "urls".'
    );
  }

  return json;
}

/**
 * Returns the active environment name.
 * Priority:
 *  1) process.env.TEST_ENV  (CLI / CI)
 *  2) env.config.json       (local default)
 */
export function getActiveEnvName(): EnvName {
  const envFromCli = process.env.TEST_ENV as EnvName | undefined;

  if (envFromCli) {
    console.log(`[envResolver] Using environment from TEST_ENV: ${envFromCli}`);
    return envFromCli;
  }

  const fileConfig = readEnvConfigFile();
  console.log(`[envResolver] Using environment from env.config.json: ${fileConfig.env}`);

  return fileConfig.env;
}

/**
 * Returns the base URL for the given environment.
 * Ensures that the URL always ends with a trailing slash.
 */
export function getBaseUrlForEnv(envName?: EnvName): string {
  const fileConfig = readEnvConfigFile();
  const finalEnv = envName ?? getActiveEnvName();

  const url = fileConfig.urls[finalEnv];

  if (!url) {
    throw new Error(`[envResolver] No URL configured for environment: ${finalEnv}`);
  }

  // Ensure trailing slash to safely concatenate relative paths like "login.html"
  return url.endsWith('/') ? url : `${url}/`;
}

/**
 * Convenience method: resolves environment and returns { envName, baseURL }.
 */
export function resolveEnvironment() {
  const envName = getActiveEnvName();
  const baseURL = getBaseUrlForEnv(envName);
  return { envName, baseURL };
}