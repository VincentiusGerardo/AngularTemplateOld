import { UIRouter } from '@uirouter/angular';
import { router } from '../config.routes';


export const common = {
    refreshState: () => {
        router.stateService.reload();
        //uiRouter.stateService.reload();
    }
}