def proxy_sh(command, options)
  sh("bundle exec fastlane #{command} #{to_shell_params(options)}")
end

def get_json_value(options)
  sh("cat #{options[:file]} | node -pe 'JSON.parse(fs.readFileSync(0)).#{options[:key]}'", log: debug_logging_enabled())
end

def to_shell_params(options)
  options.keys.map { |key| "#{key}:#{options[key]}" }.join(' ')
end
