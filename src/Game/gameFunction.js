const Game = require ('./gameTable')

exports.addGame = async (gameObj) => {
    try {
        await Game.create(gameObj);
        
    } catch (error) {
        console.log(error)
        
    }
}

exports.listGames = async () => {
    try {
        return await Game.findAll();
    } catch (error) {
        console.log(error)
        
    }
exports.updateGame = async (gameObj) => {
        try {
            await Game.update(
                { genre: gameObj.genre },
                { where: { title: gameObj.title } }
            );
        } catch (error) {
            console.log(error);
        }
    }

exports.deleteGame = async (gameObj) => {
    try {
        await Game.destroy ({
            where: {title: gameObj.title}
        })
    } catch (error) {
        console.log (error)
    }
}
}