export function renderMarketWatch(ctx, canvas, state, marketWatchLogo, drawAspectFill, wrapText) {
    // 1. Draw full-bleed background image, maintaining aspect ratio
    drawAspectFill(state.image, 0, 0, canvas.width, canvas.height);

    // 2. Draw bottom gradient - darker
    const gradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Draw headline - smaller font, anchored at bottom
    ctx.fillStyle = 'white';
    ctx.font = '900 60px Helvetica, Arial, sans-serif';
    ctx.textAlign = 'left';
    wrapText(state.headline.toUpperCase(), 60, canvas.height - 180, 960, 70, true);

    // 4. Draw MarketWatch Logo
    const logoHeight = 60;
    const logoWidth = marketWatchLogo.width * (logoHeight / marketWatchLogo.height);
    if (logoWidth) {
        ctx.drawImage(marketWatchLogo, canvas.width - logoWidth - 50, canvas.height - logoHeight - 50, logoWidth, logoHeight);
    }
}
