import { NextPageWithLayout } from '~/pages/_app';
import { Button } from '@/ui/button';
import { useTheme } from 'next-themes';

const IndexPage: NextPageWithLayout = () => {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const sysTheme: string = theme === 'dark' ? 'light' : 'dark';
    setTheme(sysTheme);
  }

  return (
    <div className="bg-slate-300 dark:bg-black grid justify-center items-center h-screen ">
      <div className="">
        <Button onClick={toggleTheme}>Magic appears</Button>
      </div>
    </div>
  );
};

export default IndexPage;
