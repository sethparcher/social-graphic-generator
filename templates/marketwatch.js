export function renderMarketWatch(ctx, canvas, state, marketWatchLogo, drawAspectFill, wrapText) {
    // 1. Draw full-bleed background image, maintaining aspect ratio
    drawAspectFill(state.image, 0, 0, canvas.width, canvas.height);

    // 2. Draw bottom gradient
    const gradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Draw headline
    ctx.fillStyle = 'white';
    ctx.font = '900 72px Helvetica, Arial, sans-serif'; // Heavy Helvetica
    ctx.textAlign = 'left';
    wrapText(state.headline.toUpperCase(), 60, canvas.height - 220, 960, 80, true);

    // 4. Draw MarketWatch Logo
    const logoHeight = 60;
    const logoWidth = marketWatchLogo.width * (logoHeight / marketWatchLogo.height);
    if (logoWidth) { // Only draw if width is calculated (i.e., logo has loaded)
        ctx.drawImage(marketWatchLogo, canvas.width - logoWidth - 50, canvas.height - logoHeight - 50, logoWidth, logoHeight);
    }
}