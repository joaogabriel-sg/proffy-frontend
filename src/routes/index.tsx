import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Study } from '../pages/Study';
import { GiveClasses } from '../pages/GiveClasses';

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/study" component={Study} />
      <Route path="/give-classes" component={GiveClasses} />
    </Switch>
  );
}
