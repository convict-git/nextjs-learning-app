// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui';
import Link from 'next/link';
import NoteType from '../../types/note';

export default ({ notes }: { notes: NoteType[] }): JSX.Element => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map((note: NoteType, index: number) => (
          <div key={index} sx={{ width: '33%', p: 2 }}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(): Promise<
  { props: { notes: NoteType[] } } | undefined
> {
  const { data } = await (
    await fetch(`http://localhost:3000/api/note/`)
  ).json();
  return {
    props: { notes: data },
  };
}
