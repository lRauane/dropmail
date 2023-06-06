"use client"
import React, { useState, useEffect } from "react";
import { Copy, RefreshCw } from "lucide-react";
import api from "../services/api";

export function AdressInput() {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);

  const generateEmailQuery = `
    mutation {
      introduceSession {
        id,
        expiresAt,
        addresses {
          address
        }
      }
    }
  `;

  const generateRandomEmail = async () => {
    try {
      const response = await api.post("/akajsgsgsgajja", { query: generateEmailQuery });
      const newEmail = response.data.data.introduceSession.addresses[0].address;
      setEmail(newEmail);
      setTimeLeft(15);
    } catch (error) {
      console.error("Erro ao gerar o email:", error);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  const handleUpdateEmail = () => {
    generateRandomEmail();
  };

  useEffect(() => {
    generateRandomEmail();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      generateRandomEmail();
    }
  }, [timeLeft]);

  const circleColor = timeLeft <= 5 ? "blue" : "gray";

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3 className="font-semibold text-xl">Seu email temporário é</h3>
      <div className="flex">
        <input
          type="text"
          className="w-full rounded-l bg-white border border-gray-300 focus:outline-none px-8"
          value={email}
          readOnly
        />
        <button
          className="flex items-center gap-2 border p-2 rounded-r border-gray-300 before:content-copy before:align-middle"
          onClick={handleCopyEmail}
        >
          <Copy size={20} />
          Copiar
        </button>
      </div>
      <div className="flex items-center gap-4">
        <h4>
          Atualização de emails em{" "}
          <span
            className={`border rounded-[50%] p-2 text-white border-${circleColor}-500`}
          >
            {timeLeft}
          </span>
        </h4>
        <button
          className="flex items-center border border-gray-300 p-2 gap-2"
          onClick={handleUpdateEmail}
        >
          <RefreshCw size={20} />
          Atualizar
        </button>
      </div>
    </div>
  );
}
