"use client";
import Category from "../components/categories";
import hm from "../styles/index.module.scss";
import clsx from "clsx";
import Product from "../components/products";
import Sidebar from "../components/app.sidebar";

export default function Home() {
  return (
    <div className={clsx(hm.green, hm.home_container)}>
      <div className={clsx(hm.sidebar)}>
        <Sidebar />
      </div>
      <div className={clsx(hm.home_content)}>
        <Category />
        <p>------------------My Product------------------</p>
        <Product />
      </div>
    </div>
  );
}
