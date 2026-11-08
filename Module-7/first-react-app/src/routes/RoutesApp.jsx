// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
import {Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import DashboardPage, { DashboardMessages, DashboardTasks} from '../pages/DashboardPage.jsx';
import MUIForm from "../Module-7/Login MUI.jsx";
import MUIHome from "../Module-7/MUIHome.jsx";
import MUIBitcoinRates from "../Module-7/BitcoinRatesMUI.jsx";
function RoutesApp(props) {
return (
<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<Homepage {...props} />} />
{/* nested routes, matches on /dash/messages etc */}
<Route path="dash" element={<DashboardPage {...props} />}>
<Route path="messages" element={<DashboardMessages />}
/>
<Route path="tasks" element={<DashboardTasks />} />
</Route>
<Route path='/about' element={<AboutPage {...props} />} />
{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound />} />

<Route path="/login-mui" element={<MUIForm />} />
<Route path="/mui-home" element={<MUIHome />} />
<Route path="/mui-bitcoin-rates" element={<MUIBitcoinRates />} />
</Routes>
)
}
export default RoutesApp;
// Name this file AppRoutes.jsx and store in new folder 'routes'