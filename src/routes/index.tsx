import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
}
