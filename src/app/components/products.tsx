"use client";
import clsx from "clsx";
import prd from "../styles/index.module.scss";
import useSWR from "swr";
import { urlProduct } from "./url";
import Image from "next/image";
export default function Product() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(urlProduct, fetcher);
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <div className={clsx(prd.prd_container, prd.black)}>
        {data &&
          data?.map((item: any, index: number) => {
            return (
              <div className={clsx(prd.prd_item)} key={index}>
                <div className={clsx(prd.prd_item_img)}>
                  <Image
                    src={`${item.image}`}
                    alt={item.name}
                    width={2560}
                    height={1440}
                    sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw, 33vw"
                    className={clsx(prd.imgRender)}
                  />
                </div>
                <div className={clsx(prd.prd_item_info)}>
                  <div className={clsx(prd.prd_item_name)}>
                    name: {item.name}
                  </div>
                  <div className={clsx(prd.prd_item_price)}>
                    Price: {item.price}
                  </div>
                </div>
                <div className={clsx(prd.prdbtn_container)}>
                  <button className={clsx(prd.prd_item_btn)}>
                    Add to cart
                  </button>
                  <button className={clsx(prd.prd_item_btn)}>Buy now</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
