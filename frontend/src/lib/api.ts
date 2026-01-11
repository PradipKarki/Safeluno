export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(path, options)
  if (!res.ok) throw new Error('API error')
  return res.json()
}
