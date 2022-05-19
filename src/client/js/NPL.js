async function NPLText(text) {
  const body = {
    article: text
  }
  const response = await fetch(`${apiUrl}/sentiment-text`, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if(response.status != 200) throw (response.body);
  const result = await response.json();
  return result;
}

async function NPLUrl(url) {
  const body = {
    url: url
  }
  const response = await fetch(`${apiUrl}/sentiment-url`, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if(response.status != 200) throw (response.body);
  const result = await response.json();
  return result;
}


export { NPLText, NPLUrl}