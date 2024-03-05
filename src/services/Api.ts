

const BASE_URL = 'https://reqres.in/api';

async function fetchData(url: string, options: RequestInit = {}): Promise<any> {
  const response = await fetch(`${BASE_URL}${url}`, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function loginUser(email: string, password: string): Promise<any> {
  return fetchData('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
}

export async function registerUser(email: string, password: string): Promise<any> {
  return fetchData('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
}


