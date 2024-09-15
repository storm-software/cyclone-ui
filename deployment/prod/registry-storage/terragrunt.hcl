# ---------------------------------------------------------------------------------------------------------------------
# TERRAGRUNT CONFIGURATION
# This is the configuration for Terragrunt, a thin wrapper for Terraform and OpenTofu that helps keep your code DRY and
# maintainable: https://github.com/gruntwork-io/terragrunt
# ---------------------------------------------------------------------------------------------------------------------

# Include the root `terragrunt.hcl` configuration. The root configuration contains settings that are common across all
# components and environments, such as how to configure remote state.
include "root" {
  path = find_in_parent_folders()
}

# Include the common configuration for the component. The common configuration contains settings that are common
# for the component across all environments.
include "common" {
  path = "${dirname(find_in_parent_folders())}/_common/registry-storage.hcl"
  # We want to reference the variables from the included config in this configuration, so we expose it.
  expose = true
}

# Configure the version of the module to use in this environment. This allows you to promote new versions one
# environment at a time (e.g., qa -> staging -> prod).
terraform {
  source = "${include.common.locals.source_url}?ref=main"
}

locals {
    environment_vars = read_terragrunt_config(find_in_parent_folders("env.hcl"))
}

# ---------------------------------------------------------------------------------------------------------------------
# Override parameters for this environment
# ---------------------------------------------------------------------------------------------------------------------

# For production, we want to specify bigger instance classes and cluster, so we specify override parameters here. These
# inputs get merged with the common inputs from the root and the common terragrunt.hcl
inputs = {
    log_level = local.environment_vars.locals.log_level
    environment = local.environment_vars.locals.environment
}
