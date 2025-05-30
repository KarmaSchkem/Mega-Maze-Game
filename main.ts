browserEvents.Shift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Render.setAttribute(Render.attribute.dirX, 2.5)
})
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Released, function () {
    Render.setAttribute(Render.attribute.dirX, 1)
})
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 480
    export const ARCADE_SCREEN_HEIGHT = 270
}
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`niveau1`)
let mySprite = Render.getRenderSpriteVariable()
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
