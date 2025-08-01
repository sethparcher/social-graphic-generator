export function renderBarrons(ctx, canvas, state, drawAspectFill, wrapText) {
    const imgHeight = canvas.height * 0.55;
    const textBoxHeight = canvas.height * 0.45;

    // Fill background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 1. Draw image in top 55%, clipped and maintaining aspect ratio
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, imgHeight);
    ctx.clip();
    drawAspectFill(state.image, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // 2. Draw black box in bottom 45%
    ctx.fillStyle = 'black';
    ctx.fillRect(0, imgHeight, canvas.width, textBoxHeight);

    let textY = imgHeight + 100;

    // 3. Draw "EXCLUSIVE" tag if checked
    if (state.showExclusive) {
        ctx.fillStyle = '#E7B402'; // Barron's Yellow
        ctx.fillRect(60, textY - 55, 170, 40);
        ctx.fillStyle = 'black';
        ctx.font = 'bold 28px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('EXCLUSIVE', 60 + 170 / 2, textY - 25);
        textY += 30;
    }
    
    // 4. Draw headline
    ctx.fillStyle = 'white';
    ctx.font = "700 80px 'Playfair Display'";
    ctx.textAlign = 'left';
    const headlineLines = wrapText(state.headline, 60, textY, 960, 90);
    
    // 5. Draw subheadline
    const subheadlineY = textY + (headlineLines * 90) + 10;
    ctx.fillStyle = '#DDDDDD';
    ctx.font = '400 36px Lato';
    wrapText(state.subheadline, 60, subheadlineY, 960, 45);
}