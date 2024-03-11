
import MainContent from './components/MainContent';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Topbar from './components/Topbar';

const App: React.FC = () => (
  <div className="flex flex-col h-screen w-full">
    <Navbar />
    <Topbar />
    <div className="flex flex-grow">
      <SideMenu />
      <MainContent />
    </div>
    <Footer />
  </div>
);

export default App;
