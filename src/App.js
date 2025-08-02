import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import MuiThemeProvider from './components/common/muiTheme/muiTheme'
import GlobalAlert from './components/common/alert/globalAlert';
import Loading from './components/loading/loading';
import Login from './components/auth/login/login';

library.add(fas, far)

function App() {

  return (
    <>
      <MuiThemeProvider>
        <div className="h-screen">
          <Login />
          <Loading />
          <GlobalAlert />
        </div>
      </MuiThemeProvider>
    </>
  );
}

export default App;
