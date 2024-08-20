import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="card-container">
      <Card
        image="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Milk"
        description="Milk is best for Health"
      />
      <Card
        image="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Watch"
        description="The Best partner to share Time"
      />
      <Card
        image="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Camera"
        description="Camera is the Best instrument to capture the Moments"
      />
      <Card
        image="https://images.pexels.com/photos/279480/pexels-photo-279480.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Perfume"
        description="The way to be Attractive"
      />
      <Card
        image="https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Laptop"
        description="The revolution of the Current World"
      />
      <Card
        image="https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Iphone 13+ "
        description="The Brand and Choice of the Current World"
      />
    </div>
  );
}

export default App;
