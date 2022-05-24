import { IGenreResponseProps } from "../interfaces/genreResponseProps.I";

export const HeaderView = (selectedGenre: IGenreResponseProps) => {
    return(
    <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>);
};