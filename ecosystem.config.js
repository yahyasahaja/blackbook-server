module.exports = {
  apps : [{
    name: 'blackbook',
    script: 'build/index.js',
    instances: 1,
    autorestart: true,
    watch: ['src', 'build'],
    ignore_watch: ['node_modules', 'src/public/uploads'],
    watch_options: {
      'followSymlinks': false
    }, 
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
}