/* react */
import { ReactElement } from 'react';

/* react-router-dom */
import {
  Route,
  Routes
} from 'react-router-dom';

/* pages */
import {
  MainPage
} from 'pages';

export const App = (): ReactElement => {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/areagw/request" element={<MainPage />} />
    </Routes>
  );
};
