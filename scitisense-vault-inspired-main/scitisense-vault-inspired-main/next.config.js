import { execFileSync } from "node:child_process";

function deploymentVersion() {
    const version = process.env.NEXT_DEPLOYMENT_ID || process.env.VERCEL_DEPLOYMENT_ID
        || process.env.DEPLOY_ID || process.env.VERCEL_GIT_COMMIT_SHA
        || process.env.COMMIT_REF || process.env.GITHUB_SHA;
    if (version) return version;
    try {
        return execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    } catch {
        // Hosts without Git can supply NEXT_DEPLOYMENT_ID when building.
        return undefined;
    }
}

const version = deploymentVersion();
const nextConfig = {
    devIndicators: false,
    deploymentId: version,
    env: { NEXT_PUBLIC_SITE_VERSION: version || "" },
};
export default nextConfig;
