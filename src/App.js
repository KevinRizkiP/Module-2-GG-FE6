import Center from "./components/contents/Center";
import Login from "./components/pages/Login";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        {/* <Sidebar />
        <Center /> */}
      </main>
        <Login />
    </div>
  );
}

export default App;
