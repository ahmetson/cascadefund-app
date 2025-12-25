import { setup as setupAuth } from './auth';
import { setup as setupStar } from './star';

export async function setup(): Promise<void> {
    await setupAuth();
    await setupStar();
}


