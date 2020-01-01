module.exports = {
  apps: [
    {
      name: 'task-scheduler',
      script: 'server.ts',
      watch: true,
      restart_delay: 2000,
      env: {
        NODE_ENV: 'development',
        PORT: '5000',
      },
    },
  ],
};
