import * as Hapi from 'hapi';
import { logger } from './helpers/logger';

export class Server {
  constructor(private port: string) {}

  public async start() {
    try {
      const server: Hapi.Server = new Hapi.Server(<Hapi.ServerOptions>{
        port: this.port,
        routes: {
          cors: {
            origin: ['*'],
            headers: ['Access-Control-Allow-Origin', 'Accept', 'Authorization', 'Content-Type', 'user-agent'],
            credentials: true,
          },
        },
      });

      await server.start();
      logger.info('Server running at:', server.info.uri);
    } catch (err) {
      logger.error(`Server start error: `, err.message, err.stack);
    }
  }
}

export const server = new Server(process.env.PORT || '5000');
server.start();

process.on('unhandledRejection', (error: Error) => {
  console.error(error.message);
  console.error(error.stack);
});

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
});
