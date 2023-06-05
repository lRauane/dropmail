"use client"
import Image from "next/image";
import logoDrop from "../../public/logo.svg";
import { useState } from "react";

export function Header() {
  const [notificationPermission, setNotificationsPermission] = useState("");

  const hanleNotificationClick = async () => {
    if (Notification.permission === "granted") {
      showNotification();
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      setNotificationsPermission(permission);

      if (permission === "granted") {
        showNotification();
      }
    }
  };

  const showNotification = () => {
    new Notification("Nova mensagem", {
      body: "Você recebeu um novo e-mail!",
      icon: "caminho-para-o-icone.png", // substitua pelo caminho para o ícone desejado
    });
  };

  return (
    <header className="w-full bg-gray-500 px-10 py-7 flex justify-between items-center">
      <Image src={logoDrop} alt="logo do DropMain" />
      <button className="text-gray-100 rounded-sm p-3 hover:bg-blue-500/50 border border-blue-500" onClick={hanleNotificationClick}
      disabled={notificationPermission === "denied"}
      >
       Receber notificações
      </button>
    </header>
  );
}
