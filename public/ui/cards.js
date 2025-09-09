export function drawCard(ctx, code, x, y) {
  // TODO: draw card sprite
  ctx.fillStyle = 'white';
  ctx.fillRect(x,y,40,60);
  ctx.fillStyle = 'black';
  ctx.fillText(code, x+5, y+30);
}
