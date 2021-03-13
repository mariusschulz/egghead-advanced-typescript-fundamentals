// const HTTPRequestMethod = {
//   GET: "GET",
//   POST: "POST",
// };

const HTTPRequestMethod = {
  GET: "GET",
  POST: "POST",
} as const;

type ValuesOf<T> = T[keyof T];
type HTTPRequestMethodType = ValuesOf<typeof HTTPRequestMethod>;

// async function fetchJSON(url: string, method: "GET" | "POST") {
async function fetchJSON(url: string, method: HTTPRequestMethodType) {
  const response = await fetch(url, { method });
  return response.json();
}

fetchJSON("https://example.com/", HTTPRequestMethod.GET).then(data => {
  // ...
});
