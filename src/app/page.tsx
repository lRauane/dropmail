"use client"
import { AdressInput } from "@/components/AdressInput";
import { Header } from "@/components/Header";
import { Inbox } from "@/components/Inbox";

export default function Home() {
  return (
    <>
      <Header />
      <section className="border border-gray-300 p-10 m-4">
        <AdressInput />
        <Inbox />
      </section>
    </>
  );
}
