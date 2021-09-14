/** @jsxRuntime classic */
/** @jsx jsx */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui';
import NoteType from '../../types/note';
export default ({ note: { title } }: { note: NoteType }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>{title}</h1>
    </div>
  );
};

type GetServerSidePropsReturn = {
  props: {
    note?: NoteType;
  };
};

export async function getServerSideProps({
  params,
  res,
}: {
  params: any;
  res: any;
}): Promise<GetServerSidePropsReturn | undefined> {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
