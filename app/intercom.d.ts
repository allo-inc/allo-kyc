
export {};

declare global {
  interface Window {
    Intercom: (command: string, settings?: any) => void;
    intercomSettings: {
      api_base: string;
      app_id: string;
      name?: string;
      user_id?: string;
      email?: string;
      created_at?: number;
      [key: string]: any;
    };
  }
}

