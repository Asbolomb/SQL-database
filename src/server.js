const yargs = require ('yargs');
const {sequelize} = require ('./db/connection');
//import curd function
const {addGame, listGames, updateGame, deleteGame} = require ('./game/gameFunction')
const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            //add movie
            await addGame({title: yargsObj.title, genre: yargsObj.genre})
        }
        else if(yargsObj.list) {
            //list games
            console.log(await listGames());
        }
        else if (yargsObj.update){
            //update game
            await updateGame ({title: yargsObj.title, genre: yargsObj.genre})
        }
        else if (yargsObj.delete){
            //delete game
            await deleteGame({title: yargsObj.title})
        }
        else {
            console.log ('incorrect command')
        }
    } catch (error) {
        console.log(error)
    }

}
app(yargs.argv);