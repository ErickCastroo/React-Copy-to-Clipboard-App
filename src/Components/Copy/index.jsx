// Copy.jsx
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "sonner";
import '../../index.css'

function Copy() {
  const [copiado, setCopiado] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      <p className="text-xl font-bold">Escribe Algo</p>
      <input
        className="border border-gray-300 text-black p-2 rounded-md w-full"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <CopyToClipboard text={text}>
        <button
          className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md text-center"
          onClick={() => {
            setCopiado(true);
            toast.success("Texto copiado exitosamente");
            setCopiado(false);
          }}
        >
          Copiar
        </button>
      </CopyToClipboard>

      <Toaster richColors />
    </div>
  );
}

export { Copy };
