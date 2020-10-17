export interface Router {
  state: {space?: string; tool: string}
  navigate: () => void
}

export interface Tool {
  canHandleIntent?: (intent: any, params: any, state: any) => any
  component?: React.ComponentType<any>
  icon?: React.ComponentType<any>
  getIntentState?: (intent: any, params: any, state: any, payload: any) => any
  name: string
  title: string
  router?: any
}

export interface User {
  email: string
  name?: string
  profileImage?: string
}
