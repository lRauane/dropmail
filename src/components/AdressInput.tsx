"use client";
import useInterval from "@/hooks/useInterval";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { GENERATE_SESSION, GET_EMAILS } from "@/services/querys";
import { Mail } from "@/types/TypeMail";
import { sessionType } from "@/types/TypeSession";
import { useMutation, useQuery } from "@apollo/client";

import { Copy, RefreshCw } from "lucide-react";
import { useState } from "react";

export function AdressInput() {
  const [interval, setInterval] = useState(15);
  const [session, setSession] = useLocalStorage<sessionType | undefined>(
    "session",
    undefined
  );
  const { loading: loadingQueryGetEmails, refetch: getEmails } =
    useQuery<Mail>(GET_EMAILS);
  const [generateSession, { loading: loadingQueryCreateSession }] =
    useMutation(GENERATE_SESSION);

  const generateEmail = async () => {
    const { data } = await generateSession();
    let { id, expiresAt, addresses } = data.introduceSession;
    let address = addresses[0].address;
    let formattedSession = {
      id,
      expiresAt,
      address,
    };
    setSession(formattedSession);
  };

  const copyEmailToClipboard = () => {
    session && navigator.clipboard.writeText(session.address);
  };
  if (interval === 0) {
    getEmails({ sessionid: session?.id }).then(() => setInterval(15));
  }
  useInterval(
    () =>
      setInterval((old) => {
        if (old < 1) {
          return 15;
        } else {
          return old - 1;
        }
      }),
    !loadingQueryGetEmails && session ? 1000 : null
  );

  const refreshEmails = () => {
    getEmails({ sessionid: session?.id }).then(() => setInterval(15));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3 className="font-semibold text-xl">Seu email temporário é</h3>
      <div className="flex">
        <input
          disabled
          defaultValue={session?.address}
          type="text"
          className="w-full rounded-l bg-white border border-gray-300 focus:outline-none px-8"
        />
        <button className="flex items-center gap-2 border p-2 rounded-r border-gray-300 before:content-copy before:align-middle" onClick={copyEmailToClipboard}>
          <Copy size={20} />
          Copiar
        </button>
      </div>
      <div className="flex items-center gap-4">
        <h4>
          Atualização de emails em{" "}
          <span className="border border-blue-500 rounded-[50%] p-2">
            {interval}
          </span>
        </h4>
        <button className="flex items-center border border-gray-300 p-2 gap-2" onClick={refreshEmails}>
          <RefreshCw size={20} />
          Atualizar
        </button>
      </div>
    </div>
  );
}