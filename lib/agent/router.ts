import type { AIProvider } from "./types";

export class ModelRouter {
  private providers: AIProvider[] = [];

  add(provider: AIProvider): void {
    this.providers.push(provider);
  }

  getDefault(): AIProvider {
    const provider = this.providers[0];

    if (!provider) {
      throw new Error("No AI provider configured");
    }

    return provider;
  }

  getAll(): AIProvider[] {
    return this.providers;
  }
}
