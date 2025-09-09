const canvas = document.getElementById('table');
const ctx = canvas.getContext('2d');

const ws = new WebSocket(`ws://${location.host}`);
ws.onmessage = (ev) => {
  const data = JSON.parse(ev.data);
  if (data.type === 'welcome') {
    console.log('welcome');
  }
};

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#006400';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

draw();
