import { CustomError } from 'utils/custom-error'

export class ContextOutsideProviderError extends CustomError {
  constructor(contextName: string) {
    super(
      ContextOutsideProviderError,
      `You cannot access context (${contextName}) outside a provider`
    )
  }
}
