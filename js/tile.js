$(document).ready(function() {
    setInterval(possiblyAnimateTile, 5000);
});

function possiblyAnimateTile() {
    if (Math.random() < 0.5) {
        animateTile();
    }
}

function animateTile() {
    var tiles = $('.tile');
    var randomIndex = Math.floor(Math.random() * tiles.length);
    var selectedTile = tiles[randomIndex];

    var tileHeight = $(selectedTile).css('height');

    var front = $(selectedTile).find('.front');
    var back  = $(selectedTile).find('.back');

    if (front.is(':visible')) {
        swapTile(front, back, tileHeight);

    } else {
        swapTile(back, front, tileHeight);
    }
}

function swapTile (visibleTile, hiddenTile, tileHeight) {
    hiddenTile.css('top', '-' + tileHeight);
    visibleTile.css('top', '0px');
    hiddenTile.show();

    jQuery.queue(visibleTile.animate({
        'top': '+=' + tileHeight
    }, 1000, function() {
        visibleTile.hide();
    }));

    jQuery.queue(hiddenTile.animate({
        'top': '+=' + tileHeight
    }, 1000));
}
