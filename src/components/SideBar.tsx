import { IGenreResponseProps } from "../interfaces/genreResponseProps.I";
import { Button } from "./Button";


export function SideBar(props: { genres: IGenreResponseProps[]; handleClickButton: (arg0: number) => void; selectedGenreId: number; }) {
  return(<nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>);
}
