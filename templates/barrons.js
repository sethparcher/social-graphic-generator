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

    // 3. Draw "EXCLUSIVE" tag if checked - centered on border
    let textY = imgHeight + 100;
    if (state.showExclusive) {
        const tagWidth = 170;
        const tagHeight = 40;
        const tagX = (canvas.width - tagWidth) / 2;
        const tagY = imgHeight - tagHeight / 2; // Center on the border
        
        ctx.fillStyle = '#E7B402'; // Barron's Yellow
        ctx.fillRect(tagX, tagY, tagWidth, tagHeight);
        ctx.fillStyle = 'black';
        ctx.font = 'bold 28px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('EXCLUSIVE', tagX + tagWidth / 2, tagY + tagHeight / 2 + 10);
        textY += 30;
    }
    
    // 4. Draw headline
    ctx.fillStyle = 'white';
    ctx.font = "700 64px 'Playfair Display'";
    ctx.textAlign = 'center';
    const headlineLines = wrapText(state.headline, canvas.width / 2, textY, 960, 75);
    
    // 5. Draw subheadline
    const subheadlineY = textY + (headlineLines * 75) + 10;
    ctx.fillStyle = '#DDDDDD';
    ctx.font = '400 30px Lato';
    ctx.textAlign = 'center';
    wrapText(state.subheadline, canvas.width / 2, subheadlineY, 960, 38);
}
