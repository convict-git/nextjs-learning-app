/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui';

export default ({ content }: { content: { title: string } }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);

export async function getStaticProps(): Promise<
  { props: { content: { title: string } } } | undefined
> {
  return {
    props: {
      content: {
        title: 'Look at my note app tho',
      },
    },
  };
}
