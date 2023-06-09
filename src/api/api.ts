interface Order {
  id: number,
  productName: string,
  name: string,
  adress: string,
  phone: string
}

const API_URL = 'https://main--imaginative-brioche-4cc8d5.netlify.app/.netlify/functions/server';
//const API_URL = 'http://localhost:9000/.netlify/functions/server';

export async function getJournals() {
  const response = await fetch(`${API_URL}/journals`);

  return response.json();
}

export async function createOrder(data: Order) {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newOrder: data,
    })
  })

  return response.json();
}