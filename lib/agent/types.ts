export type AgentRole =
  | "user"
  | "assistant"
  | "system"
  | "tool";

export interface AgentMessage {
  role: AgentRole;
  content: string;
  timestamp?: number;
}

export interface AgentTask {
  id: string;
  input: string;
  status: "pending" | "planning" | "executing" | "completed" | "failed";
  createdAt: number;
}

export interface AgentResponse {
  success: boolean;
  message: string;
  taskId?: string;
  toolCalls?: string[];
}

export interface AIProvider {
  name: string;

  generate(
    messages: AgentMessage[],
    options?: {
      temperature?: number;
      maxTokens?: number;
    }
  ): Promise<string>;
}

export interface AgentTool {
  name: string;
  description: string;

  execute(
    input: string
  ): Promise<{
    success: boolean;
    output: string;
  }>;
}
