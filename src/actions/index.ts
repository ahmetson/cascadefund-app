import { server as demoActions } from '../demo-runtime-cookies/actions'
import { server as allStarsActions } from './all-stars'

export const server = {
    ...demoActions,
    ...allStarsActions,
}

