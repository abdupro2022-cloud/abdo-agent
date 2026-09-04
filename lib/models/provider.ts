import type { AIProvider, AgentMessage } from "../agent/types";

export abstract class BaseAIProvider implements AIProvider {
  abstract name: string;

  abstract generate(
    messages: AgentMessage[],
    options?: {
      temperature?: number;
      maxTokens?: number;
    }
  ): Promise<string>;
}

export function createProvider(
  provider: AIProvider
): AIProvider {
  return provider;
}
