import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Button } from './components/ui/Button';
import { UploadCard } from './components/UploadCard';

const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] grid-cols-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="px-12 py-6 overflow-y-auto bg-gray-50">
        <div className="flex justify-end mb-4">
          <Button className="h-8 text-xs bg-blue-600 hover:bg-blue-700">
            Import Video
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <UploadCard />
          <UploadCard />
          <UploadCard />
        </div>
      </main>
    </div>
  );
};

export default App;
