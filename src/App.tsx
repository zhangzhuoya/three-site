import styled from 'styled-components';
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
function App() {
  const Container = styled.div`
      height: 100vh;
      background: red;
      height: 100vh;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      overflow-y: auto;
      scrollbar-width: none;
      color: white;
      background: url("./img/bg.jpeg");
      &::-webkit-scrollbar{
        display: none;
      }
  `
  return (
    <Container className="App">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
