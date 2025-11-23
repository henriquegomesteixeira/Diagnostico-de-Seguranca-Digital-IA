"use client";

import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setError("Por favor, descreva seu problema de segurança digital.");
      return;
    }

    setIsLoading(true);
    setError("");
    setResponse("");

    try {
      const result = await fetch("/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
        }),
      });

      if (!result.ok) {
        throw new Error("Falha na comunicação com a IA");
      }

      const data = await result.json();
      setResponse(data.response);
    } catch (err) {
      setError("Erro ao gerar diagnóstico, tente novamente.");
      console.error("Erro:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const exampleQuestions = [
    "Recebi um email suspeito pedindo minha senha, pode ser phishing?",
    "Minha conta do WhatsApp foi clonada, o que devo fazer?",
    "Como criar uma senha forte e segura?",
    "Suspeito que meus dados vazaram, como verificar?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Diagnóstico de Segurança Digital</h1>
          </div>
          <p className="text-gray-300 text-lg">Orientações inteligentes para sua segurança online</p>
        </header>

        {/* Main Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-3">
                Descreva seu problema ou dúvida sobre segurança digital:
              </label>
              <textarea
                id="problem"
                rows={6}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ex: Recebi um email suspeito pedindo para confirmar minha senha do banco..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Example Questions */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Ou clique em uma das perguntas comuns:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setUserInput(question)}
                    className="text-left p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600/50 hover:text-white transition-colors text-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-400">
                <AlertTriangle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Gerando diagnóstico...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Gerar Diagnóstico
                </>
              )}
            </button>
          </form>

          {/* Response Area */}
          {response && (
            <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Diagnóstico de Segurança:
              </h3>
              <div className="text-gray-200 whitespace-pre-wrap leading-relaxed">{response}</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400">
          <p>Sistema desenvolvido para orientações de segurança digital</p>
          <p className="text-sm mt-2">Projeto de extensão - Engenharia de Software</p>
        </footer>
      </div>
    </div>
  );
}
