"use client";
import cte from "../styles/index.module.scss";
import Image from "next/image";
import clsx from "clsx";
import useSWR from "swr";
import { urlCategory } from "./url";
export default function Category() {
  const fetcher = (url: string) =>
    fetch(url).then((response) => response.json());
  const { data, error, isLoading } = useSWR(urlCategory, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={clsx(cte.cte_container)}>
        {data &&
          data.map((item: any, index: number) => {
            return (
              <div key={index} className={clsx(cte.item)}>
                <div className={clsx(cte.image)}>
                  <Image
                    src={`${item.image}`}
                    alt={item.name}
                    width={2560}
                    height={1440}
                    sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw, 33vw"
                    className={clsx(cte.imgRender)}
                  />
                </div>
                <div className={clsx(cte.contentCte)}>{item.name}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}
