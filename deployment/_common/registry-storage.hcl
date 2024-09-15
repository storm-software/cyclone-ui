# ---------------------------------------------------------------------------------------------------------------------
# COMMON TERRAGRUNT CONFIGURATION
# This is the common component configuration for webserver-cluster. The common variables for each environment to
# deploy webserver-cluster are defined here. This configuration will be merged into the environment configuration
# via an include block.
# ---------------------------------------------------------------------------------------------------------------------

locals {
    workspace_root = "/home/runner/work/storm-docs/storm-docs"
    source_url = "git::https://github.com/storm-software/storm-ops.git//terraform-modules/cloudflare/r2-bucket"
}

# ---------------------------------------------------------------------------------------------------------------------
# MODULE PARAMETERS
# These are the variables we have to pass in to use the module. This defines the parameters that are common across all
# environments.
# ---------------------------------------------------------------------------------------------------------------------
inputs = {
    name = "cyclone-ui-registry-storage"
    workspace_root = local.workspace_root
}

