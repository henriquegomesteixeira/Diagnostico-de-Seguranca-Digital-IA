import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Mensagem é obrigatória" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("OPENAI_API_KEY não configurada no ambiente");
      return NextResponse.json({ error: "Serviço temporariamente indisponível" }, { status: 500 });
    }

    // Chamada para a API da OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Você é um especialista em segurança digital. Dê orientações práticas, simples e objetivas para problemas de segurança online. Sempre forneça soluções claras e passos específicos que o usuário pode seguir. Seja educativo e tranquilizador, explicando os riscos de forma compreensível e oferecendo medidas preventivas.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Erro da OpenAI:", errorData);
      return NextResponse.json({ error: "Erro na comunicação com a IA. Tente novamente em alguns instantes." }, { status: 500 });
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "Não foi possível gerar uma resposta.";

    return NextResponse.json({
      response: aiResponse,
    });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
