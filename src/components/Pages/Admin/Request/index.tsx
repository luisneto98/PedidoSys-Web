import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserListPage from './List';

const RequestIndexPage = memo(() => {
  return (
    <Switch>
      <Route path='/' component={UserListPage} />
    </Switch>
  );
});

export default RequestIndexPage;
