import mockResponse from "./mockResponse.json";

export async function fakeApi(): Promise<typeof mockResponse> {
  return new Promise((resolve) => setTimeout(() => resolve(mockResponse), 1000));
}
