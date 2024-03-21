

function App() {
  

  return (

    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
