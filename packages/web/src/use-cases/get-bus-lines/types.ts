export type GetBusLinesResult = { id: string; name: string }[]

export type GetBusLines = () => Promise<GetBusLinesResult>
