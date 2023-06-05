"use client"
import { AdressInput } from "@/components/AdressInput";
import { Header } from "@/components/Header";
import { Inbox } from "@/components/Inbox";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Home() {
  const urlAPI = process.env.NEXT_PUBLIC_URL_API;

  const client = new ApolloClient({
    uri: urlAPI,
    cache: new InMemoryCache(),
  })

  return(
     <ApolloProvider client={client}>
     <Header />
      <section className="border border-gray-300 p-10 m-4">
      <AdressInput />
      <Inbox />
      </section> 
      </ApolloProvider>
  )
}