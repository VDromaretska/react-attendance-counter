interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps): JSX.Element {
    return (
      <header>
        <h1>{title}</h1>
        {title.length<5 && <p> The title is a work-in-progress</p> }
        
      </header>
    )
  }
