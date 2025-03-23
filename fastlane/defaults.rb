PROJECT_NAME = "rnapp"

PROJECT_DIR = File.expand_path('../', __dir__)
ANDROID_DIR = "#{PROJECT_DIR}/android"
IOS_DIR = "#{PROJECT_DIR}/ios"
BUILD_DIR = "#{PROJECT_DIR}/build"
BUILD_TMP_DIR = "#{BUILD_DIR}/intermediates"

XCODEPROJ_PATH = "#{IOS_DIR}/#{PROJECT_NAME}.xcodeproj"

# Default
LOG_LEVEL_SILENT = 0
# More logs, keeping sensitive data safe.
LOG_LEVEL_VERBOSE = 1
# IMPORTANT: Also prints sensitive data. Use only on local machine.
LOG_LEVEL_DEBUG = 2

def get_log_level()
  (ENV['RNAPP_CI_LOG_LEVEL'] || LOG_LEVEL_SILENT).to_i
end

def verbose_logging_enabled()
  get_log_level() >= 1
end

def debug_logging_enabled()
  get_log_level() >= 2
end
