import { useState, useEffect } from 'react'
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Header from "components/Header";
import Main from "components/Main";

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setScrolled(window.scrollY > 66)
  }

  useEffect(() => {
    setScrolled(window.scrollY > 66)
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header scrolled={scrolled} setOpen={setOpen} open={open}></Header>
      <Row noGutters>
        <Col>
          <Main open={open}></Main>
        </Col>
      </Row>
    </>
  );
}

export default App;
