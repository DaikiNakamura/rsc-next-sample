export async function RSComponent() {
  const data = await getData();
  
  return (
    <h1>{data.message}</h1>
  );
}

async function getData() {

  // Fetchの代わり？意味あるかは不明。
  const getMessage = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Wlcome to React Server Components!!')
      }, 3000)
    });
  }

  // データ取得
  const message = await getMessage();
  return {
    message
  };
}
