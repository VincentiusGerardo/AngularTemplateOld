import { UIRouter } from '@uirouter/angular';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';

export const states = [
    {
        name: 'home',
        url: '/',
        component: HomeComponent 
      },
      {
        name: 'about',
        url: '/About/:id',
        component: AboutComponent 
      },
      {
        name: 'test',
        url: '/Test',
        component: TestComponent 
      },
]

export function uiRouterConfig(router: UIRouter) {
    
    // Default Config
    router.urlService.rules.initial({ state: 'home' });
    router.urlService.rules.otherwise('/');

    //states.forEach(state => router.stateRegistry.register(state));
    
}

export const router = new UIRouter();
