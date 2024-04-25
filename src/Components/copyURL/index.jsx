// CopyURL.jsx
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "sonner";
import '../../index.css'

function CopyURL() {
  const [copiado, setCopiado] = useState("");

  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      <p className="text-xl font-bold">Copiar URL</p>
      <CopyToClipboard text='https://youtu.be/xumrHy_Mv6k?si=5Thwhu21DJ9kwIXG'>
        <button
          className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md text-center"
          onClick={() => {
            setCopiado(true);
            toast.success('Texto copiado exitosamente');
            setCopiado(false);
          }}
        >
          Copiar URL del tutorial
        </button>
      </CopyToClipboard>
      <Toaster richColors />
    </div>
  );
}

export { CopyURL };
