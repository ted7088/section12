import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

//1. "/" : 모든 일기를 조회하는 home 페이지
//2. "/new " 새로운 일기를 작성하는 new 페이지
//3. "/diary" 일기를 상세히 조회하는 diary 페이지지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header 
      title={"Header"}
      leftChild={<Button text ={"Left"}/>}
      rightChild={<Button text ={"Rigth"}/>}
      />


      <Button
        text={123}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Button
        text={123}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Button
        text={123}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/new"}> New </Link>
        <Link to={"/diary"}> Diary </Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
