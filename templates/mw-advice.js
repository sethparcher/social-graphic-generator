export function renderMWAdvice(ctx, canvas, state, marketWatchLogo, drawAspectFill, wrapText) {
    // 1. Fill background with green
    ctx.fillStyle = '#6B8E23'; // Olive green color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw "ADVICE" header
    ctx.fillStyle = 'white';
    ctx.font = 'bold 36px Helvetica, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ADVICE', canvas.width / 2, 120);

    // 3. Draw main headline text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 72px Helvetica, Arial, sans-serif';
    ctx.textAlign = 'center';
    wrapText(state.headline, canvas.width / 2, 200, 960, 80);

    // 4. Draw image in bottom section (centered, with padding)
    const imageY = 420;
    const imageHeight = 480;
    const imageWidth = 800;
    const imageX = (canvas.width - imageWidth) / 2;
    
    ctx.save();
    ctx.beginPath();
    ctx.rect(imageX, imageY, imageWidth, imageHeight);
    ctx.clip();
    drawAspectFill(state.image, imageX, imageY, imageWidth, imageHeight);
    ctx.restore();

    // 5. Draw MarketWatch logo at bottom
    const logoHeight = 60;
    const logoWidth = marketWatchLogo.width * (logoHeight / marketWatchLogo.height);
    if (logoWidth) {
        ctx.drawImage(marketWatchLogo, (canvas.width - logoWidth) / 2, canvas.height - logoHeight - 50, logoWidth, logoHeight);
    }
}
